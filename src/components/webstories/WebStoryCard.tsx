
import React from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WebStory } from '@/types/webstories';

type WebStoryCardProps = {
  story: WebStory;
  onClick: () => void;
};

const WebStoryCard = ({ story, onClick }: WebStoryCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl cursor-pointer hover-scale"
      onClick={onClick}
    >
      {/* Cover Image */}
      <div className="aspect-[9/16] w-full overflow-hidden rounded-xl">
        <img 
          src={story.coverImage} 
          alt={story.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          width="600"
          height="1066"
          loading="lazy"
        />
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent rounded-xl" />
      
      {/* Play Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
        <Play className="h-6 w-6 text-conecte-600 dark:text-conecte-400 ml-1" />
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-semibold text-lg line-clamp-2 mb-1">{story.title}</h3>
        <p className="text-sm text-white/80">{story.date}</p>
      </div>
    </div>
  );
};

export default WebStoryCard;
