
import { useState, useEffect, useCallback } from 'react';
import { Progress } from '@/components/ui/progress';

interface ReadingProgressProps {
  target?: React.RefObject<HTMLElement>;
  color?: string;
  height?: number;
  className?: string;
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({ 
  target,
  height = 4,
  className = ''
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  
  const updateReadingProgress = useCallback(() => {
    if (!document) return;
    
    const element = target?.current || document.documentElement;
    
    if (!element) return;
    
    // Calculate how much the user has scrolled based on element height
    const totalHeight = element.scrollHeight - element.clientHeight;
    if (totalHeight <= 0) return;
    
    const currentProgress = window.scrollY / totalHeight;
    setReadingProgress(Math.min(currentProgress * 100, 100));
  }, [target]);
  
  useEffect(() => {
    // Update on mount
    updateReadingProgress();
    
    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, [updateReadingProgress]);
  
  return (
    <div 
      className={`fixed top-0 left-0 z-[100] w-full ${className}`}
      style={{ height: `${height}px` }}
    >
      <Progress 
        value={readingProgress} 
        className="h-full rounded-none bg-gray-200 dark:bg-gray-800"
      />
    </div>
  );
};

export default ReadingProgress;
