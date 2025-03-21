
import { useState, useEffect, useRef } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown, List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement>;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef, className }) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // Extract headings from the content
  useEffect(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const headingElements = content.querySelectorAll('h2, h3');
    
    const items: TOCItem[] = Array.from(headingElements).map((heading) => {
      // If heading doesn't have an id, create one based on text content
      if (!heading.id) {
        const id = heading.textContent?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || `heading-${Math.random().toString(36).substr(2, 9)}`;
        heading.id = id;
      }
      
      return {
        id: heading.id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1)) // Extract level from h2, h3, etc.
      };
    });

    setHeadings(items);

    // Setup intersection observer to track which heading is currently visible
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headingElements.forEach((heading) => {
      observer.current?.observe(heading);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [contentRef]);

  if (headings.length === 0) {
    return null;
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={cn("mb-8 border rounded-lg p-4 bg-white dark:bg-gray-800", className)}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <List size={18} />
            Índice do Conteúdo
          </h3>
          <CollapsibleTrigger asChild>
            <button className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 p-1 transition-colors">
              <ChevronDown 
                className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  isOpen ? "transform rotate-180" : ""
                )}
              />
            </button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent className="pt-2">
          <nav>
            <ul className="space-y-1 pl-1">
              {headings.map((heading) => (
                <li 
                  key={heading.id}
                  className={cn(
                    "transition-colors duration-200",
                    heading.level === 2 ? "pl-0" : "pl-4",
                    activeId === heading.id 
                      ? "text-conecte-600 dark:text-conecte-400 font-medium" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className="text-left w-full py-1"
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default TableOfContents;
