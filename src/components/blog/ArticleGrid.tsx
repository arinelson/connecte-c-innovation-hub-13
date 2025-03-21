
import { memo } from 'react';
import ArticleCard from './ArticleCard';
import NoArticlesFound from './NoArticlesFound';
import { BlogArticle } from '../../services/blogService';

interface ArticleGridProps {
  articles: BlogArticle[];
  isLoading: boolean;
  onClearFilters?: () => void;
  isCategoryPage?: boolean;
}

const ArticleGrid = memo(({ 
  articles, 
  isLoading, 
  onClearFilters,
  isCategoryPage = false 
}: ArticleGridProps) => {
  // Loading skeleton
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
  
  // No articles found
  if (articles.length === 0) {
    return <NoArticlesFound onClearFilters={onClearFilters} isCategoryPage={isCategoryPage} />;
  }
  
  // Articles grid
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} layout="grid" />
      ))}
    </div>
  );
});

ArticleGrid.displayName = 'ArticleGrid';

export default ArticleGrid;
