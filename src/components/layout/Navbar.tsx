import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Home, FileText, Info, Mail, Layers } from "lucide-react";

const linkClasses =
  "group relative h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50";
const activeLinkClasses = "text-foreground";

const NavMobileLink = React.forwardRef<
  React.ElementRef<typeof NavLink>,
  React.ComponentPropsWithoutRef<typeof NavLink> & { onClick?: () => void }
>(({ className, children, onClick, ...props }, ref) => {
  return (
    <NavLink
      ref={ref}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
          isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground",
          className
        )
      }
      {...props}
    >
      {children}
    </NavLink>
  );
});
NavMobileLink.displayName = "NavMobileLink";

const Navbar = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 h-16 z-40 transition-colors duration-200 bg-background/80 backdrop-blur-lg border-b",
      scrolled ? "border-border" : "border-transparent",
      className
    )}>
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0 text-conecte-600 dark:text-conecte-500 flex items-center gap-2 text-lg md:text-xl font-semibold">
          <img 
            src="/placeholder.svg"
            alt="Conecte-C Logo" 
            className="h-8 w-8"
            width="32"
            height="32"
          />
          <span>Conecte-C</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className={cn(
                      linkClasses,
                      location.pathname === "/" && activeLinkClasses
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/blog" 
                    className={cn(
                      linkClasses,
                      location.pathname === "/blog" && activeLinkClasses
                    )}
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/webstories" 
                    className={cn(
                      linkClasses,
                      location.pathname === "/webstories" && activeLinkClasses
                    )}
                  >
                    Web Stories
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/about" 
                    className={cn(
                      linkClasses,
                      location.pathname === "/about" && activeLinkClasses
                    )}
                  >
                    Sobre
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/contact" 
                    className={cn(
                      linkClasses,
                      location.pathname === "/contact" && activeLinkClasses
                    )}
                  >
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        {/* Actions */}
        <div className="flex items-center">
          <ThemeToggle />
          
          {/* Mobile Menu Trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setShowMobileMenu(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader className="border-b pb-4 mb-4">
            <SheetTitle className="text-conecte-600 dark:text-conecte-500 flex items-center gap-2">
              <img 
                src="/placeholder.svg"
                alt="Conecte-C Logo" 
                className="h-6 w-6"
                width="24"
                height="24"
              />
              <span>Conecte-C</span>
            </SheetTitle>
          </SheetHeader>
          
          <nav className="flex flex-col space-y-1">
            <NavMobileLink to="/" onClick={closeMobileMenu}>
              <Home className="h-4 w-4 mr-2" />
              Home
            </NavMobileLink>
            
            <NavMobileLink to="/blog" onClick={closeMobileMenu}>
              <FileText className="h-4 w-4 mr-2" />
              Blog
            </NavMobileLink>
            
            <NavMobileLink to="/webstories" onClick={closeMobileMenu}>
              <Layers className="h-4 w-4 mr-2" />
              Web Stories
            </NavMobileLink>
            
            <NavMobileLink to="/about" onClick={closeMobileMenu}>
              <Info className="h-4 w-4 mr-2" />
              Sobre
            </NavMobileLink>
            
            <NavMobileLink to="/contact" onClick={closeMobileMenu}>
              <Mail className="h-4 w-4 mr-2" />
              Contato
            </NavMobileLink>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
