
import ShareButtons from './ShareButtons';

interface MobileShareButtonProps {
  url: string;
  title: string;
}

const MobileShareButton: React.FC<MobileShareButtonProps> = ({ url, title }) => {
  return (
    <div className="fixed bottom-6 right-6 md:hidden z-40">
      <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 border border-border">
        <ShareButtons 
          url={url} 
          title={title}
          vertical
        />
      </div>
    </div>
  );
};

export default MobileShareButton;
