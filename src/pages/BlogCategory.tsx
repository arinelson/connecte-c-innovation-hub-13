
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import SearchBar from '../components/shared/SearchBar';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from '@/lib/utils';
import { getPostsByCategory } from '../services/blogService';
import ArticleList from '../components/blog/ArticleList';

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('grid');
  const [articles, setArticles] = useState(getPostsByCategory(category || 'todos'));
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  
  useEffect(() => {
    if (!category) {
      navigate('/blog');
      return;
    }
    
    document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} | Blog | Conecte-C`;
    window.scrollTo(0, 0);
    
    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filteredArticles = getPostsByCategory(category);
      setArticles(filteredArticles);
      setIsLoading(false);
      
      if (filteredArticles.length === 0) {
        toast.error(`Nenhum artigo encontrado na categoria "${category}"`);
      }
    }, 600);
    
    return () => clearTimeout(timer);
  }, [category, navigate]);
  
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(articles.length / postsPerPage);
  
  const handleSearch = useCallback((query: string) => {
    if (query) {
      navigate(`/blog?search=${query}`);
    }
  }, [navigate]);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <h1 className="heading-xl mb-4">Categoria: {category}</h1>
          <p className="text-xl text-muted-foreground">
            Artigos relacionados à categoria {category}
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <SearchBar 
              fullWidth 
              placeholder="Pesquisar artigos..."
              onSearch={handleSearch}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-9">
            <ArticleList 
              articles={currentPosts}
              isLoading={isLoading}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isCategoryPage={true}
            />
            
            {/* Pagination */}
            {articles.length > postsPerPage && (
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
            <BlogSidebar currentCategory={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
