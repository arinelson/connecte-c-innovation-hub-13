
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import SearchBar from '../shared/SearchBar';

interface BlogHeaderProps {
  searchQuery: string | null;
}

const BlogHeader = ({ searchQuery }: BlogHeaderProps) => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query) {
      navigate(`/blog?search=${query}`);
    } else {
      navigate('/blog');
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
      <h1 className="heading-xl mb-4">Blog</h1>
      <p className="text-xl text-muted-foreground">
        Explore nossos artigos sobre tecnologia, marketing digital e estratégias para o mundo online.
      </p>
      
      {/* Search Bar */}
      <div className="mt-8 max-w-lg mx-auto">
        <SearchBar 
          fullWidth 
          placeholder="Pesquisar artigos..."
          onSearch={handleSearch}
          initialValue={searchQuery || ''}
        />
      </div>
    </div>
  );
};

export default BlogHeader;
