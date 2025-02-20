
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center slide-up">
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Professional Home Services
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Expert Home Repairs & Maintenance Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Professional, reliable, and trusted handyman services for all your home repair needs.
            Book skilled professionals in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Book a Service
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
