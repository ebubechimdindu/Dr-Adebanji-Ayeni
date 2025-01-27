import { Link } from "react-router-dom";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between gap-5 px-5 py-4 lg:px-20">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-[#A53DFF] overflow-hidden text-2xl text-white font-medium w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
            B
          </div>
          <div className="text-[#132238] text-2xl font-bold">
            Brooklyn
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-2">
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'process', label: 'Process' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'blog', label: 'Blog' },
            { id: 'services', label: 'Services' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-4 py-2 text-[#697484] hover:text-[#A53DFF] transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#A53DFF] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-4 bg-[#A53DFF] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#8431CC] transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}