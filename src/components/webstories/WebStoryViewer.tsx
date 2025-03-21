
import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Share2, 
  Volume2, 
  VolumeX, 
  ExternalLink 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Slide = {
  id: string;
  type: 'image' | 'video';
  content: string;
  title: string;
  text: string;
};

type Story = {
  id: string;
  title: string;
  slides: Slide[];
};

type WebStoryViewerProps = {
  story: Story;
  onClose: () => void;
};

const WebStoryViewer = ({ story, onClose }: WebStoryViewerProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const maxDuration = 7000; // 7 seconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const currentSlide = story.slides[currentSlideIndex];
  const totalSlides = story.slides.length;
  
  // Setup timer for auto-progression
  useEffect(() => {
    if (isPlaying) {
      let startTime = Date.now();
      let elapsed = 0;
      
      const updateProgress = () => {
        elapsed = Date.now() - startTime;
        const newProgress = (elapsed / maxDuration) * 100;
        
        if (newProgress >= 100) {
          handleNextSlide();
        } else {
          setProgress(newProgress);
          timerRef.current = setTimeout(updateProgress, 50);
        }
      };
      
      timerRef.current = setTimeout(updateProgress, 50);
      
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [currentSlideIndex, isPlaying]);
  
  // Reset progress when changing slides
  useEffect(() => {
    setProgress(0);
  }, [currentSlideIndex]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ') {
        // Space bar to toggle play/pause
        setIsPlaying(prev => !prev);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlideIndex]);
  
  // Handle slide navigation
  const handleNextSlide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setProgress(0);
    } else {
      // Last slide, close the story
      onClose();
    }
  };
  
  const handlePrevSlide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setProgress(0);
    }
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  // Toggle sound
  const toggleSound = () => {
    setIsMuted(!isMuted);
  };
  
  // Share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: currentSlide.title,
        url: window.location.href,
      }).catch((error) => console.log('Erro ao compartilhar:', error));
    } else {
      alert('Compartilhamento não suportado neste navegador');
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Story Container */}
      <div className="relative w-full h-full max-w-md mx-auto flex flex-col">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center space-x-1">
          {story.slides.map((_, index) => (
            <div 
              key={index} 
              className="h-1 bg-white/30 flex-1 rounded-full overflow-hidden"
            >
              {index === currentSlideIndex && (
                <div 
                  className="h-full bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
              {index < currentSlideIndex && (
                <div className="h-full bg-white rounded-full w-full" />
              )}
            </div>
          ))}
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Content */}
        <div 
          className="flex-1 relative bg-black overflow-hidden"
          onClick={togglePlayPause}
        >
          {currentSlide.type === 'image' && (
            <img 
              src={currentSlide.content} 
              alt={currentSlide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          
          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex flex-col">
            {/* Text Content */}
            <div className="mt-auto p-6 text-white">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{currentSlide.title}</h2>
              <p className="text-white/90">{currentSlide.text}</p>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="absolute bottom-4 left-0 right-0 z-10 px-4 flex justify-between items-center">
          {/* Left Controls */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSound}
              className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleShare}
              className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
              <Share2 className="h-5 w-5" />
            </button>
            <a 
              href={`/blog/${story.id}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        {currentSlideIndex > 0 && (
          <button 
            onClick={handlePrevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 rounded-full flex items-center justify-center text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        
        {currentSlideIndex < totalSlides - 1 && (
          <button 
            onClick={handleNextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 rounded-full flex items-center justify-center text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default WebStoryViewer;
