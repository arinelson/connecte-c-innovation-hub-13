
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  initialValue?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Pesquisar',
  fullWidth = false,
  className,
  initialValue = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  
  // Update search query if initialValue changes (for instance when navigation)
  useEffect(() => {
    setSearchQuery(initialValue);
  }, [initialValue]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery.trim());
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        'relative',
        fullWidth && 'w-full',
        className
      )}
    >
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={cn(
            'py-2 pl-10 pr-4 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-conecte-500/50 transition-all duration-200',
            fullWidth ? 'w-full' : 'w-64 md:w-80'
          )}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        
        {searchQuery && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              onSearch('');
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
