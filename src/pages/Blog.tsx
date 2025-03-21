
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import SearchBar from '../components/shared/SearchBar';
import CategoryList from '../components/blog/CategoryList';
import BlogSidebar from '../components/blog/BlogSidebar';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from '@/lib/utils';
import { allArticles, searchPosts } from '../services/blogService';
import ArticleList from '../components/blog/ArticleList';

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
  
  const handleSearch = useCallback((query: string) => {
    if (query) {
      navigate(`/blog?search=${query}`);
    } else {
      navigate('/blog');
    }
  }, [navigate]);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleClearFilters = useCallback(() => {
    navigate('/blog');
    setSelectedCategory('todos');
    toast.success('Filtros removidos');
  }, [navigate]);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h1 className="heading-xl mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Explore nossos artigos sobre tecnologia, marketing digital e estratégias para o mundo online.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <SearchBar 
              fullWidth 
              placeholder="Pesquisar artigos..."
              onSearch={handleSearch}
              initialValue={searchQuery || ''}
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="mb-8">
          <CategoryList 
            currentCategory={selectedCategory} 
            onCategorySelect={handleCategoryChange}
          />
        </div>
        
        {/* Content Grid with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-9">
            <ArticleList 
              articles={currentPosts}
              isLoading={isLoading}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onClearFilters={handleClearFilters}
            />
            
            {/* Pagination */}
            {filteredArticles.length > postsPerPage && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
