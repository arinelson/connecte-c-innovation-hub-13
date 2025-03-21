
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-border transition-colors duration-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-conecte-600 dark:text-conecte-500">Conecte-C</span>
            </Link>
            <p className="text-muted-foreground">
              Seu portal para tecnologia, marketing digital e estratégias digitais.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog?category=tecnologia" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link to="/blog?category=marketing-digital" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link to="/blog?category=seo" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/blog?category=redes-sociais" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
                  Redes Sociais
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">contato@conecte-c.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Inscreva-se na Newsletter</h4>
              <form className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
                  aria-label="Email para newsletter"
                />
                <button 
                  type="submit" 
                  className="bg-conecte-600 hover:bg-conecte-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Conecte-C. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
              Política de Privacidade
            </Link>
            <Link to="/terms-of-use" className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
