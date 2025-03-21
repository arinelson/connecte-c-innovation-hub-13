
import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Link2, Check, Instagram, Youtube, Share2, Bookmark } from 'lucide-react';
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
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
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
      
      <div className={cn("flex gap-2 flex-wrap", vertical ? "flex-col" : "flex-row")}>
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
        
        <a 
          href={shareUrls.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
          aria-label="Compartilhar no WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
            <path d="M20.52 3.449a12.2 12.2 0 0 0-16.213.001 12.07 12.07 0 0 0-1.35 16.595l-1.644 6.059 6.24-1.608a12.21 12.21 0 0 0 5.808 1.476h.005c6.754 0 12.171-5.46 12.171-12.215.002-3.248-1.262-6.311-3.556-8.613z" />
          </svg>
        </a>
        
        <a 
          href={shareUrls.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors duration-200"
          aria-label="Compartilhar no Telegram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M22 2 11 13"></path><path d="m22 2-7 20-4-9-9-4 20-7z"></path>
          </svg>
        </a>
        
        <a 
          href={shareUrls.pinterest}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
          aria-label="Compartilhar no Pinterest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        
        <button
          onClick={() => {
            try {
              // For Instagram, TikTok, YouTube, and Threads we can only copy the URL
              // since these platforms don't have direct share URLs
              navigator.clipboard.writeText(url);
              toast.success('Link copiado! Você pode compartilhar manualmente no Instagram, TikTok, YouTube ou Threads.');
            } catch (err) {
              toast.error('Falha ao copiar o link. Por favor, tente novamente.');
            }
          }}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white hover:opacity-90 transition-opacity duration-200"
          aria-label="Copiar link para compartilhar em outras redes"
        >
          <Share2 className="h-4 w-4" />
        </button>
        
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
