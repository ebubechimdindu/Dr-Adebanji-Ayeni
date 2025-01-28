import { Download, Linkedin, Mail, Github, Twitter } from "lucide-react";
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
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-20 pt-32 pb-48 overflow-hidden bg-gradient-to-b from-white to-purple-50/30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="z-10 flex flex-col max-w-2xl order-2 lg:order-1">
          <div className="space-y-8">
            <h1 
              className="text-4xl sm:text-5xl lg:text-7xl leading-[1.2] font-bold text-[#132238] tracking-tight opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
              style={{ animationDelay: '0.2s' }}
            >
              Hello, I'm
              <br />
              <span 
                className="text-[#9b87f5] inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] opacity-0 animate-[scale-in_0.5s_ease-out_forwards]"
                style={{ animationDelay: '0.4s' }}
              >
                Brooklyn Gilbert
              </span>
            </h1>
            <p 
              className="text-base sm:text-lg text-[#697484] leading-relaxed opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
              style={{ animationDelay: '0.6s' }}
            >
              I'm a Freelance <span className="text-[#132238] font-semibold">UI/UX Designer</span> and{" "}
              <span className="text-[#132238] font-semibold">Developer</span> based in London, England. 
              I strive to build immersive and beautiful web applications through 
              carefully crafted code and user-centric design.
            </p>
            <div 
              className="flex flex-wrap gap-6 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
              style={{ animationDelay: '0.8s' }}
            >
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8b77e5] hover:to-[#6E59A5] transition-all duration-500 transform hover:scale-105 text-base px-8 py-6 shadow-lg group rounded-full"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleLinkedInClick}
                  className="rounded-full hover:bg-[#9b87f5] hover:text-white transition-all duration-500 transform hover:scale-105 h-14 w-14 shadow-md border-2"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleEmailClick}
                  className="rounded-full hover:bg-[#9b87f5] hover:text-white transition-all duration-500 transform hover:scale-105 h-14 w-14 shadow-md border-2"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] order-1 lg:order-2 opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
          style={{ animationDelay: '1s' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#E5DEFF] rounded-full filter blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#D6BCFA] rounded-full filter blur-3xl opacity-30 animate-pulse" />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=2000 2000w"
                className="w-full h-full object-contain rounded-[30px] transition-all duration-500 hover:scale-105 shadow-2xl relative z-10"
                alt="Brooklyn Gilbert"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer with social links */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/30 backdrop-blur-lg border-t border-purple-100/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center gap-6 items-center opacity-0 animate-[fade-in_0.5s_ease-out_forwards]" style={{ animationDelay: '1.2s' }}>
            <a 
              href="https://github.com/brooklyn-gilbert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#9b87f5] transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/brooklyn-gilbert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#9b87f5] transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com/brooklyn_gilbert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#9b87f5] transition-all duration-300 transform hover:scale-110"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="mailto:brooklyn.gilbert@example.com"
              className="text-gray-600 hover:text-[#9b87f5] transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}