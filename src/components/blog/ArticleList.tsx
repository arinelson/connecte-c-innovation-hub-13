
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ArticleGrid from './ArticleGrid';
import ArticleListView from './ArticleListView';
import NoArticlesFound from './NoArticlesFound';

interface ArticleListProps {
  articles: any[];
  isLoading: boolean;
  activeTab: string;
  setActiveTab: (value: string) => void;
  articlesCount: number;
}

const ArticleList = ({ 
  articles, 
  isLoading, 
  activeTab, 
  setActiveTab,
  articlesCount 
}: ArticleListProps) => {
  return (
    <>
      {/* Layout Toggle */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-muted-foreground">
          {articlesCount} {articlesCount === 1 ? 'artigo encontrado' : 'artigos encontrados'}
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
      
      {/* Articles Grid/List */}
      <TabsContent value="grid" className="mt-0">
        <ArticleGrid articles={articles} isLoading={isLoading} />
      </TabsContent>
      
      <TabsContent value="list" className="mt-0">
        <ArticleListView articles={articles} isLoading={isLoading} />
      </TabsContent>
    </>
  );
};

export default ArticleList;
