import { Download, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleDownloadCV = () => {
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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-24 pb-12">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="z-10 flex flex-col max-w-2xl order-2 lg:order-1">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.2] font-bold text-[#132238] animate-slide-in-right">
              Hello, I'm
              <br />
              <span className="text-[#A53DFF] inline-block mt-2 animate-scale-in">Brooklyn Gilbert</span>
            </h1>
            <p className="text-base sm:text-lg text-[#697484] leading-relaxed animate-fade-in">
              I'm a Freelance <span className="text-[#132238] font-semibold">UI/UX Designer</span> and{" "}
              <span className="text-[#132238] font-semibold">Developer</span> based in London, England. 
              I strive to build immersive and beautiful web applications through 
              carefully crafted code and user-centric design.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Button 
                onClick={handleDownloadCV}
                className="bg-[#A53DFF] hover:bg-[#8431CC] transition-all duration-300 transform hover:scale-105 text-base px-6 py-5 shadow-lg group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleLinkedInClick}
                  className="rounded-full hover:bg-[#A53DFF] hover:text-white transition-all duration-300 transform hover:scale-105 h-12 w-12 shadow-md"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleEmailClick}
                  className="rounded-full hover:bg-[#A53DFF] hover:text-white transition-all duration-300 transform hover:scale-105 h-12 w-12 shadow-md"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] order-1 lg:order-2">
          <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=2000 2000w"
              className="w-full h-full object-contain rounded-[25px] transition-all duration-500 hover:scale-105 shadow-2xl"
              alt="Brooklyn Gilbert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}