
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
        "group block overflow-hidden rounded-xl transition-all duration-300",
        isPrimary ? "relative aspect-[16/9] md:aspect-[21/9]" : "aspect-[3/2]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/5 z-10" />
      
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading={isPrimary ? "eager" : "lazy"}
        width="800"
        height={isPrimary ? "400" : "600"}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="bg-conecte-600/90 text-white px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-white/80">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-white/80">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h3 className={cn(
            "font-bold text-white group-hover:text-conecte-200 transition-colors duration-200",
            isPrimary ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl"
          )}>
            {post.title}
          </h3>
          
          {isPrimary && (
            <p className="text-white/90 line-clamp-2 md:line-clamp-3 max-w-3xl">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
