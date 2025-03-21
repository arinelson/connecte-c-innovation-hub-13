
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Conecte-C Home"
          >
            <span className="text-2xl font-bold text-conecte-600 dark:text-conecte-500">
              Conecte-C
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => cn("nav-link", isActive ? "active" : "")}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => cn("nav-link", isActive ? "active" : "")}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => cn("nav-link", isActive ? "active" : "")}
            >
              Sobre
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => cn("nav-link", isActive ? "active" : "")}
            >
              Contato
            </NavLink>
          </nav>

          {/* Right Section: Search + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(prev => !prev)}
              className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-[72px] bg-background dark:bg-background z-40 transform transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container-custom py-8 flex flex-col space-y-6">
          <nav className="flex flex-col space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => cn(
                "text-xl py-2 border-b border-border",
                isActive ? "text-conecte-600 dark:text-conecte-400" : ""
              )}
              onClick={() => setIsMobileMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => cn(
                "text-xl py-2 border-b border-border",
                isActive ? "text-conecte-600 dark:text-conecte-400" : ""
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => cn(
                "text-xl py-2 border-b border-border",
                isActive ? "text-conecte-600 dark:text-conecte-400" : ""
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => cn(
                "text-xl py-2 border-b border-border",
                isActive ? "text-conecte-600 dark:text-conecte-400" : ""
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </NavLink>
          </nav>
          <div className="py-4">
            <button 
              onClick={() => {
                setIsSearchOpen(prev => !prev);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 text-xl py-2"
            >
              <Search className="h-5 w-5" />
              <span>Pesquisar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
