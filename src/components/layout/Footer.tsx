import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-tight">
            <span className="text-gradient">mike</span>
            <span className="text-foreground">dotdev</span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} mikedotdev. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
