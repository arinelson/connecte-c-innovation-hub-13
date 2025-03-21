
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { getAllCategories } from '@/services/blogService';

interface CategoryListProps {
  currentCategory?: string;
  className?: string;
  layout?: 'horizontal' | 'vertical';
  onCategorySelect?: (category: string) => void;
}

const CategoryList = ({ 
  currentCategory = 'todos', 
  className,
  layout = 'horizontal',
  onCategorySelect
}: CategoryListProps) => {
  const categories = getAllCategories();
  const isVertical = layout === 'vertical';
  
  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    if (onCategorySelect) {
      e.preventDefault();
      onCategorySelect(category.toLowerCase());
    }
  };
  
  return (
    <div className={cn(
      isVertical ? "flex flex-col space-y-2" : "flex overflow-auto pb-2",
      className
    )}>
      <div className={cn(
        isVertical ? "space-y-1" : "inline-flex space-x-2 min-w-full"
      )}>
        {categories.map((category) => (
          <Link
            key={category}
            to={category.toLowerCase() === 'todos' 
              ? "/blog" 
              : `/blog/category/${category.toLowerCase()}`}
            onClick={(e) => handleCategoryClick(e, category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
              isVertical ? "block" : "inline-block whitespace-nowrap",
              currentCategory.toLowerCase() === category.toLowerCase()
                ? "bg-conecte-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            )}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
