import { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Share2, 
  Volume2, 
  VolumeX, 
  ExternalLink 
} from 'lucide-react';
import WebStoryCard from '../components/webstories/WebStoryCard';
import WebStoryViewer from '../components/webstories/WebStoryViewer';
import { cn } from '@/lib/utils';
import { WebStory } from '@/types/webstories';

// Sample data for web stories
const webStoriesData: WebStory[] = [
  {
    id: '1',
    title: 'Marketing Digital: 5 Tendências para 2024',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '12 Mai 2024',
    slides: [
      {
        id: 's1-1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Marketing Digital em 2024',
        text: 'Descubra as principais tendências que estão moldando o marketing digital neste ano'
      },
      {
        id: 's1-2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: '1. Marketing Conversacional',
        text: 'Chatbots e assistentes virtuais estão revolucionando o atendimento ao cliente'
      },
      {
        id: 's1-3',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: '2. Conteúdo em Vídeo',
        text: 'Vídeos curtos continuam a dominar as estratégias de engajamento nas redes sociais'
      },
      {
        id: 's1-4',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: '3. IA no Marketing',
        text: 'Inteligência artificial está transformando a personalização e análise de dados'
      },
      {
        id: 's1-5',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: '4. Marketing de Influência',
        text: 'Microinfluenciadores ganham espaço por oferecerem maior autenticidade'
      }
    ]
  },
  {
    id: '2',
    title: 'SEO: Otimize seu Site para os Algoritmos de 2024',
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '10 Mai 2024',
    slides: [
      {
        id: 's2-1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'SEO em 2024',
        text: 'Estratégias essenciais para rankear melhor nos mecanismos de busca'
      },
      {
        id: 's2-2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Core Web Vitals',
        text: 'A velocidade e experiência do usuário são fatores cruciais para SEO'
      },
      {
        id: 's2-3',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Intenção de Busca',
        text: 'Entender a intenção por trás das pesquisas é mais importante que palavras-chave'
      }
    ]
  },
  {
    id: '3',
    title: 'Como Criar uma Presença Digital Efetiva',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '5 Mai 2024',
    slides: [
      {
        id: 's3-1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Presença Digital',
        text: 'Construa uma marca forte e consistente no ambiente online'
      },
      {
        id: 's3-2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Multicanal',
        text: 'Esteja presente onde seu público está: redes sociais, blog, podcast'
      }
    ]
  },
  {
    id: '4',
    title: 'E-commerce: Aumentando Conversões',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '1 Mai 2024',
    slides: [
      {
        id: 's4-1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'E-commerce',
        text: 'Estratégias para aumentar a taxa de conversão da sua loja virtual'
      }
    ]
  },
  {
    id: '5',
    title: 'Redes Sociais B2B: Estratégias que Funcionam',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '28 Abr 2024',
    slides: [
      {
        id: 's5-1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Marketing B2B',
        text: 'Como utilizar as redes sociais para negócios B2B'
      }
    ]
  },
  {
    id: '6',
    title: 'Conteúdo Interativo: Engajamento e Conversão',
    coverImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    date: '25 Abr 2024',
    slides: [
      {
        id: 's6-1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Conteúdo Interativo',
        text: 'Quizzes, enquetes e calculadoras que aumentam o engajamento'
      }
    ]
  }
];

const WebStories = () => {
  const [selectedStory, setSelectedStory] = useState<WebStory | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const openStory = (story: WebStory) => {
    setSelectedStory(story);
    document.body.style.overflow = 'hidden';
  };
  
  const closeStory = () => {
    setSelectedStory(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className={cn(
          "max-w-3xl mx-auto text-center mb-10 md:mb-12 transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <h1 className="heading-xl mb-4">Web Stories</h1>
          <p className="text-xl text-muted-foreground">
            Explore nossos conteúdos em formato de stories: conteúdos rápidos, 
            visuais e informativos sobre marketing digital e tecnologia.
          </p>
        </div>
        
        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-300 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {webStoriesData.map((story) => (
            <WebStoryCard 
              key={story.id} 
              story={story} 
              onClick={() => openStory(story)} 
            />
          ))}
        </div>
      </div>
      
      {selectedStory && (
        <WebStoryViewer
          story={selectedStory}
          onClose={closeStory}
        />
      )}
    </div>
  );
};

export default WebStories;
