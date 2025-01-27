import { Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleDownloadCV = () => {
    // Replace with your actual CV file URL
    const cvUrl = "/Brooklyn-Gilbert-CV.pdf";
    window.open(cvUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:brooklyn.gilbert@example.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/brooklyn-gilbert", '_blank');
  };

  return (
    <section className="self-center flex w-full max-w-[1320px] flex-col mt-[126px] pt-[52px] max-md:max-w-full max-md:mt-10">
      <div className="z-10 flex w-[648px] max-w-full flex-col text-[#132238] font-semibold mt-[52px] max-md:mt-10 animate-fade-in">
        <h1 className="text-7xl leading-[84px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px] animate-slide-in-right">
          Hello, I'm
          <br />
          Brooklyn Gilbert
        </h1>
        <p className="text-lg font-normal leading-6 self-stretch mt-6 max-md:max-w-full animate-fade-in">
          I'm a Freelance <span className="text-[#132238]">UI/UX Designer</span> and{" "}
          <span className="text-[#132238]">Developer</span> based in London, England. 
          I strives to build immersive and beautiful web applications through 
          carefully crafted code and user-centric design.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Button 
            onClick={handleDownloadCV}
            className="bg-[#A53DFF] hover:bg-[#8431CC] transition-all duration-300 transform hover:scale-105 animate-fade-in"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handleLinkedInClick}
              className="rounded-full hover:bg-[#A53DFF] hover:text-white transition-all duration-300 transform hover:scale-105 animate-fade-in"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleEmailClick}
              className="rounded-full hover:bg-[#A53DFF] hover:text-white transition-all duration-300 transform hover:scale-105 animate-fade-in"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,200,200,1)] flex mt-[-131px] w-[133px] shrink-0 h-1.5 ml-[140px] max-md:ml-2.5 animate-slide-in-right" />
      <div className="bg-[rgba(255,200,200,1)] z-10 flex w-[92px] shrink-0 h-1.5 ml-[314px] -mt-1.5 max-md:ml-2.5 animate-slide-in-right" />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true"
        className="aspect-[0.84] object-contain w-[536px] shadow-[0px_24px_116px_rgba(43,56,76,0.09)] z-10 mt-[-263px] max-w-full rounded-[25px] max-md:mt-[-200px] animate-scale-in hover:scale-105 transition-transform duration-300"
        alt="Brooklyn Gilbert"
      />
    </section>
  );
}