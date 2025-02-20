
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, PaintBucket, Wrench, Lightbulb, Thermometer, Droplet } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "General Repairs",
    description: "From fixing leaks to repairing doors, we handle all general home repairs.",
  },
  {
    icon: PaintBucket,
    title: "Painting",
    description: "Professional interior and exterior painting services.",
  },
  {
    icon: Wrench,
    title: "Installations",
    description: "Expert installation of fixtures, appliances, and more.",
  },
  {
    icon: Lightbulb,
    title: "Electrical",
    description: "Licensed electricians for all your electrical needs.",
  },
  {
    icon: Thermometer,
    title: "HVAC",
    description: "Heating, ventilation, and air conditioning services.",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    description: "Professional plumbing repairs and installations.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Services
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            Professional Home Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            We offer a wide range of professional home repair and maintenance services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-primary transition-colors">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
