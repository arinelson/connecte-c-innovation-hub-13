
export type WebStorySlide = {
  id: string;
  type: 'image' | 'video';
  content: string;
  title: string;
  text: string;
};

export type WebStory = {
  id: string;
  title: string;
  coverImage: string;
  date: string;
  slides: WebStorySlide[];
};
