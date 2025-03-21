
import ArticleCard from './ArticleCard';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h2 className="heading-lg mb-8 text-center">Artigos Relacionados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
