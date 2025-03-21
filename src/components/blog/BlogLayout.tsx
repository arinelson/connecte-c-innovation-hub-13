
import { ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BlogSidebar from './BlogSidebar';
import ReadingProgress from '../layout/ReadingProgress';
import TableOfContents from './TableOfContents';

interface BlogLayoutProps {
  children: ReactNode;
  sidebarProps?: {
    currentCategory?: string;
  };
}

const BlogLayout = ({ children, sidebarProps = {} }: BlogLayoutProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  
  // Only show reading progress on individual article pages, not on list pages
  const isArticlePage = location.pathname.includes('/blog/') && !location.pathname.includes('/category/');
  
  return (
    <>
      {isArticlePage && <ReadingProgress target={contentRef} />}
      
      <div className="min-h-screen pt-24 pb-16" ref={contentRef}>
        <div className="container-custom">
          {/* Content Grid with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-9">
              {isArticlePage && (
                <div className="block lg:hidden mb-6">
                  <TableOfContents contentRef={contentRef} />
                </div>
              )}
              {children}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              {isArticlePage && (
                <div className="hidden lg:block sticky top-24">
                  <TableOfContents contentRef={contentRef} className="mb-6" />
                </div>
              )}
              <BlogSidebar currentCategory={sidebarProps.currentCategory} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLayout;
