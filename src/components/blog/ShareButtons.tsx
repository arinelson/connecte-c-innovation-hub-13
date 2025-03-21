
import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
  vertical?: boolean;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ 
  url, 
  title, 
  className,
  vertical = false
}) => {
  const [copied, setCopied] = useState(false);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Link copiado para a área de transferência!');
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Falha ao copiar o link. Por favor, tente novamente.');
    }
  };
  
  return (
    <div 
      className={cn(
        "flex gap-2",
        vertical ? "flex-col" : "flex-row items-center",
        className
      )}
    >
      {!vertical && <span className="text-sm text-muted-foreground">Compartilhar:</span>}
      
      <div className={cn("flex gap-2", vertical ? "flex-col" : "flex-row")}>
        <a 
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
          aria-label="Compartilhar no Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
        
        <a 
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors duration-200"
          aria-label="Compartilhar no Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
        
        <a 
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-200"
          aria-label="Compartilhar no LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Copiar link"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Link2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
