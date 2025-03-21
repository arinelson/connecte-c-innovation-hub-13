
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
}

interface CategorySectionProps {
  categories: Category[];
  className?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories, className }) => {
  return (
    <section className={cn("py-12 md:py-16 bg-gray-50/50 dark:bg-gray-900/50", className)}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10">
          <div>
            <h2 className="heading-lg mb-2">Categorias</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Explore nossos conteúdos por tópicos específicos e encontre as informações que você busca.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/blog?category=${category.slug}`}
              className="group block relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-subtle hover:shadow-md border border-border/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="225"
                />
              </div>
              
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-semibold group-hover:text-conecte-600 dark:group-hover:text-conecte-400 transition-colors duration-200 mb-2">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base line-clamp-2 leading-relaxed mb-3">
                  {category.description}
                </p>
                
                <div className="flex items-center text-conecte-600 dark:text-conecte-400 font-medium text-sm md:text-base">
                  <span>Ver artigos</span>
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
