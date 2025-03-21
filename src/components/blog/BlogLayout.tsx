
import BlogSidebar from './BlogSidebar';

interface BlogLayoutProps {
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

const BlogLayout = ({ children, sidebarContent }: BlogLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-9">
        {children}
      </div>
      
      {/* Sidebar */}
      <div className="lg:col-span-3">
        {sidebarContent || <BlogSidebar />}
      </div>
    </div>
  );
};

export default BlogLayout;
