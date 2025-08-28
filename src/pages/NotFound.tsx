import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        {/* 404 Number */}
        <div className="text-8xl md:text-9xl font-bold text-primary/20">
          404
        </div>
        
        {/* Error Message */}
        <div className="space-y-2">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild className="bg-gradient-hero hover:shadow-glow transition-smooth">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        
        {/* Additional Info */}
        <p className="text-sm text-muted-foreground mt-8">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
