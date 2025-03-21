
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ShareButtons from '../components/blog/ShareButtons';
import ReadingProgress from '../components/layout/ReadingProgress';
import ArticleCard from '../components/blog/ArticleCard';
import BlogSidebar from '../components/blog/BlogSidebar';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getPostBySlug, getRelatedPosts } from '@/services/blogService';
import { Skeleton } from '@/components/ui/skeleton';

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const articleContentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = () => {
      setIsLoading(true);
      
      if (!slug) {
        navigate('/blog');
        return;
      }
      
      // Fetch the article by slug
      const articleData = getPostBySlug(slug);
      
      if (!articleData) {
        navigate('/blog');
        return;
      }
      
      setArticle(articleData);
      
      // Get related posts
      const related = getRelatedPosts(articleData, 3);
      setRelatedPosts(related);
      
      setIsLoading(false);
      
      // Scroll to top on article load
      window.scrollTo(0, 0);
    };
    
    fetchArticle();
  }, [slug, navigate]);
  
  // Set meta tags
  useEffect(() => {
    if (!isLoading && article) {
      document.title = `${article.title} | Conecte-C`;
      
      // You would typically use a helmet component or similar for SEO tags
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
      }
    }
    
    return () => {
      document.title = 'Conecte-C';
    };
  }, [isLoading, article]);
  
  // Handle navigation back safely
  const handleNavigateBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };
  
  // Article loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <Skeleton className="w-32 h-8 mb-6" />
              <Skeleton className="w-full h-64 rounded-xl mb-8" />
              <Skeleton className="w-3/4 h-12 mb-4" />
              <Skeleton className="w-1/2 h-6 mb-8" />
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className="w-full h-4" />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <Skeleton className="w-full h-64 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // If no article is found
  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-6">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-conecte-600 text-white px-4 py-2 rounded-md hover:bg-conecte-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <ReadingProgress target={articleContentRef} />
      
      <div className="min-h-screen pt-24 pb-16" ref={articleContentRef}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <article className="w-full lg:w-2/3">
              {/* Back Link */}
              <a 
                href="/blog" 
                onClick={handleNavigateBack}
                className="inline-flex items-center text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 mb-6 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Voltar para o blog</span>
              </a>
              
              {/* Article Header */}
              <header className="mb-8">
                <div className="space-y-3">
                  <Link 
                    to={`/blog/category/${article.category.toLowerCase()}`}
                    className="inline-block bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {article.category}
                  </Link>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                    {article.title}
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-6 pt-6 border-t border-border">
                  {/* Author Info - If available */}
                  {article.author && (
                    <div className="flex items-center mb-4 sm:mb-0">
                      {article.author.avatar && (
                        <img 
                          src={article.author.avatar} 
                          alt={article.author.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                      )}
                      <div>
                        <div className="font-semibold">{article.author.name}</div>
                        {article.author.role && (
                          <div className="text-sm text-muted-foreground">{article.author.role}</div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Article Meta */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </header>
              
              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Article Content */}
              <div 
                className={cn(
                  "prose dark:prose-invert prose-lg max-w-none",
                  "prose-headings:font-bold prose-headings:text-foreground",
                  "prose-p:text-muted-foreground prose-p:leading-relaxed",
                  "prose-a:text-conecte-600 dark:prose-a:text-conecte-400 prose-a:no-underline hover:prose-a:underline",
                  "prose-strong:text-foreground",
                  "prose-ul:text-muted-foreground prose-ol:text-muted-foreground",
                  "mb-12"
                )}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center text-sm font-semibold mb-3">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag: string) => (
                      <Link 
                        key={tag}
                        to={`/blog?search=${tag}`}
                        className="bg-gray-100 dark:bg-gray-800 text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Share Buttons */}
              <div className="mb-12 border-t border-b border-border py-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  {article.author && (
                    <div className="flex items-center">
                      {article.author.avatar && (
                        <div className="mr-4">
                          <img 
                            src={article.author.avatar} 
                            alt={article.author.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="text-sm text-muted-foreground">Escrito por</div>
                        <div className="font-semibold">{article.author.name}</div>
                      </div>
                    </div>
                  )}
                  
                  <ShareButtons 
                    url={window.location.href} 
                    title={article.title}
                  />
                </div>
              </div>
              
              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold mb-8">Artigos Relacionados</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedArticle) => (
                      <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Newsletter */}
              <div className="mt-16 bg-conecte-50 dark:bg-conecte-900/20 rounded-xl p-8 border border-border">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-3">Inscreva-se na nossa newsletter</h3>
                  <p className="text-muted-foreground mb-6">
                    Receba em primeira mão nossos melhores artigos e dicas sobre marketing digital e tecnologia.
                  </p>
                  
                  <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Seu email" 
                      className="flex-1 px-4 py-2 rounded-lg border border-border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
                      aria-label="Email para newsletter"
                      required
                    />
                    <button 
                      type="submit" 
                      className="px-6 py-2 bg-conecte-600 text-white font-medium rounded-lg hover:bg-conecte-700 transition-colors duration-200"
                    >
                      Inscrever-se
                    </button>
                  </form>
                  
                  <p className="text-muted-foreground text-sm mt-4">
                    Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
                  </p>
                </div>
              </div>
            </article>
            
            {/* Sidebar */}
            <aside className="w-full lg:w-1/3">
              <BlogSidebar currentCategory={article.category} />
            </aside>
          </div>
        </div>
      </div>
      
      {/* Mobile Share Floating Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 border border-border">
          <ShareButtons 
            url={window.location.href} 
            title={article.title}
            vertical
          />
        </div>
      </div>
    </>
  );
};

export default Article;
