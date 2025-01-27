import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="justify-between bg-white flex w-full gap-[40px_100px] whitespace-nowrap flex-wrap px-[300px] py-5 max-md:max-w-full max-md:px-5">
      <Link to="/" className="flex items-center gap-3 justify-center">
        <div className="bg-[#A53DFF] self-stretch overflow-hidden text-2xl text-white font-medium leading-[56px] w-14 h-14 my-auto px-5 rounded-[1000px]">
          B
        </div>
        <div className="text-[#132238] text-[32px] font-semibold leading-none self-stretch my-auto">
          Brooklyn
        </div>
      </Link>
      <nav className="flex min-w-60 text-base text-[#333] font-medium flex-wrap max-md:max-w-full">
        <Link to="/" className="self-stretch gap-2.5 px-6 py-3 max-md:px-5">
          Home
        </Link>
        <Link to="/about" className="self-stretch gap-2.5 px-6 py-3 max-md:px-5">
          About
        </Link>
        <Link to="/process" className="self-stretch gap-2.5 px-6 py-3 max-md:px-5">
          Process
        </Link>
        <Link to="/portfolio" className="self-stretch gap-2.5 px-6 py-3 max-md:px-5">
          Portfolio
        </Link>
        <Link to="/blog" className="self-stretch gap-2.5 px-6 py-3 max-md:px-5">
          Blog
        </Link>
        <Link to="/services" className="self-stretch gap-2.5 px-6 py-3 max-md:px-5">
          Services
        </Link>
        <Link to="/contact" className="self-stretch rounded bg-[#A53DFF] gap-3 text-white font-semibold px-6 py-3 max-md:px-5">
          Contact
        </Link>
      </nav>
    </header>
  );
}