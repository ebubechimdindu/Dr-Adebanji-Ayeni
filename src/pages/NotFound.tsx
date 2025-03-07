import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center space-y-6">
        <FileQuestion className="w-24 h-24 text-muted-foreground mx-auto" />
        
        <h1 className="text-4xl font-bold text-foreground sm:text-6xl">404</h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">Page not found</h2>
          <p className="text-muted-foreground max-w-md">
            Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
          </p>
        </div>

        <Button 
          onClick={() => navigate("/")}
          size="lg"
          className="mt-8"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;