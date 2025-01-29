import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/brooklyn-gilbert",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:brooklyn.gilbert@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="w-full py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-[#9b87f5] hover:text-white transition-all duration-300 transform hover:scale-110"
                onClick={() => window.open(link.href, '_blank')}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Brooklyn Gilbert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}