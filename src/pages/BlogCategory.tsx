
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ArticleCard from '../components/blog/ArticleCard';
import SearchBar from '../components/shared/SearchBar';
import BlogSidebar from '../components/blog/BlogSidebar';
import { getPostsByCategory } from '../services/blogService';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from '@/lib/utils';

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
  
  const handleSearch = (query: string) => {
    if (query) {
      navigate(`/blog?search=${query}`);
    }
  };
  
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
            {/* Layout Toggle */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                {articles.length} {articles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
              </p>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger value="grid" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                    Grid
                  </TabsTrigger>
                  <TabsTrigger value="list" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                    Lista
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Articles Grid/List */}
            <TabsContent value="grid" className="mt-0">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl h-80"
                    />
                  ))}
                </div>
              ) : currentPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPosts.map((article) => (
                    <ArticleCard key={article.id} article={article} layout="grid" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                  <p className="text-muted-foreground">
                    Tente outra categoria ou busca.
                  </p>
                  <button 
                    onClick={() => navigate('/blog')}
                    className="mt-4 px-4 py-2 bg-conecte-600 text-white rounded-md hover:bg-conecte-700 transition-colors"
                  >
                    Ver todas as categorias
                  </button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="list" className="mt-0">
              {isLoading ? (
                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl h-48"
                    />
                  ))}
                </div>
              ) : currentPosts.length > 0 ? (
                <div className="space-y-6">
                  {currentPosts.map((article) => (
                    <ArticleCard key={article.id} article={article} layout="list" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                  <p className="text-muted-foreground">
                    Tente outra categoria ou busca.
                  </p>
                  <button 
                    onClick={() => navigate('/blog')}
                    className="mt-4 px-4 py-2 bg-conecte-600 text-white rounded-md hover:bg-conecte-700 transition-colors"
                  >
                    Ver todas as categorias
                  </button>
                </div>
              )}
            </TabsContent>
            
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
