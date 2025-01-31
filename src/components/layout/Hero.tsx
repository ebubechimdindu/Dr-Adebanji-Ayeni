import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  const handleEmailClick = () => {
    window.location.href = "mailto:adebanjiayeni@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/adebanji-ayeni-4b765643/", '_blank');
  };

  const images = [
    "/lovable-uploads/63ec6cff-4fb4-434a-b383-b80f4b17651f.png",
    "/lovable-uploads/d34350b6-7d57-48b1-9b2f-0d9c737fe9f3.png",
    "/lovable-uploads/9afd0c1c-6e0d-4000-81d2-66eff9c60d01.png",
    "/lovable-uploads/ec5cff29-6099-473c-bf8d-600089dcaee0.png"
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-20 py-12 overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 z-10">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.2] font-bold text-[#132238] animate-slide-in-right tracking-tight">
              Dr.
              <br />
              <span className="text-[#7E69AB] inline-block mt-2 animate-scale-in bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] to-[#6E59A5]">Adebanji Ayeni</span>
            </h1>
            <p className="text-base sm:text-lg text-[#697484] leading-relaxed animate-fade-in">
              I'm a <span className="text-[#132238] font-semibold">Post Doctoral Fellow</span> at North-West University and{" "}
              <span className="text-[#132238] font-semibold">Lecturer</span> at Wigwe University with over 9 years of experience in academia. 
              My research focuses on informal entrepreneurship, business administration, and ICT in education.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in">
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleLinkedInClick}
                  className="rounded-full hover:bg-[#7E69AB] hover:text-white transition-all duration-500 transform hover:scale-105 h-14 w-14 shadow-md border-2"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleEmailClick}
                  className="rounded-full hover:bg-[#7E69AB] hover:text-white transition-all duration-500 transform hover:scale-105 h-14 w-14 shadow-md border-2"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative w-full min-h-[400px] lg:min-h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
            <div className="relative w-full h-full">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#E5DEFF] rounded-full filter blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#D6BCFA] rounded-full filter blur-3xl opacity-30 animate-pulse" />
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt={`Dr. Adebanji Ayeni - Image ${index + 1}`}
                        className="w-full h-[500px] object-cover rounded-[30px] transition-all duration-500 hover:scale-105 shadow-2xl relative z-10"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}