
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecentPosts, getPopularTags } from '@/services/blogService';
import CategoryList from './CategoryList';

interface BlogSidebarProps {
  currentCategory?: string;
}

const BlogSidebar = ({ currentCategory = 'todos' }: BlogSidebarProps) => {
  const recentPosts = getRecentPosts(5);
  const popularTags = getPopularTags(10);
  
  return (
    <div className="space-y-6">
      {/* Categories Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Categorias</CardTitle>
        </CardHeader>
        <CardContent>
          <CategoryList 
            currentCategory={currentCategory} 
            layout="vertical" 
          />
        </CardContent>
      </Card>
      
      {/* Recent Posts Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Posts Recentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map(post => (
            <div key={post.id} className="flex space-x-3">
              <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium line-clamp-2 text-sm">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      {/* Popular Tags Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Tags Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map(({ tag, count }) => (
              <Link
                key={tag}
                to={`/blog?search=${tag}`}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tag} <span className="text-muted-foreground">({count})</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
