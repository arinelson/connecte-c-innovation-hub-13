
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, TrendingUp, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    mission: false,
    values: false,
    team: false
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible(prev => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = ['hero', 'mission', 'values', 'team'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    
    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        id="hero"
        className="relative py-20 md:py-28 overflow-hidden"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-conecte-50/30 via-transparent to-conecte-100/20 dark:from-conecte-950/30 dark:to-conecte-900/10 z-0" />
        
        <div className="container-custom relative z-10">
          <div 
            className={cn(
              "max-w-3xl mx-auto text-center transition-all duration-700 transform",
              isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <span className="inline-block bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium">
              Conheça o Conecte-C
            </span>
            <h1 className="heading-xl mt-4 mb-6">
              Sobre Nós
            </h1>
            <p className="text-xl text-muted-foreground">
              Somos um blog dedicado a trazer as melhores informações sobre tecnologia, 
              marketing digital, negócios online e estratégias digitais. Nossa missão é 
              conectar pessoas ao conhecimento digital que transforma.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section 
        id="mission"
        className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container-custom">
          <div 
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 transform",
              isVisible.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-xl dark:bg-gray-800 border border-white/10 dark:border-gray-700/50">
                  <img 
                    src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Nossa Missão"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-conecte-100 dark:bg-conecte-900/50 rounded-xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-conecte-200 dark:bg-conecte-800/50 rounded-xl -z-10"></div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium">
                Nossa Missão
              </span>
              <h2 className="heading-lg mt-4 mb-6">
                Conectando pessoas ao universo digital
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                O Conecte-C nasceu da paixão por tecnologia e da crença de que o conhecimento 
                digital pode transformar carreiras, negócios e vidas. Nossa missão é democratizar 
                o acesso a informações de qualidade sobre o mundo digital, apresentando conteúdos 
                relevantes de forma clara e acessível.
              </p>
              <p className="text-lg text-muted-foreground">
                Acreditamos que todas as pessoas e empresas merecem ter acesso a estratégias e 
                conhecimentos que possam impulsionar sua presença digital. Por isso, trabalhamos 
                para criar um hub de conteúdo que serve como ponte entre conceitos complexos e 
                aplicações práticas.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section 
        id="values"
        className="py-16 md:py-20"
      >
        <div className="container-custom">
          <div 
            className={cn(
              "max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-700 transform",
              isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <span className="inline-block bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium">
              Nossos Valores
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              Os princípios que nos guiam
            </h2>
            <p className="text-lg text-muted-foreground">
              Nosso trabalho é orientado por um conjunto de valores que definem quem somos 
              e como abordamos cada conteúdo que produzimos.
            </p>
          </div>
          
          <div 
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 transform",
              isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {/* Quality Value */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-conecte-100 dark:bg-conecte-900/50 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-conecte-600 dark:text-conecte-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualidade</h3>
              <p className="text-muted-foreground">
                Comprometidos com a excelência em cada artigo, entregando conteúdo 
                relevante, preciso e atualizado.
              </p>
            </div>
            
            {/* Innovation Value */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-conecte-100 dark:bg-conecte-900/50 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-conecte-600 dark:text-conecte-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inovação</h3>
              <p className="text-muted-foreground">
                Buscamos constantemente novas tendências e abordagens para manter 
                nossos leitores à frente no mundo digital.
              </p>
            </div>
            
            {/* Accessibility Value */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-conecte-100 dark:bg-conecte-900/50 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-conecte-600 dark:text-conecte-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Acessibilidade</h3>
              <p className="text-muted-foreground">
                Apresentamos informações complexas de forma clara e compreensível, 
                tornando o conhecimento digital acessível a todos.
              </p>
            </div>
            
            {/* Integrity Value */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-conecte-100 dark:bg-conecte-900/50 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-conecte-600 dark:text-conecte-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integridade</h3>
              <p className="text-muted-foreground">
                Atuamos com ética e transparência, fornecendo informações confiáveis 
                e baseadas em pesquisa sólida.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section 
        id="team"
        className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container-custom">
          <div 
            className={cn(
              "max-w-3xl mx-auto text-center mb-12 md:mb-16 transition-all duration-700 transform",
              isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <span className="inline-block bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium">
              Nossa Equipe
            </span>
            <h2 className="heading-lg mt-4 mb-6">
              As pessoas por trás do Conecte-C
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça os profissionais apaixonados por tecnologia e marketing que 
              fazem o Conecte-C acontecer.
            </p>
          </div>
          
          <div 
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 transform",
              isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Carlos Silva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Carlos Silva</h3>
                <p className="text-conecte-600 dark:text-conecte-400 mb-4">Fundador e Editor-Chefe</p>
                <p className="text-muted-foreground mb-4">
                  Com mais de 10 anos de experiência em marketing digital, Carlos fundou o Conecte-C 
                  com a missão de democratizar o conhecimento digital.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" 
                  alt="Ana Oliveira"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Ana Oliveira</h3>
                <p className="text-conecte-600 dark:text-conecte-400 mb-4">Especialista em SEO e Conteúdo</p>
                <p className="text-muted-foreground mb-4">
                  Ana é especialista em SEO e estratégia de conteúdo, com foco em criar 
                  materiais que não só informam, mas também conquistam boas posições nos 
                  buscadores.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-border/50 shadow-subtle hover:shadow-md transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Pedro Santos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Pedro Santos</h3>
                <p className="text-conecte-600 dark:text-conecte-400 mb-4">Especialista em Tecnologia</p>
                <p className="text-muted-foreground mb-4">
                  Pedro é apaixonado por novas tecnologias e traz para o Conecte-C análises 
                  profundas sobre tendências e inovações no mundo tech.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-conecte-600 dark:bg-conecte-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos conectar-nos?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Tem alguma dúvida, sugestão ou quer colaborar conosco? Entre em contato e 
              vamos conversar sobre como podemos trabalhar juntos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-conecte-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contato
              </Link>
              <Link 
                to="/blog" 
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Explorar Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
