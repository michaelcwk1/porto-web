import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "FinTech Dashboard",
    problem: "Complex financial data causing user drop-off",
    solution: "Simplified data visualization with intuitive navigation",
    result: "+180% user engagement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    problem: "Cart abandonment rate at 78%",
    solution: "Streamlined checkout with trust signals",
    result: "-45% cart abandonment",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
  {
    title: "SaaS Landing Page",
    problem: "Low trial sign-up conversion",
    solution: "Value-driven messaging with clear CTAs",
    result: "+320% sign-up rate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
  {
    title: "Healthcare Portal",
    problem: "Patients struggling to book appointments",
    solution: "Mobile-first booking flow redesign",
    result: "+95% booking completion",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    liveUrl: "#",
  },
];

export function Portfolio() {
  const { ref, inView } = useScrollReveal();

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Projects That Delivered Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each project tells a story of transformation and measurable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-2xl overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Glow border on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 rounded-t-2xl" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-muted-foreground text-sm">Problem:</span>
                    <p className="text-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Solution:</span>
                    <p className="text-foreground">{project.solution}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground text-sm">Result:</span>
                    <span className="text-primary font-bold">{project.result}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="glass"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    onClick={scrollToContact}
                  >
                    Request Similar
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
