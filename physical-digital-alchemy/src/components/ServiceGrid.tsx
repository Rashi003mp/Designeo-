import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Printer, Award, Code2, Layers } from "lucide-react";

const transition = { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const };

const services = [
  {
    icon: Printer,
    title: "Flex & Vinyl Printing",
    description: "High-durability large format prints engineered for maximum visual impact and weather resistance.",
    accent: "cyan" as const,
  },
  {
    icon: Layers,
    title: "Offset Works",
    description: "Precision bulk printing for business — brochures, packaging, and collateral at scale.",
    accent: "magenta" as const,
  },
  {
    icon: Award,
    title: "Mementos & Awards",
    description: "Custom-crafted trophies, plaques, and premium gifts that mark achievements with distinction.",
    accent: "magenta" as const,
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive, and SEO-optimized websites built with cutting-edge technology.",
    accent: "cyan" as const,
  },
];

const accentColors = {
  cyan: "hsl(190 100% 50%)",
  magenta: "hsl(320 100% 50%)",
};

const RegistrationMark = ({ inView }: { inView: boolean }) => (
  <motion.div
    className="registration-mark top-4 right-4"
    animate={{ rotate: inView ? 90 : 0 }}
    transition={transition}
  />
);

const ServiceGrid = () => {
  return (
    <section className="section-padding" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      className="relative group rounded-sm border border-foreground/[0.08] bg-card p-8 md:p-12 overflow-hidden cursor-pointer"
      style={{ boxShadow: "var(--shadow-layered)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...transition, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <RegistrationMark inView={inView} />

      {service.accent === "cyan" && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] leading-tight text-accent-cyan overflow-hidden p-4">
          {`const app = createApp({\n  framework: 'React',\n  styling: 'Tailwind',\n  deploy: 'edge',\n  ssr: true,\n});\n\nawait app.build();\nawait app.deploy();\n\nconsole.log('Live ✓');`.repeat(4)}
        </div>
      )}

      <div
        className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
        style={{ background: `${accentColors[service.accent]}15` }}
      >
        <Icon size={24} style={{ color: accentColors[service.accent] }} />
      </div>

      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
        {service.description}
      </p>

      <div
        className="mt-8 text-xs uppercase tracking-widest font-semibold font-display flex items-center gap-2 transition-colors group-hover:text-foreground"
        style={{ color: accentColors[service.accent] }}
      >
        Explore the Craft
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </div>
    </motion.div>
  );
};

export default ServiceGrid;
