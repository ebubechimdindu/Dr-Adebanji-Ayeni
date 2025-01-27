import { Link } from "react-router-dom";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 justify-between bg-white/90 backdrop-blur-sm flex w-full gap-5 whitespace-nowrap flex-wrap px-5 py-4 lg:px-20">
      <Link to="/" className="flex items-center gap-3 justify-center">
        <div className="bg-[#A53DFF] overflow-hidden text-2xl text-white font-medium leading-[56px] w-14 h-14 flex items-center justify-center rounded-[1000px]">
          B
        </div>
        <div className="text-[#132238] text-[32px] font-semibold leading-none">
          Brooklyn
        </div>
      </Link>
      <nav className="flex items-center justify-end flex-1 min-w-60 text-base text-[#333] font-medium flex-wrap">
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
            className="px-4 py-2 hover:text-[#A53DFF] transition-colors"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('contact')}
          className="ml-4 rounded bg-[#A53DFF] text-white font-semibold px-6 py-2 hover:bg-[#8431CC] transition-colors"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}