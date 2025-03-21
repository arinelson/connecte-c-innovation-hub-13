
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import ArticleCard from '../components/blog/ArticleCard';
import SearchBar from '../components/shared/SearchBar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { toast } from "sonner";

// Sample data
const allArticles = [
  {
    id: '1',
    title: 'Como criar uma estratégia de marketing digital eficaz',
    excerpt: 'Descubra as melhores práticas para desenvolver uma estratégia de marketing digital que realmente funciona e impulsiona seus resultados.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Marketing Digital',
    slug: 'como-criar-estrategia-marketing-digital-eficaz',
    date: '15/06/2023',
    readTime: '8 min de leitura'
  },
  {
    id: '2',
    title: 'Tendências tecnológicas para 2024',
    excerpt: 'Um olhar aprofundado sobre as tendências de tecnologia que devem dominar o mercado no próximo ano.',
    imageUrl: 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tecnologia',
    slug: 'tendencias-tecnologicas-para-2024',
    date: '02/07/2023',
    readTime: '7 min de leitura'
  },
  {
    id: '3',
    title: 'A importância do SEO para blogs e sites',
    excerpt: 'Entenda por que o SEO é fundamental para o sucesso do seu blog ou site e como implementar as melhores práticas.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    category: 'SEO',
    slug: 'importancia-seo-blogs-sites',
    date: '28/06/2023',
    readTime: '6 min de leitura'
  },
  {
    id: '4',
    title: 'Como utilizar o Google Analytics para melhorar sua estratégia',
    excerpt: 'Aprenda a extrair insights valiosos do Google Analytics para otimizar sua estratégia de marketing digital.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Analytics',
    slug: 'como-utilizar-google-analytics-melhorar-estrategia',
    date: '20/07/2023',
    readTime: '9 min de leitura'
  },
  {
    id: '5',
    title: 'Guia completo para criação de conteúdo para redes sociais',
    excerpt: 'Um guia passo a passo para criar conteúdo engajador para diferentes plataformas de redes sociais.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    category: 'Redes Sociais',
    slug: 'guia-completo-criacao-conteudo-redes-sociais',
    date: '15/07/2023',
    readTime: '11 min de leitura'
  },
  {
    id: '6',
    title: 'O impacto da inteligência artificial no marketing',
    excerpt: 'Como a IA está revolucionando as estratégias de marketing e o que esperar para o futuro.',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tecnologia',
    slug: 'impacto-inteligencia-artificial-marketing',
    date: '10/07/2023',
    readTime: '8 min de leitura'
  },
  {
    id: '7',
    title: 'Os melhores plugins WordPress para um blog de sucesso',
    excerpt: 'Uma seleção dos plugins mais úteis para otimizar seu blog WordPress e melhorar a experiência do usuário.',
    imageUrl: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'WordPress',
    slug: 'melhores-plugins-wordpress-blog-sucesso',
    date: '05/07/2023',
    readTime: '7 min de leitura'
  },
  {
    id: '8',
    title: 'Como implementar uma estratégia de email marketing eficiente',
    excerpt: 'Dicas práticas para criar campanhas de email marketing que geram resultados e fortalecem seu relacionamento com os clientes.',
    imageUrl: 'https://images.unsplash.com/photo-1523479999049-8e9f09d7fad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Email Marketing',
    slug: 'como-implementar-estrategia-email-marketing-eficiente',
    date: '01/07/2023',
    readTime: '10 min de leitura'
  },
  {
    id: '9',
    title: 'As melhores ferramentas gratuitas para marketing digital',
    excerpt: 'Uma lista completa de ferramentas gratuitas que podem ajudar a impulsionar sua estratégia de marketing digital sem gastar muito.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Ferramentas',
    slug: 'melhores-ferramentas-gratuitas-marketing-digital',
    date: '25/06/2023',
    readTime: '8 min de leitura'
  }
];

const categories = [
  'Todos',
  'Tecnologia',
  'Marketing Digital',
  'SEO',
  'Redes Sociais',
  'Analytics',
  'WordPress',
  'Email Marketing',
  'Ferramentas'
];

const Blog = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  
  const [activeTab, setActiveTab] = useState('grid');
  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam?.toLowerCase() || 'todos');
  const [isLoading, setIsLoading] = useState(true);
  
  // Force a clean render when navigating to this page
  useEffect(() => {
    document.title = 'Blog | Conecte-C';
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Apply filters based on URL parameters
  useEffect(() => {
    let filtered = [...allArticles];
    
    // Filter by category
    if (categoryParam && categoryParam.toLowerCase() !== 'todos') {
      filtered = filtered.filter(
        article => article.category.toLowerCase() === categoryParam.toLowerCase()
      );
      setSelectedCategory(categoryParam.toLowerCase());
    } else if (!categoryParam && selectedCategory !== 'todos') {
      filtered = filtered.filter(
        article => article.category.toLowerCase() === selectedCategory
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        article => 
          article.title.toLowerCase().includes(query) || 
          article.excerpt.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredArticles(filtered);
  }, [categoryParam, searchQuery, selectedCategory]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    
    // Update URL with new category parameter
    const newParams = new URLSearchParams(searchParams);
    
    if (category === 'todos') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    
    // Use navigate instead of setSearchParams to ensure full page refresh
    navigate({ 
      pathname: '/blog', 
      search: newParams.toString() 
    }, { replace: true });
    
    // Show category changed toast
    if (category !== 'todos') {
      toast.success(`Categoria alterada para ${category}`);
    } else {
      toast.success('Mostrando todas as categorias');
    }
    
    // Reset page position
    window.scrollTo(0, 0);
  };
  
  const handleSearch = (query: string) => {
    // Update URL with search parameter
    const newParams = new URLSearchParams(searchParams);
    
    if (query) {
      newParams.set('search', query);
      toast.success(`Pesquisando por "${query}"`);
    } else {
      newParams.delete('search');
    }
    
    // Use navigate instead of setSearchParams
    navigate({ 
      pathname: '/blog', 
      search: newParams.toString() 
    }, { replace: true });
    
    // Reset page position
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
        <div className="mb-8 overflow-auto pb-2">
          <div className="inline-flex space-x-2 min-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category.toLowerCase())}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200",
                  selectedCategory === category.toLowerCase()
                    ? "bg-conecte-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
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
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
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
          ) : filteredArticles.length > 0 ? (
            <div className="space-y-6">
              {filteredArticles.map((article) => (
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
        {filteredArticles.length > 0 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-1">
              <button
                className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                disabled
              >
                Anterior
              </button>
              <button
                className="px-4 py-2 bg-conecte-600 text-white rounded-lg hover:bg-conecte-700 transition-colors duration-200"
              >
                1
              </button>
              <button
                className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                2
              </button>
              <button
                className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Próxima
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
