
import ShareButtons from './ShareButtons';

interface Author {
  name: string;
  avatar: string;
}

interface ArticleAuthorBoxProps {
  author: Author;
  url: string;
  title: string;
}

const ArticleAuthorBox: React.FC<ArticleAuthorBoxProps> = ({
  author,
  url,
  title
}) => {
  return (
    <div className="mb-12 border-t border-b border-border py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Escrito por</div>
            <div className="font-semibold">{author.name}</div>
          </div>
        </div>
        
        <ShareButtons 
          url={url} 
          title={title}
        />
      </div>
    </div>
  );
};

export default ArticleAuthorBox;
