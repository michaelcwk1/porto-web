import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Building2, Package, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Landing Pages",
    outcome: "Convert traffic into customers",
    description: "High-impact pages designed to capture leads and drive action.",
  },
  {
    icon: Building2,
    title: "Company Websites",
    outcome: "Build brand trust & authority",
    description: "Professional web presence that establishes credibility.",
  },
  {
    icon: Package,
    title: "Product Showcases",
    outcome: "Increase engagement & retention",
    description: "Compelling product presentations that sell.",
  },
  {
    icon: RefreshCw,
    title: "Redesign & Optimization",
    outcome: "Boost performance & conversions",
    description: "Transform underperforming sites into growth engines.",
  },
];

export function Services() {
  const { ref, inView } = useScrollReveal();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Solutions That Drive Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every service is focused on delivering measurable outcomes for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 card-hover glow-hover"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-primary font-semibold mb-3">{service.outcome}</p>
                  <p className="text-muted-foreground mb-5">{service.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn text-primary hover:text-primary p-0 h-auto"
                    onClick={scrollToContact}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
