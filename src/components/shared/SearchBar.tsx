
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  fullWidth?: boolean;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className,
  placeholder = "Procurar artigos...",
  fullWidth = false,
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      if (onSearch) {
        onSearch(searchQuery.trim());
      } else {
        navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };
  
  const clearSearch = () => {
    setSearchQuery('');
  };
  
  return (
    <form
      onSubmit={handleSearch}
      className={cn(
        "relative flex items-center",
        fullWidth ? "w-full" : "max-w-md",
        className
      )}
    >
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "w-full bg-white dark:bg-gray-800 border border-border rounded-lg py-2 pl-10",
            searchQuery ? "pr-10" : "pr-4",
            "focus:outline-none focus:ring-2 focus:ring-conecte-500 focus:border-transparent transition-all duration-200"
          )}
          aria-label="Campo de busca"
        />
        
        {searchQuery && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Limpar busca"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      
      <button
        type="submit"
        className="hidden"
        aria-label="Pesquisar"
      >
        Pesquisar
      </button>
    </form>
  );
};

export default SearchBar;
