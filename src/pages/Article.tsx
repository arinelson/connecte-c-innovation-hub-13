import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ShareButtons from '../components/blog/ShareButtons';
import ReadingProgress from '../components/layout/ReadingProgress';
import ArticleCard from '../components/blog/ArticleCard';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample article data
const articleData = {
  id: '1',
  title: 'Como criar uma estratégia de marketing digital eficaz',
  excerpt: 'Descubra as melhores práticas para desenvolver uma estratégia de marketing digital que realmente funciona e impulsiona seus resultados.',
  content: `
    <p>No atual cenário digital em constante evolução, ter uma estratégia de marketing digital eficaz não é apenas uma opção, mas uma necessidade para empresas de todos os tamanhos e segmentos. Uma abordagem bem estruturada pode ser a diferença entre se destacar no mercado ou ficar para trás em relação aos concorrentes.</p>
    
    <h2>Por que uma estratégia de marketing digital é essencial?</h2>
    
    <p>O marketing digital oferece uma série de vantagens em relação ao marketing tradicional: é mais mensurável, permite segmentação precisa, possibilita ajustes em tempo real e, geralmente, oferece um retorno sobre investimento (ROI) mais elevado.</p>
    
    <p>No entanto, para aproveitar todos esses benefícios, é necessário ter uma estratégia bem definida. Sem planejamento adequado, suas ações digitais podem se tornar desconexas, inconsistentes e ineficazes, desperdiçando recursos valiosos.</p>
    
    <h2>Elementos-chave para uma estratégia de marketing digital de sucesso</h2>
    
    <h3>1. Defina objetivos claros e mensuráveis</h3>
    
    <p>Antes de qualquer ação, é fundamental estabelecer o que você deseja alcançar com sua estratégia de marketing digital. Seus objetivos devem ser específicos, mensuráveis, atingíveis, relevantes e temporais (SMART):</p>
    
    <ul>
      <li>Aumentar o tráfego do site em 30% nos próximos 6 meses</li>
      <li>Gerar 100 novos leads qualificados por mês</li>
      <li>Converter 15% dos leads em clientes</li>
      <li>Aumentar o engajamento nas redes sociais em 40% até o final do ano</li>
    </ul>
    
    <h3>2. Conheça seu público-alvo profundamente</h3>
    
    <p>Uma estratégia eficaz começa com um entendimento aprofundado de quem você está tentando alcançar. Desenvolva personas detalhadas que representem seus clientes ideais, incluindo:</p>
    
    <ul>
      <li>Dados demográficos (idade, localização, renda, ocupação)</li>
      <li>Comportamentos online (plataformas utilizadas, hábitos de consumo de conteúdo)</li>
      <li>Desafios e problemas enfrentados</li>
      <li>Objetivos e aspirações</li>
      <li>Processo de decisão de compra</li>
    </ul>
    
    <p>Quanto mais detalhado for seu conhecimento sobre o público, mais eficaz será sua estratégia para alcançá-los com a mensagem certa, no momento certo e no canal adequado.</p>
    
    <h3>3. Mapeie a jornada do cliente</h3>
    
    <p>Compreender como seus potenciais clientes se movem do primeiro contato com sua marca até a conversão e fidelização é crucial para criar conteúdos e ações relevantes em cada etapa:</p>
    
    <ul>
      <li><strong>Conscientização:</strong> Quando o cliente descobre um problema ou necessidade</li>
      <li><strong>Consideração:</strong> Quando avalia as opções disponíveis para resolver o problema</li>
      <li><strong>Decisão:</strong> Quando escolhe a solução mais adequada</li>
      <li><strong>Retenção e advocacia:</strong> Quando se torna um cliente fiel e promotor da marca</li>
    </ul>
    
    <h3>4. Escolha os canais adequados</h3>
    
    <p>Nem todos os canais digitais são igualmente eficazes para todos os negócios. Com base na sua persona e objetivos, determine quais plataformas priorizar:</p>
    
    <ul>
      <li>Site e blog</li>
      <li>SEO (otimização para motores de busca)</li>
      <li>Email marketing</li>
      <li>Redes sociais (Facebook, Instagram, LinkedIn, Twitter, TikTok)</li>
      <li>Marketing de conteúdo</li>
      <li>Marketing de influência</li>
      <li>Publicidade paga (Google Ads, Facebook Ads, etc.)</li>
    </ul>
    
    <p>Concentre seus esforços nos canais onde seu público-alvo está mais presente e engajado, em vez de tentar estar em todas as plataformas simultaneamente.</p>
    
    <h3>5. Crie conteúdo de qualidade</h3>
    
    <p>O conteúdo é o coração de qualquer estratégia de marketing digital. Independentemente dos canais escolhidos, você precisará de conteúdo relevante, valioso e adaptado às necessidades e interesses do seu público.</p>
    
    <p>Desenvolva um calendário editorial que aborde tópicos relacionados ao seu nicho, respondendo às principais dúvidas e desafios do seu público. Varie os formatos (textos, vídeos, infográficos, podcasts) para atender a diferentes preferências de consumo de conteúdo.</p>
    
    <h3>6. Implemente táticas de SEO</h3>
    
    <p>A otimização para motores de busca (SEO) é fundamental para aumentar a visibilidade orgânica do seu site. Algumas práticas essenciais incluem:</p>
    
    <ul>
      <li>Pesquisa de palavras-chave relevantes para seu negócio</li>
      <li>Otimização de conteúdo on-page (títulos, meta descrições, estrutura de URL)</li>
      <li>Criação de conteúdo de qualidade e relevante</li>
      <li>Construção de backlinks de sites confiáveis</li>
      <li>Melhoria da experiência do usuário e velocidade do site</li>
      <li>Otimização para dispositivos móveis</li>
    </ul>
    
    <h3>7. Utilize o marketing de automação</h3>
    
    <p>Ferramentas de automação de marketing permitem escalar seus esforços e personalizar a comunicação em grande escala. Considere automatizar:</p>
    
    <ul>
      <li>Emails de boas-vindas</li>
      <li>Fluxos de nutrição de leads</li>
      <li>Emails de abandono de carrinho</li>
      <li>Reengajamento de clientes inativos</li>
      <li>Segmentação automática de leads</li>
    </ul>
    
    <h3>8. Monitore, analise e otimize continuamente</h3>
    
    <p>O marketing digital oferece a vantagem da mensurabilidade. Utilize ferramentas analíticas para monitorar o desempenho da sua estratégia e fazer ajustes contínuos:</p>
    
    <ul>
      <li>Google Analytics para métricas de site</li>
      <li>Análises nativas de plataformas sociais</li>
      <li>Ferramentas de automação para acompanhar conversões</li>
      <li>Testes A/B para otimizar elementos da estratégia</li>
    </ul>
    
    <p>Estabeleça KPIs (indicadores-chave de desempenho) alinhados aos seus objetivos e avalie regularmente seu progresso, identificando o que está funcionando e o que precisa ser ajustado.</p>
    
    <h2>Conclusão</h2>
    
    <p>Desenvolver uma estratégia de marketing digital eficaz exige planejamento cuidadoso, execução consistente e otimização contínua. Ao seguir os elementos-chave descritos acima e adaptar sua abordagem com base nos resultados obtidos, você estará no caminho certo para alcançar seus objetivos de negócio e se destacar no ambiente digital competitivo.</p>
    
    <p>Lembre-se de que uma boa estratégia é dinâmica e deve evoluir conforme as tendências do mercado, comportamento do consumidor e objetivos do seu negócio. O segredo está em manter-se atualizado, adaptável e focado nas necessidades do seu público-alvo.</p>
  `,
  imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  category: 'Marketing Digital',
  slug: 'como-criar-estrategia-marketing-digital-eficaz',
  date: '15/06/2023',
  readTime: '8 min de leitura',
  author: {
    name: 'Ana Oliveira',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    role: 'Especialista em Marketing Digital'
  },
  tags: ['marketing digital', 'estratégia', 'seo', 'redes sociais', 'conteúdo']
};

// Sample all articles (including the article above)
const allArticles = [
  articleData,
  {
    id: '2',
    title: 'Tendências tecnológicas para 2024',
    excerpt: 'Um olhar aprofundado sobre as tendências de tecnologia que devem dominar o mercado no próximo ano.',
    imageUrl: 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tecnologia',
    slug: 'tendencias-tecnologicas-para-2024',
    date: '02/07/2023',
    readTime: '7 min de leitura'
  },
  {
    id: '3',
    title: 'A importância do SEO para blogs e sites',
    excerpt: 'Entenda por que o SEO é fundamental para o sucesso do seu blog ou site e como implementar as melhores práticas.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    category: 'SEO',
    slug: 'importancia-seo-blogs-sites',
    date: '28/06/2023',
    readTime: '6 min de leitura'
  },
  {
    id: '4',
    title: 'Como utilizar o Google Analytics para melhorar sua estratégia',
    excerpt: 'Aprenda a extrair insights valiosos do Google Analytics para otimizar sua estratégia de marketing digital.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Analytics',
    slug: 'como-utilizar-google-analytics-melhorar-estrategia',
    date: '20/07/2023',
    readTime: '9 min de leitura'
  },
  {
    id: '5',
    title: 'Guia completo para criação de conteúdo para redes sociais',
    excerpt: 'Um guia passo a passo para criar conteúdo engajador para diferentes plataformas de redes sociais.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    category: 'Redes Sociais',
    slug: 'guia-completo-criacao-conteudo-redes-sociais',
    date: '15/07/2023',
    readTime: '11 min de leitura'
  },
  {
    id: '6',
    title: 'O impacto da inteligência artificial no marketing',
    excerpt: 'Como a IA está revolucionando as estratégias de marketing e o que esperar para o futuro.',
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tecnologia',
    slug: 'impacto-inteligencia-artificial-marketing',
    date: '10/07/2023',
    readTime: '8 min de leitura'
  },
  {
    id: '7',
    title: 'Os melhores plugins WordPress para um blog de sucesso',
    excerpt: 'Uma seleção dos plugins mais úteis para otimizar seu blog WordPress e melhorar a experiência do usuário.',
    imageUrl: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'WordPress',
    slug: 'melhores-plugins-wordpress-blog-sucesso',
    date: '05/07/2023',
    readTime: '7 min de leitura'
  },
  {
    id: '8',
    title: 'Como implementar uma estratégia de email marketing eficiente',
    excerpt: 'Dicas práticas para criar campanhas de email marketing que geram resultados e fortalecem seu relacionamento com os clientes.',
    imageUrl: 'https://images.unsplash.com/photo-1523479999049-8e9f09d7fad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Email Marketing',
    slug: 'como-implementar-estrategia-email-marketing-eficiente',
    date: '01/07/2023',
    readTime: '10 min de leitura'
  },
  {
    id: '9',
    title: 'As melhores ferramentas gratuitas para marketing digital',
    excerpt: 'Uma lista completa de ferramentas gratuitas que podem ajudar a impulsionar sua estratégia de marketing digital sem gastar muito.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Ferramentas',
    slug: 'melhores-ferramentas-gratuitas-marketing-digital',
    date: '25/06/2023',
    readTime: '8 min de leitura'
  }
];

// Sample related articles 
const relatedArticles = [
  {
    id: '4',
    title: 'Como utilizar o Google Analytics para melhorar sua estratégia',
    excerpt: 'Aprenda a extrair insights valiosos do Google Analytics para otimizar sua estratégia de marketing digital.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Analytics',
    slug: 'como-utilizar-google-analytics-melhorar-estrategia',
    date: '20/07/2023',
    readTime: '9 min de leitura'
  },
  {
    id: '5',
    title: 'Guia completo para criação de conteúdo para redes sociais',
    excerpt: 'Um guia passo a passo para criar conteúdo engajador para diferentes plataformas de redes sociais.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    category: 'Redes Sociais',
    slug: 'guia-completo-criacao-conteudo-redes-sociais',
    date: '15/07/2023',
    readTime: '11 min de leitura'
  },
  {
    id: '8',
    title: 'Como implementar uma estratégia de email marketing eficiente',
    excerpt: 'Dicas práticas para criar campanhas de email marketing que geram resultados e fortalecem seu relacionamento com os clientes.',
    imageUrl: 'https://images.unsplash.com/photo-1523479999049-8e9f09d7fad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Email Marketing',
    slug: 'como-implementar-estrategia-email-marketing-eficiente',
    date: '01/07/2023',
    readTime: '10 min de leitura'
  }
];

const Article = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(articleData);
  const [isLoading, setIsLoading] = useState(true);
  const articleContentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching article data
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // In a real app, you would fetch the article by slug
      console.log(`Fetching article with slug: ${slug}`);
      
      // If article is found in allArticles by slug, use it
      const foundArticle = allArticles.find(art => art.slug === slug);
      if (foundArticle) {
        setArticle(foundArticle as typeof articleData);
      }
      
      // Scroll to top on article load
      window.scrollTo(0, 0);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [slug]);
  
  // Set meta tags
  useEffect(() => {
    if (!isLoading && article) {
      document.title = `${article.title} | Conecte-C`;
      
      // You would typically use a helmet component or similar for SEO tags
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
      }
    }
    
    return () => {
      document.title = 'Conecte-C';
    };
  }, [isLoading, article]);
  
  // Handle navigation back safely
  const handleNavigateBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse mb-8" />
            <div className="w-3/4 h-10 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-4" />
            <div className="w-1/2 h-6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <ReadingProgress target={articleContentRef} />
      
      <div className="min-h-screen pt-24 pb-16" ref={articleContentRef}>
        <article className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <a 
              href="/blog" 
              onClick={handleNavigateBack}
              className="inline-flex items-center text-muted-foreground hover:text-conecte-600 dark:hover:text-conecte-400 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Voltar para o blog</span>
            </a>
            
            {/* Article Header */}
            <header className="mb-8">
              <div className="space-y-3">
                <Link 
                  to={`/blog?category=${article.category.toLowerCase()}`}
                  className="inline-block bg-conecte-100 dark:bg-conecte-900/50 text-conecte-800 dark:text-conecte-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {article.category}
                </Link>
                
                <h1 className="heading-xl">
                  {article.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-6 pt-6 border-t border-border">
                {/* Author Info */}
                <div className="flex items-center mb-4 sm:mb-0">
                  <img 
                    src={article.author.avatar} 
                    alt={article.author.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{article.author.name}</div>
                    <div className="text-sm text-muted-foreground">{article.author.role}</div>
                  </div>
                </div>
                
                {/* Article Meta */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </header>
            
            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
            
            {/* Article Content */}
            <div 
              className={cn(
                "prose dark:prose-invert prose-lg max-w-none",
                "prose-headings:font-bold prose-headings:text-foreground",
                "prose-p:text-muted-foreground prose-p:leading-relaxed",
                "prose-a:text-conecte-600 dark:prose-a:text-conecte-400 prose-a:no-underline hover:prose-a:underline",
                "prose-strong:text-foreground",
                "prose-ul:text-muted-foreground prose-ol:text-muted-foreground",
                "mb-12"
              )}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Tags */}
            <div className="mb-8">
              <div className="text-sm font-semibold mb-3">Tags:</div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Link 
                    key={tag}
                    to={`/blog?search=${tag}`}
                    className="bg-gray-100 dark:bg-gray-800 text-muted-foreground px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Share Buttons */}
            <div className="mb-12 border-t border-b border-border py-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Escrito por</div>
                    <div className="font-semibold">{article.author.name}</div>
                  </div>
                </div>
                
                <ShareButtons 
                  url={window.location.href} 
                  title={article.title}
                />
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="heading-lg mb-8 text-center">Artigos Relacionados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="max-w-3xl mx-auto mt-16 bg-conecte-50 dark:bg-conecte-900/20 rounded-xl p-8 border border-border">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Inscreva-se na nossa newsletter</h3>
              <p className="text-muted-foreground mb-6">
                Receba em primeira mão nossos melhores artigos e dicas sobre marketing digital e tecnologia.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-conecte-500 transition-all duration-200"
                  aria-label="Email para newsletter"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-conecte-600 text-white font-medium rounded-lg hover:bg-conecte-700 transition-colors duration-200"
                >
                  Inscrever-se
                </button>
              </form>
              
              <p className="text-muted-foreground text-sm mt-4">
                Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
              </p>
            </div>
          </div>
        </article>
      </div>
      
      {/* Mobile Share Floating Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 border border-border">
          <ShareButtons 
            url={window.location.href} 
            title={article.title}
            vertical
          />
        </div>
      </div>
    </>
  );
};

export default Article;
