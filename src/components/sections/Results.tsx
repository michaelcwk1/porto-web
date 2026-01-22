import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    metric: "+3x",
    label: "Conversion Rate",
    description: "Higher visitor-to-lead conversion through strategic design",
  },
  {
    icon: Users,
    metric: "+60%",
    label: "Lead Growth",
    description: "More qualified leads from optimized user journeys",
  },
  {
    icon: Zap,
    metric: "2s",
    label: "Load Time",
    description: "Lightning-fast performance for better engagement",
  },
  {
    icon: Shield,
    metric: "94%",
    label: "Trust Score",
    description: "Increased credibility through professional presence",
  },
];

export function Results() {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="results" className="py-24 lg:py-32 relative">
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
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Real Impact, Real Numbers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project is designed to deliver measurable business outcomes.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-2xl p-6 card-hover glow-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                <result.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {result.metric}
              </div>
              <div className="text-foreground font-semibold mb-2">
                {result.label}
              </div>
              <p className="text-muted-foreground text-sm">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
