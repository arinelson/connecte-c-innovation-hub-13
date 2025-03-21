
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

const NoArticlesFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
      <p className="text-muted-foreground">
        Tente ajustar seus filtros ou termos de pesquisa.
      </p>
      <button 
        onClick={() => {
          navigate('/blog');
          toast.success('Filtros removidos');
        }}
        className="mt-4 px-4 py-2 bg-conecte-600 text-white rounded-md hover:bg-conecte-700 transition-colors"
      >
        Limpar filtros
      </button>
    </div>
  );
};

export default NoArticlesFound;
