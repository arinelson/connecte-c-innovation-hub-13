
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface NoArticlesFoundProps {
  onClearFilters?: () => void;
  isCategoryPage?: boolean;
}

const NoArticlesFound = ({ onClearFilters, isCategoryPage = false }: NoArticlesFoundProps) => {
  const navigate = useNavigate();
  
  const handleClearFilters = () => {
    if (onClearFilters) {
      onClearFilters();
    } else {
      navigate('/blog');
      toast.success('Filtros removidos');
    }
  };
  
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
      <p className="text-muted-foreground">
        {isCategoryPage 
          ? 'Tente outra categoria ou busca.' 
          : 'Tente ajustar seus filtros ou termos de pesquisa.'}
      </p>
      <button 
        onClick={handleClearFilters}
        className="mt-4 px-4 py-2 bg-conecte-600 text-white rounded-md hover:bg-conecte-700 transition-colors"
      >
        {isCategoryPage ? 'Ver todas as categorias' : 'Limpar filtros'}
      </button>
    </div>
  );
};

export default NoArticlesFound;
