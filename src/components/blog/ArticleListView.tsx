
import { memo } from 'react';
import ArticleCard from './ArticleCard';
import NoArticlesFound from './NoArticlesFound';
import { BlogPost } from '../../services/blogService';

interface ArticleListViewProps {
  articles: BlogPost[];
  isLoading: boolean;
  onClearFilters?: () => void;
  isCategoryPage?: boolean;
}

const ArticleListView = memo(({ 
  articles, 
  isLoading, 
  onClearFilters,
  isCategoryPage = false 
}: ArticleListViewProps) => {
  // Loading skeleton
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
  
  // No articles found
  if (articles.length === 0) {
    return <NoArticlesFound onClearFilters={onClearFilters} isCategoryPage={isCategoryPage} />;
  }
  
  // Articles list
  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} layout="list" />
      ))}
    </div>
  );
});

ArticleListView.displayName = 'ArticleListView';

export default ArticleListView;
