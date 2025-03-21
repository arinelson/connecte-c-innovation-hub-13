// Blog post type definition
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  slug: string;
  date: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];
}

// Sample blog data
export const allArticles: BlogPost[] = [
  {
    id: '1',
    title: 'Como criar uma estratégia de marketing digital eficaz',
    excerpt: 'Descubra as melhores práticas para desenvolver uma estratégia de marketing digital que realmente funciona e impulsiona seus resultados.',
    content: `
      <h2>Introdução ao Marketing Digital</h2>
      <p>Uma estratégia de marketing digital eficaz é essencial para qualquer empresa que deseja se destacar no ambiente online. Com o aumento da concorrência, é fundamental ter um plano bem estruturado.</p>
      
      <h2>Definindo seus objetivos</h2>
      <p>Antes de iniciar qualquer estratégia, é crucial definir objetivos claros e mensuráveis. O que você deseja alcançar com suas ações de marketing digital?</p>
      <ul>
        <li>Aumento de tráfego no site</li>
        <li>Geração de leads qualificados</li>
        <li>Melhoria nas taxas de conversão</li>
        <li>Fortalecimento da marca</li>
      </ul>
      
      <h2>Conhecendo seu público-alvo</h2>
      <p>Uma das etapas mais importantes é conhecer profundamente seu público-alvo. Crie personas detalhadas que representem seus clientes ideais.</p>
      
      <h2>Escolhendo os canais certos</h2>
      <p>Nem todos os canais digitais são adequados para todas as empresas. Selecione aqueles que melhor se alinham com seu público e objetivos.</p>
      
      <h2>Criando conteúdo relevante</h2>
      <p>O conteúdo é o coração de qualquer estratégia digital. Desenvolva conteúdos úteis e interessantes que resolvam os problemas do seu público.</p>
      
      <h2>Medindo resultados</h2>
      <p>Por fim, acompanhe regularmente os resultados de suas ações. Use ferramentas analíticas para avaliar o desempenho e fazer ajustes quando necessário.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Marketing Digital',
    slug: 'como-criar-estrategia-marketing-digital-eficaz',
    date: '15/06/2023',
    readTime: '8 min de leitura',
    featured: true,
    tags: ['marketing', 'estratégia', 'digital']
  },
  {
    id: '2',
    title: 'Tendências tecnológicas para 2024',
    excerpt: 'Um olhar aprofundado sobre as tendências de tecnologia que devem dominar o mercado no próximo ano.',
    content: `
      <h2>O futuro da tecnologia</h2>
      <p>A cada ano, novas tecnologias emergem e transformam a maneira como vivemos e trabalhamos. Em 2024, algumas tendências prometem revolucionar ainda mais o cenário tecnológico.</p>
      
      <h2>Inteligência Artificial Generativa</h2>
      <p>Sistemas de IA capazes de criar conteúdo original continuarão a evoluir e se integrar em diversas indústrias, desde criação de conteúdo até desenvolvimento de software.</p>
      
      <h2>Computação Quântica</h2>
      <p>Embora ainda em estágios iniciais para uso comercial amplo, a computação quântica avançará significativamente, com mais empresas explorando suas aplicações práticas.</p>
      
      <h2>Metaverso e Realidade Estendida</h2>
      <p>O conceito de metaverso continuará a se desenvolver, com aplicações mais práticas em educação, trabalho remoto e entretenimento.</p>
      
      <h2>Sustentabilidade Digital</h2>
      <p>Tecnologias que ajudam a reduzir o impacto ambiental ganharão mais destaque, desde data centers mais eficientes até dispositivos com menor consumo de energia.</p>
      
      <h2>Privacidade e Segurança</h2>
      <p>Com o aumento das ameaças cibernéticas, soluções avançadas de segurança baseadas em IA e criptografia serão fundamentais em 2024.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tecnologia',
    slug: 'tendencias-tecnologicas-para-2024',
    date: '02/07/2023',
    readTime: '7 min de leitura',
    tags: ['tecnologia', 'inovação', 'tendências']
  },
  {
    id: '3',
    title: 'A importância do SEO para blogs e sites',
    excerpt: 'Entenda por que o SEO é fundamental para o sucesso do seu blog ou site e como implementar as melhores práticas.',
    content: `
      <h2>O que é SEO?</h2>
      <p>SEO (Search Engine Optimization) é o conjunto de técnicas que visam otimizar um site ou blog para que ele apareça nas primeiras posições dos resultados de busca.</p>
      
      <h2>Por que o SEO é importante?</h2>
      <p>O SEO é importante porque ele aumenta a visibilidade do seu site ou blog, atraindo mais tráfego orgânico e, consequentemente, mais clientes.</p>
      
      <h2>Como implementar o SEO?</h2>
      <p>Para implementar o SEO, é preciso seguir algumas práticas, como:</p>
      <ul>
        <li>Escolher palavras-chave relevantes</li>
        <li>Otimizar o conteúdo do site</li>
        <li>Construir backlinks</li>
        <li>Melhorar a velocidade do site</li>
        <li>Adaptar o site para dispositivos móveis</li>
      </ul>
      
      <h2>Ferramentas de SEO</h2>
      <p>Existem diversas ferramentas que podem ajudar na implementação do SEO, como:</p>
      <ul>
        <li>Google Analytics</li>
        <li>Google Search Console</li>
        <li>SEMrush</li>
        <li>Ahrefs</li>
        <li>Moz</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>O SEO é fundamental para o sucesso de qualquer blog ou site. Ao implementar as melhores práticas, é possível aumentar a visibilidade do seu site e atrair mais tráfego orgânico.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    category: 'SEO',
    slug: 'importancia-seo-blogs-sites',
    date: '28/06/2023',
    readTime: '6 min de leitura',
    tags: ['seo', 'otimização', 'tráfego orgânico']
  },
  {
    id: '4',
    title: 'Como utilizar o Google Analytics para melhorar sua estratégia',
    excerpt: 'Aprenda a extrair insights valiosos do Google Analytics para otimizar sua estratégia de marketing digital.',
    content: `
      <h2>O que é o Google Analytics?</h2>
      <p>O Google Analytics é uma ferramenta gratuita do Google que permite monitorar o tráfego do seu site ou blog.</p>
      
      <h2>Por que usar o Google Analytics?</h2>
      <p>O Google Analytics é importante porque ele fornece informações valiosas sobre o comportamento dos usuários no seu site, permitindo que você tome decisões mais assertivas.</p>
      
      <h2>Como usar o Google Analytics?</h2>
      <p>Para usar o Google Analytics, é preciso seguir alguns passos:</p>
      <ul>
        <li>Criar uma conta no Google Analytics</li>
        <li>Adicionar o código de rastreamento no seu site</li>
        <li>Configurar os objetivos</li>
        <li>Analisar os relatórios</li>
      </ul>
      
      <h2>Relatórios do Google Analytics</h2>
      <p>O Google Analytics oferece diversos relatórios, como:</p>
      <ul>
        <li>Visão geral do público</li>
        <li>Aquisição de tráfego</li>
        <li>Comportamento dos usuários</li>
        <li>Conversões</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>O Google Analytics é uma ferramenta poderosa que pode ajudar a melhorar sua estratégia de marketing digital. Ao analisar os relatórios, é possível identificar oportunidades de melhoria e tomar decisões mais assertivas.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Analytics',
    slug: 'como-utilizar-google-analytics-melhorar-estrategia',
    date: '20/07/2023',
    readTime: '9 min de leitura',
    tags: ['google analytics', 'analytics', 'métricas']
  },
  {
    id: '5',
    title: 'Guia completo para criação de conteúdo para redes sociais',
    excerpt: 'Um guia passo a passo para criar conteúdo engajador para diferentes plataformas de redes sociais.',
    content: `
      <h2>Introdução</h2>
      <p>As redes sociais se tornaram uma ferramenta essencial para qualquer estratégia de marketing digital. Criar conteúdo engajador é fundamental para atrair e fidelizar o público.</p>
      
      <h2>Conhecendo as plataformas</h2>
      <p>Cada rede social tem suas particularidades e exige um tipo de conteúdo diferente. É importante conhecer as características de cada plataforma para criar conteúdo adequado.</p>
      
      <h2>Planejamento de conteúdo</h2>
      <p>Um bom planejamento de conteúdo é essencial para garantir a consistência e relevância das suas publicações. Defina temas, formatos e horários de publicação.</p>
      
      <h2>Formatos de conteúdo</h2>
      <p>Explore diferentes formatos de conteúdo, como:</p>
      <ul>
        <li>Imagens</li>
        <li>Vídeos</li>
        <li>Stories</li>
        <li>Lives</li>
        <li>Artigos</li>
      </ul>
      
      <h2>Engajamento</h2>
      <p>Incentive o engajamento do público através de perguntas, enquetes e promoções. Responda aos comentários e mensagens para criar um relacionamento com seus seguidores.</p>
      
      <h2>Análise de resultados</h2>
      <p>Monitore os resultados das suas publicações para identificar o que funciona e o que precisa ser ajustado. Use as métricas das redes sociais para otimizar sua estratégia.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80',
    category: 'Redes Sociais',
    slug: 'guia-completo-criacao-conteudo-redes-sociais',
    date: '15/07/2023',
    readTime: '11 min de leitura',
    tags: ['redes sociais', 'conteúdo', 'engajamento']
  },
  {
    id: '6',
    title: 'O impacto da inteligência artificial no marketing',
    excerpt: 'Como a IA está revolucionando as estratégias de marketing e o que esperar para o futuro.',
    content: `
      <h2>Introdução</h2>
      <p>A inteligência artificial (IA) está transformando o marketing, oferecendo novas possibilidades e desafios. As empresas que souberem aproveitar a IA terão uma vantagem competitiva.</p>
      
      <h2>Aplicações da IA no marketing</h2>
      <p>A IA pode ser aplicada em diversas áreas do marketing, como:</p>
      <ul>
        <li>Análise de dados</li>
        <li>Personalização de conteúdo</li>
        <li>Automação de tarefas</li>
        <li>Chatbots</li>
        <li>Previsão de tendências</li>
      </ul>
      
      <h2>Benefícios da IA no marketing</h2>
      <p>A IA oferece diversos benefícios para o marketing, como:</p>
      <ul>
        <li>Aumento da eficiência</li>
        <li>Melhora da experiência do cliente</li>
        <li>Redução de custos</li>
        <li>Tomada de decisões mais assertivas</li>
      </ul>
      
      <h2>Desafios da IA no marketing</h2>
      <p>Apesar dos benefícios, a IA também apresenta desafios, como:</p>
      <ul>
        <li>Falta de profissionais qualificados</li>
        <li>Custos de implementação</li>
        <li>Preocupações com a privacidade dos dados</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>A IA está revolucionando o marketing e as empresas que souberem aproveitar essa tecnologia terão uma vantagem competitiva. É importante estar atento às tendências e investir em profissionais qualificados.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Tecnologia',
    slug: 'impacto-inteligencia-artificial-marketing',
    date: '10/07/2023',
    readTime: '8 min de leitura',
    tags: ['inteligência artificial', 'ia', 'marketing']
  },
  {
    id: '7',
    title: 'Os melhores plugins WordPress para um blog de sucesso',
    excerpt: 'Uma seleção dos plugins mais úteis para otimizar seu blog WordPress e melhorar a experiência do usuário.',
    content: `
      <h2>Introdução</h2>
      <p>O WordPress é uma plataforma poderosa para criar blogs e sites. Com os plugins certos, é possível otimizar seu blog e melhorar a experiência do usuário.</p>
      
      <h2>Plugins essenciais</h2>
      <p>Existem diversos plugins essenciais para um blog WordPress, como:</p>
      <ul>
        <li>Yoast SEO</li>
        <li>Akismet Anti-Spam</li>
        <li>Contact Form 7</li>
        <li>W3 Total Cache</li>
        <li>Jetpack</li>
      </ul>
      
      <h2>Plugins de SEO</h2>
      <p>Os plugins de SEO ajudam a otimizar seu blog para os mecanismos de busca, como o Google.</p>
      
      <h2>Plugins de segurança</h2>
      <p>Os plugins de segurança protegem seu blog contra ataques e spam.</p>
      
      <h2>Plugins de desempenho</h2>
      <p>Os plugins de desempenho ajudam a melhorar a velocidade do seu blog.</p>
      
      <h2>Plugins de contato</h2>
      <p>Os plugins de contato permitem que os visitantes entrem em contato com você.</p>
      
      <h2>Conclusão</h2>
      <p>Com os plugins certos, é possível otimizar seu blog WordPress e melhorar a experiência do usuário. É importante escolher plugins de qualidade e mantê-los atualizados.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'WordPress',
    slug: 'melhores-plugins-wordpress-blog-sucesso',
    date: '05/07/2023',
    readTime: '7 min de leitura',
    tags: ['wordpress', 'plugins', 'otimização']
  },
  {
    id: '8',
    title: 'Como implementar uma estratégia de email marketing eficiente',
    excerpt: 'Dicas práticas para criar campanhas de email marketing que geram resultados e fortalecem seu relacionamento com os clientes.',
    content: `
      <h2>Introdução</h2>
      <p>O email marketing é uma ferramenta poderosa para se comunicar com seus clientes e gerar resultados. Com uma estratégia eficiente, é possível fortalecer o relacionamento com os clientes e aumentar as vendas.</p>
      
      <h2>Construindo sua lista de emails</h2>
      <p>O primeiro passo para uma estratégia de email marketing eficiente é construir sua lista de emails. Ofereça conteúdo de qualidade em troca do endereço de email dos visitantes.</p>
      
      <h2>Segmentando sua lista</h2>
      <p>Segmente sua lista de emails para enviar mensagens mais relevantes para cada grupo de clientes. A segmentação pode ser feita por interesses, localização, histórico de compras, etc.</p>
      
      <h2>Criando emails de qualidade</h2>
      <p>Crie emails de qualidade, com conteúdo relevante e design atraente. Use imagens, vídeos e outros elementos visuais para tornar seus emails mais interessantes.</p>
      
      <h2>Automatizando suas campanhas</h2>
      <p>Automatize suas campanhas de email marketing para enviar mensagens no momento certo e para o público certo. Use ferramentas de automação para criar fluxos de emails personalizados.</p>
      
      <h2>Analisando seus resultados</h2>
      <p>Analise os resultados das suas campanhas de email marketing para identificar o que funciona e o que precisa ser ajustado. Use as métricas das ferramentas de email marketing para otimizar sua estratégia.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1523479999049-8e9f09d7fad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Email Marketing',
    slug: 'como-implementar-estrategia-email-marketing-eficiente',
    date: '01/07/2023',
    readTime: '10 min de leitura',
    tags: ['email marketing', 'estratégia', 'automação']
  },
  {
    id: '9',
    title: 'As melhores ferramentas gratuitas para marketing digital',
    excerpt: 'Uma lista completa de ferramentas gratuitas que podem ajudar a impulsionar sua estratégia de marketing digital sem gastar muito.',
    content: `
      <h2>Introdução</h2>
      <p>O marketing digital pode ser caro, mas existem diversas ferramentas gratuitas que podem ajudar a impulsionar sua estratégia sem gastar muito. Com as ferramentas certas, é possível obter resultados significativos.</p>
      
      <h2>Ferramentas de SEO</h2>
      <p>Existem diversas ferramentas gratuitas de SEO, como:</p>
      <ul>
        <li>Google Search Console</li>
        <li>Google Analytics</li>
        <li>Ubersuggest</li>
        <li>SEMrush (versão gratuita)</li>
        <li>Moz (versão gratuita)</li>
      </ul>
      
      <h2>Ferramentas de redes sociais</h2>
      <p>Existem diversas ferramentas gratuitas de redes sociais, como:</p>
      <ul>
        <li>Buffer</li>
        <li>Hootsuite</li>
        <li>Canva</li>
        <li>Bitly</li>
      </ul>
      
      <h2>Ferramentas de email marketing</h2>
      <p>Existem diversas ferramentas gratuitas de email marketing, como:</p>
      <ul>
        <li>Mailchimp</li>
        <li>MailerLite</li>
        <li>Sendinblue</li>
      </ul>
      
      <h2>Ferramentas de análise</h2>
      <p>Existem diversas ferramentas gratuitas de análise, como:</p>
      <ul>
        <li>Google Analytics</li>
        <li>Google Tag Manager</li>
      </ul>
      
      <h2>Conclusão</h2>
      <p>Com as ferramentas gratuitas certas, é possível impulsionar sua estratégia de marketing digital sem gastar muito. É importante escolher ferramentas de qualidade e aprender a usá-las corretamente.</p>
    `,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Ferramentas',
    slug: 'melhores-ferramentas-gratuitas-marketing-digital',
    date: '25/06/2023',
    readTime: '8 min de leitura',
    tags: ['ferramentas', 'marketing digital', 'gratuito']
  }
];

// Get all unique categories from articles
export const getAllCategories = (): string[] => {
  const categoriesSet = new Set(allArticles.map(article => article.category));
  return ['Todos', ...Array.from(categoriesSet)];
};

// Get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category.toLowerCase() === 'todos') {
    return allArticles;
  }
  return allArticles.filter(
    article => article.category.toLowerCase() === category.toLowerCase()
  );
};

// Get posts by search query
export const searchPosts = (query: string): BlogPost[] => {
  const searchTerm = query.toLowerCase();
  return allArticles.filter(
    article => 
      article.title.toLowerCase().includes(searchTerm) || 
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm) ||
      (article.tags && article.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
  );
};

// Get a post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return allArticles.find(article => article.slug === slug);
};

// Get related posts (same category, excluding current post)
export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return allArticles
    .filter(post => post.category === currentPost.category && post.id !== currentPost.id)
    .slice(0, limit);
};

// Get featured posts
export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return allArticles
    .filter(post => post.featured)
    .slice(0, limit);
};

// Get recent posts
export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  // In a real application, you would sort by date
  return [...allArticles]
    .slice(0, limit);
};

// Get popular tags
export const getPopularTags = (limit: number = 10): {tag: string, count: number}[] => {
  const tagCount: Record<string, number> = {};
  
  allArticles.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    }
  });
  
  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};
