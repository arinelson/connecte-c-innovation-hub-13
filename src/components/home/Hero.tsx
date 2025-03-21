
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-conecte-50/30 via-transparent to-conecte-100/20 dark:from-conecte-950/30 dark:to-conecte-900/10 z-0" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNDI1MzgiIGZpbGwtb3BhY2l0eT0iMC4wNCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjkgNThsMjktMjl2MjlaIi8+PHBhdGggZD0iTTAgMGgyOXYyOXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 dark:opacity-10 z-0" />
      
      <div className="container-custom relative z-10 md:pt-12 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className={cn(
            "lg:col-span-7 space-y-6 md:space-y-8 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="inline-block">
              <span className="bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium">
                Conectando você ao futuro digital
              </span>
            </div>
            
            <h1 className="heading-xl max-w-3xl">
              <span className="text-conecte-600 dark:text-conecte-500">Conecte-C:</span> O seu portal 
              para tecnologia e marketing digital
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Descubra as últimas tendências, estratégias e insights para impulsionar 
              sua presença digital e se manter atualizado no mundo da tecnologia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/blog" 
                className="btn-primary flex items-center justify-center sm:justify-start"
              >
                <span>Explorar Artigos</span>
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
              
              <Link 
                to="/about" 
                className="btn-ghost flex items-center justify-center sm:justify-start"
              >
                <span>Sobre Nós</span>
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={cn(
            "lg:col-span-5 transition-all duration-700 transform delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800 border border-white/10 dark:border-gray-700/50">
                <img 
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Marketing Digital"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-conecte-100 dark:bg-conecte-900/50 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-conecte-200 dark:bg-conecte-800/50 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
