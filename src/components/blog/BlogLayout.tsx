
import { ReactNode } from 'react';
import BlogSidebar from './BlogSidebar';

interface BlogLayoutProps {
  children: ReactNode;
  sidebarProps?: {
    currentCategory?: string;
  };
}

const BlogLayout = ({ children, sidebarProps = {} }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {children}
        
        {/* Content Grid with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-9">
            {children}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <BlogSidebar currentCategory={sidebarProps.currentCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
