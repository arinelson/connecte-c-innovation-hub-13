
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

interface Author {
  name: string;
  avatar: string;
  role: string;
}

interface ArticleHeaderProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: Author;
  handleNavigateBack: (e: React.MouseEvent) => void;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  excerpt,
  category,
  date,
  readTime,
  author,
  handleNavigateBack
}) => {
  return (
    <header className="mb-8">
      {/* Back Link */}
      <a 
        href="/blog" 
        onClick={handleNavigateBack}
        className="inline-flex items-center text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 mb-6 transition-colors duration-200"
      >
        <svg 
          className="h-4 w-4 mr-2" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Voltar para o blog</span>
      </a>
      
      <div className="space-y-3">
        <Link 
          to={`/blog?category=${category.toLowerCase()}`}
          className="inline-block bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium"
        >
          {category}
        </Link>
        
        <h1 className="heading-xl">
          {title}
        </h1>
        
        <p className="text-xl text-muted-foreground">
          {excerpt}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-6 pt-6 border-t border-border">
        {/* Author Info */}
        <div className="flex items-center mb-4 sm:mb-0">
          <img 
            src={author.avatar} 
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <div className="font-semibold">{author.name}</div>
            <div className="text-sm text-muted-foreground">{author.role}</div>
          </div>
        </div>
        
        {/* Article Meta */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
