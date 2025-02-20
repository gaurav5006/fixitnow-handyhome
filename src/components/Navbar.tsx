
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-semibold">FixItNow</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#professionals" className="hover:text-primary transition-colors">Professionals</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button className="hidden md:flex items-center gap-2">
          <Phone size={18} />
          <span>Book Now</span>
        </Button>
      </div>
    </nav>
  );
};
