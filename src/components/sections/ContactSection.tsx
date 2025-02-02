import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:adebanjiayeni@gmail.com";
    toast.success("Opening email client...");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/adebanji-ayeni-4b765643/", '_blank');
    toast.success("Opening LinkedIn profile...");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 text-center">
          Contact Me
        </h2>
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 shadow-lg">
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out for collaborations, research opportunities, or academic inquiries.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-2 bg-[#7E69AB] hover:bg-[#6E59A5] transition-all duration-300"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Button>
            
            <Button
              onClick={handleLinkedInClick}
              variant="outline"
              className="flex items-center justify-center gap-2 border-2 hover:bg-[#7E69AB] hover:text-white transition-all duration-300"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}