
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Simple Process
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a professional in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Service",
                description: "Select the service you need from our comprehensive list",
              },
              {
                step: "2",
                title: "Book Appointment",
                description: "Pick a convenient date and time for your service",
              },
              {
                step: "3",
                title: "Get It Fixed",
                description: "Our professional will arrive and complete the job",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix Your Home?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Book a professional handyman today and get your repairs done right.
          </p>
          <Button size="lg" variant="secondary" className="text-primary">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
