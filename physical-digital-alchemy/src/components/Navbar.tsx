import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/[0.08] bg-background/80 backdrop-blur-xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg font-bold text-foreground tracking-tight">
          DESIGNEO
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors font-display font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="glass-button !px-5 !py-2 font-display font-semibold text-foreground text-xs uppercase tracking-wider">
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-foreground/[0.08] bg-background"
        >
          <div className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors font-display font-semibold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
