
import ArticleCard from './ArticleCard';

interface ArticleListViewProps {
  articles: any[];
  isLoading: boolean;
}

const ArticleListView = ({ articles, isLoading }: ArticleListViewProps) => {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl h-48"
          />
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return <NoArticlesFound />;
  }

  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} layout="list" />
      ))}
    </div>
  );
};

export default ArticleListView;
