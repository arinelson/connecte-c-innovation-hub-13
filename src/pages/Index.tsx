
import { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedPost from '../components/home/FeaturedPost';
import CategorySection from '../components/home/CategorySection';
import ArticleCard from '../components/blog/ArticleCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Sample data
const featuredPosts = [
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
  }
];

const categories = [
  {
    id: '1',
    name: 'Tecnologia',
    slug: 'tecnologia',
    description: 'Novidades e análises sobre as últimas tendências tecnológicas',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '2',
    name: 'Marketing Digital',
    slug: 'marketing-digital',
    description: 'Estratégias e ferramentas para impulsionar sua presença online',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
  },
  {
    id: '3',
    name: 'SEO',
    slug: 'seo',
    description: 'Otimização para mecanismos de busca e melhoria de ranking',
    imageUrl: 'https://images.unsplash.com/photo-1649101067474-b436b68eda4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '4',
    name: 'Redes Sociais',
    slug: 'redes-sociais',
    description: 'Como utilizar as redes sociais para seu negócio',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }
];

const latestArticles = [
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
  }
];

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    featuredSection: false,
    latestArticles: false
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'featured-section') {
              setIsVisible(prev => ({ ...prev, featuredSection: true }));
            } else if (entry.target.id === 'latest-articles') {
              setIsVisible(prev => ({ ...prev, latestArticles: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const featuredSection = document.getElementById('featured-section');
    const latestArticles = document.getElementById('latest-articles');
    
    if (featuredSection) observer.observe(featuredSection);
    if (latestArticles) observer.observe(latestArticles);
    
    return () => {
      if (featuredSection) observer.unobserve(featuredSection);
      if (latestArticles) observer.unobserve(latestArticles);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Posts Section */}
      <section 
        id="featured-section"
        className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container-custom">
          <div 
            className={`transition-all duration-700 transform ${
              isVisible.featuredSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
              <div>
                <h2 className="heading-lg">Artigos em Destaque</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Navegue pelos nossos melhores conteúdos selecionados especialmente para você.
                </p>
              </div>
              <Link 
                to="/blog" 
                className="mt-4 md:mt-0 inline-flex items-center text-conecte-600 dark:text-conecte-400 hover:text-conecte-700 dark:hover:text-conecte-300 font-medium transition-colors duration-200"
              >
                <span>Ver todos os artigos</span>
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main Featured Post */}
              <FeaturedPost post={featuredPosts[0]} priority="primary" />
              
              {/* Secondary Featured Posts */}
              <div className="grid grid-cols-1 gap-6">
                <FeaturedPost post={featuredPosts[1]} priority="secondary" />
                <FeaturedPost post={featuredPosts[2]} priority="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <CategorySection categories={categories} />
      
      {/* Latest Articles Section */}
      <section 
        id="latest-articles"
        className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container-custom">
          <div 
            className={`transition-all duration-700 transform ${
              isVisible.latestArticles ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
              <div>
                <h2 className="heading-lg">Artigos Recentes</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  Fique por dentro dos nossos conteúdos mais recentes.
                </p>
              </div>
              <Link 
                to="/blog" 
                className="mt-4 md:mt-0 inline-flex items-center text-conecte-600 dark:text-conecte-400 hover:text-conecte-700 dark:hover:text-conecte-300 font-medium transition-colors duration-200"
              >
                <span>Ver todos os artigos</span>
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-conecte-600 dark:bg-conecte-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Fique Atualizado
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Assine nossa newsletter
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Receba as melhores dicas e novidades sobre tecnologia e marketing digital diretamente no seu email.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
                aria-label="Email para newsletter"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-conecte-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Inscrever-se
              </button>
            </form>
            
            <p className="text-white/80 text-sm mt-4">
              Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
