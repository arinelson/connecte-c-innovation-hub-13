
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import ArticleCard from '../components/blog/ArticleCard';
import SearchBar from '../components/shared/SearchBar';
import CategoryList from '../components/blog/CategoryList';
import BlogSidebar from '../components/blog/BlogSidebar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { cn } from '@/lib/utils';
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
  
  const handleSearch = (query: string) => {
    if (query) {
      navigate(`/blog?search=${query}`);
    } else {
      navigate('/blog');
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
            {/* Layout Toggle */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
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
                    Tente ajustar seus filtros ou termos de pesquisa.
                  </p>
                  <button 
                    onClick={() => {
                      navigate('/blog');
                      setSelectedCategory('todos');
                      toast.success('Filtros removidos');
                    }}
                    className="mt-4 px-4 py-2 bg-conecte-600 text-white rounded-md hover:bg-conecte-700 transition-colors"
                  >
                    Limpar filtros
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
                    Tente ajustar seus filtros ou termos de pesquisa.
                  </p>
                  <button 
                    onClick={() => {
                      navigate('/blog');
                      setSelectedCategory('todos');
                      toast.success('Filtros removidos');
                    }}
                    className="mt-4 px-4 py-2 bg-conecte-600 text-white rounded-md hover:bg-conecte-700 transition-colors"
                  >
                    Limpar filtros
                  </button>
                </div>
              )}
            </TabsContent>
            
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
