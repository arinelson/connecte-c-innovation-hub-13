
import { Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    slug: string;
    date: string;
    readTime: string;
  };
  layout?: 'grid' | 'list';
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  layout = 'grid',
  className
}) => {
  const isGrid = layout === 'grid';
  const navigate = useNavigate();
  
  // Handle category click with navigation
  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    navigate(`/blog?category=${category.toLowerCase()}`);
  };
  
  return (
    <article 
      className={cn(
        "group overflow-hidden bg-white dark:bg-gray-800 rounded-xl border border-border/50 shadow-subtle card-hover",
        isGrid ? "flex flex-col" : "flex flex-col md:flex-row",
        className
      )}
    >
      {/* Image */}
      <div 
        className={cn(
          "overflow-hidden",
          isGrid ? "aspect-[16/9]" : "md:w-1/3 aspect-[16/9] md:aspect-auto"
        )}
      >
        <Link to={`/blog/${article.slug}`}>
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-center space-x-3 text-sm mb-3">
          <a 
            href={`/blog?category=${article.category.toLowerCase()}`}
            onClick={(e) => handleCategoryClick(e, article.category)}
            className="bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-2.5 py-1 rounded-full hover:bg-conecte-200 dark:hover:bg-conecte-800/70 transition-colors duration-200"
          >
            {article.category}
          </a>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 mr-1.5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-3.5 w-3.5 mr-1.5" />
            <span>{article.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">
          <Link 
            to={`/blog/${article.slug}`}
            className="hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
          >
            {article.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        
        <div className="mt-auto">
          <Link 
            to={`/blog/${article.slug}`}
            className="inline-flex items-center font-medium text-conecte-600 dark:text-conecte-400 hover:text-conecte-700 dark:hover:text-conecte-300 transition-colors duration-200"
          >
            Ler mais
            <svg 
              className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
