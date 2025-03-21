
import { memo } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ArticleGrid from './ArticleGrid';
import ArticleListView from './ArticleListView';
import { BlogArticle } from '../../services/blogService';

interface ArticleListProps {
  articles: BlogArticle[];
  isLoading: boolean;
  activeTab: string;
  setActiveTab: (value: string) => void;
  onClearFilters?: () => void;
  isCategoryPage?: boolean;
}

const ArticleList = memo(({ 
  articles, 
  isLoading, 
  activeTab, 
  setActiveTab,
  onClearFilters,
  isCategoryPage = false
}: ArticleListProps) => {
  return (
    <div className="w-full">
      {/* Layout Toggle */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-muted-foreground">
          {articles.length} {articles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
        </p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
          <TabsList className="bg-gray-100 dark:bg-gray-800">
            <TabsTrigger value="grid" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Grid
            </TabsTrigger>
            <TabsTrigger value="list" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Lista
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Article Views */}
      <Tabs value={activeTab} className="w-full">
        <TabsContent value="grid" className="mt-0 w-full">
          <ArticleGrid 
            articles={articles} 
            isLoading={isLoading} 
            onClearFilters={onClearFilters}
            isCategoryPage={isCategoryPage}
          />
        </TabsContent>
        
        <TabsContent value="list" className="mt-0 w-full">
          <ArticleListView 
            articles={articles} 
            isLoading={isLoading} 
            onClearFilters={onClearFilters}
            isCategoryPage={isCategoryPage}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
});

ArticleList.displayName = 'ArticleList';

export default ArticleList;
