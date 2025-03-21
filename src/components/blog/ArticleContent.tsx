
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ArticleContentProps {
  content: string;
  imageUrl: string;
  title: string;
  tags: string[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({
  content,
  imageUrl,
  title,
  tags
}) => {
  return (
    <>
      {/* Featured Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
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
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      {/* Tags */}
      <div className="mb-8">
        <div className="text-sm font-semibold mb-3">Tags:</div>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
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
    </>
  );
};

export default ArticleContent;
