
import { useState, useEffect, useCallback } from 'react';

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
  
  const updateReadingProgress = useCallback(() => {
    const element = target?.current || document.documentElement;
    
    if (!element) return;
    
    // Calculate how much the user has scrolled based on element height
    const totalHeight = element.scrollHeight - element.clientHeight;
    if (totalHeight <= 0) return;
    
    const currentProgress = Math.min(element.scrollTop / totalHeight, 1);
    setReadingProgress(currentProgress * 100);
  }, [target]);
  
  useEffect(() => {
    // Update on mount
    updateReadingProgress();
    
    // Add scroll event listener with passive flag for better performance
    document.addEventListener('scroll', updateReadingProgress, { passive: true });
    
    // Clean up
    return () => {
      document.removeEventListener('scroll', updateReadingProgress);
    };
  }, [updateReadingProgress]);
  
  return (
    <div 
      className={`fixed top-0 left-0 z-[100] w-full ${className}`}
      style={{ height: `${height}px` }}
    >
      <div 
        className={`h-full ${color}`}
        style={{ width: `${readingProgress}%`, transition: 'width 0.2s ease' }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ReadingProgress;
