
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
  articles: any[];
  isLoading: boolean;
}

const ArticleGrid = ({ articles, isLoading }: ArticleGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl h-80"
          />
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} layout="grid" />
      ))}
    </div>
  );
};

const EmptyState = () => (
  <NoArticlesFound />
);

export default ArticleGrid;
