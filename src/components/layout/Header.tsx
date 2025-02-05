import { Link } from "react-router-dom";
import { Menu, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mainLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' },
  ];

  const academicLinks = [
    { id: 'education', label: 'Education' },
    { id: 'positions', label: 'Academic Positions' },
  ];

  const NavLinks = () => (
    <>
      {mainLinks.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={cn(
            "px-4 py-2 text-[#697484] transition-colors relative hover:text-[#9b87f5] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#9b87f5] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left animate-fade-in"
          )}
        >
          {label}
        </button>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger className="px-4 py-2 text-[#697484] transition-colors inline-flex items-center gap-1 hover:text-[#9b87f5]">
          Academic <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-56 bg-white/95 backdrop-blur-lg border border-purple-100 shadow-lg rounded-lg p-2"
        >
          {academicLinks.map(({ id, label }) => (
            <DropdownMenuItem
              key={id}
              onClick={() => scrollToSection(id)}
              className="cursor-pointer hover:bg-purple-50 rounded-md transition-colors duration-200"
            >
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <button
        onClick={() => scrollToSection('articles')}
        className="px-4 py-2 text-[#697484] transition-colors relative hover:text-[#9b87f5] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#9b87f5] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left animate-fade-in"
      >
        Articles
      </button>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-purple-100/20">
      <div className="container mx-auto flex items-center justify-between gap-5 px-4 sm:px-6 lg:px-20 py-4">
        <Link 
          to="/" 
          className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          onClick={() => scrollToSection('home')}
        >
          <div className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] overflow-hidden text-xl sm:text-2xl text-white font-medium w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-lg animate-scale-in">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="text-[#132238] text-xl sm:text-2xl font-bold animate-fade-in">
            Dr. Adebanji
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-2 animate-fade-in">
          <NavLinks />
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-semibold px-6 py-2 rounded-full hover:from-[#8b77e5] hover:to-[#6E59A5] transition-all duration-300 transform hover:scale-105 shadow-md animate-scale-in"
          >
            Contact
          </button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-purple-50 animate-fade-in"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-6 mt-8">
              <NavLinks />
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-semibold px-6 py-3 rounded-full hover:from-[#8b77e5] hover:to-[#6E59A5] transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Contact
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}