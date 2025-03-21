
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
    <section className={cn("py-16 md:py-20 bg-gray-50/50 dark:bg-gray-900/50", className)}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div>
            <h2 className="heading-lg">Categorias</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Explore nossos conteúdos por tópicos específicos e encontre as informações que você busca.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/blog?category=${category.slug}`}
              className="group relative block overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-subtle card-hover border border-border/50"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold group-hover:text-conecte-600 dark:group-hover:text-conecte-400 transition-colors duration-200">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="mt-4 flex items-center text-conecte-600 dark:text-conecte-400 font-medium">
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
