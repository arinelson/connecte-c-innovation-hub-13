
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import CategoryList from '../components/blog/CategoryList';
import BlogHeader from '../components/blog/BlogHeader';
import ArticleList from '../components/blog/ArticleList';
import BlogPagination from '../components/blog/BlogPagination';
import BlogLayout from '../components/blog/BlogLayout';
import { allArticles, getPostsByCategory, searchPosts } from '../services/blogService';

const Blog = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  const [activeTab, setActiveTab] = useState('grid');
  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  
  // Force a clean render when navigating to this page
  useEffect(() => {
    document.title = 'Blog | Conecte-C';
    window.scrollTo(0, 0);
    
    setIsLoading(true);
    // Simulate loading
    const timer = setTimeout(() => {
      let results = allArticles;
      
      // Apply search filter if query exists
      if (searchQuery) {
        results = searchPosts(searchQuery);
        if (results.length === 0) {
          toast.error(`Nenhum resultado encontrado para "${searchQuery}"`);
        } else {
          toast.success(`${results.length} resultados encontrados para "${searchQuery}"`);
        }
      }
      
      setFilteredArticles(results);
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);
  
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredArticles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    // Navigate to category page for non-todos categories
    if (category.toLowerCase() !== 'todos') {
      navigate(`/blog/category/${category.toLowerCase()}`);
    }
  };
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header with search */}
        <BlogHeader searchQuery={searchQuery} />
        
        {/* Category Filter */}
        <div className="mb-8">
          <CategoryList 
            currentCategory={selectedCategory} 
            onCategorySelect={handleCategoryChange}
          />
        </div>
        
        {/* Content Grid with Sidebar */}
        <BlogLayout>
          <>
            {/* Articles list with view toggle */}
            <ArticleList 
              articles={currentPosts}
              isLoading={isLoading}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              articlesCount={filteredArticles.length}
            />
            
            {/* Pagination */}
            <BlogPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        </BlogLayout>
      </div>
    </div>
  );
};

export default Blog;
