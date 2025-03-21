
import { useState, useEffect } from 'react';

interface ReadingProgressProps {
  target?: React.RefObject<HTMLElement>;
  color?: string;
  height?: number;
  className?: string;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ 
  target,
  color = 'bg-conecte-600 dark:bg-conecte-500',
  height = 4,
  className = ''
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const element = target?.current || document.documentElement;
    
    const updateReadingProgress = () => {
      if (!element) return;
      
      // Calculate how much the user has scrolled based on element height
      const totalHeight = element.scrollHeight - element.clientHeight;
      const currentProgress = element.scrollTop / totalHeight;
      setReadingProgress(currentProgress * 100);
    };
    
    // Update on mount
    updateReadingProgress();
    
    // Add scroll event listener
    document.addEventListener('scroll', updateReadingProgress, { passive: true });
    
    // Clean up
    return () => {
      document.removeEventListener('scroll', updateReadingProgress);
    };
  }, [target]);
  
  return (
    <div 
      className={`fixed top-0 left-0 z-[100] w-full ${className}`}
      style={{ height: `${height}px` }}
    >
      <div 
        className={`h-full ${color}`}
        style={{ width: `${readingProgress}%`, transition: 'width 0.2s ease' }}
      />
    </div>
  );
};

export default ReadingProgress;
