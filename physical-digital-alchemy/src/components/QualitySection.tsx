import { motion } from "framer-motion";
import { Shield, RefreshCw, Gem } from "lucide-react";

const transition = { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const };

const promises = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "We source only the highest-grade substrates, inks, and finishes — ensuring every print is museum-quality.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "UV-resistant inks, weatherproof laminates, and server-grade hosting. Our work endures.",
  },
  {
    icon: RefreshCw,
    title: "Post-Delivery Support",
    description: "Our relationship doesn't end at delivery. We provide ongoing maintenance and support for every project.",
  },
];

const QualitySection = () => {
  return (
    <section className="section-padding border-t border-foreground/[0.08]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Our Promise</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Quality &<br />Maintenance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.1 }}
                className="border-t border-foreground/[0.08] pt-8"
              >
                <Icon size={24} className="text-accent-cyan mb-6" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
