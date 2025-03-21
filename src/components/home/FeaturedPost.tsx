
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    slug: string;
    date: string;
    readTime: string;
  };
  priority?: 'primary' | 'secondary';
  className?: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ 
  post, 
  priority = 'primary',
  className
}) => {
  const isPrimary = priority === 'primary';
  
  return (
    <Link 
      to={`/blog/${post.slug}`} 
      className={cn(
        "group block relative overflow-hidden rounded-xl transition-all duration-300 shadow-subtle hover:shadow-md",
        isPrimary ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[3/2]",
        className
      )}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10" />
      
      {/* Background Image */}
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading={isPrimary ? "eager" : "lazy"}
        width="800"
        height={isPrimary ? "400" : "600"}
      />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
        <div className="space-y-2">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
            <span className="bg-conecte-600/90 text-white px-2 py-0.5 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-white/90">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-white/90">
              <Clock className="h-3 w-3 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className={cn(
            "font-bold text-white group-hover:text-conecte-200 transition-colors duration-200 line-clamp-2",
            isPrimary ? "text-lg sm:text-xl md:text-2xl lg:text-3xl" : "text-base sm:text-lg md:text-xl"
          )}>
            {post.title}
          </h3>
          
          {/* Excerpt for primary posts */}
          {isPrimary && (
            <p className="text-white/90 text-sm md:text-base line-clamp-2 md:line-clamp-3 max-w-3xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
