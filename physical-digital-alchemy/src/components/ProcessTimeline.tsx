import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Pencil, PenTool, Zap } from "lucide-react";

const transition = { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const };

const steps = [
  {
    icon: Pencil,
    title: "Concept",
    description: "Every masterpiece begins with a sketch. We listen, research, and conceptualize ideas that align with your brand's DNA.",
  },
  {
    icon: PenTool,
    title: "Refinement",
    description: "Raw ideas are sculpted into precise vector paths. Every curve, every color, every pixel is deliberate and intentional.",
  },
  {
    icon: Zap,
    title: "Output",
    description: "From the press to the server — your project is delivered with the precision of print and the speed of digital.",
  },
];

const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-padding" id="process">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-24 text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">How We Work</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">The Process</h2>
        </motion.div>

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Background line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />

          {/* Animated print head */}
          <motion.div
            className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top"
            style={{
              height: lineHeight,
              background: "hsl(190 100% 50%)",
              boxShadow: "0 0 12px hsl(190 100% 50% / 0.5)",
            }}
          />

          <div className="space-y-32">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  className={`relative flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ ...transition, delay: 0.1 }}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-accent-cyan bg-background z-10" />

                  <div className={`w-1/2 ${isLeft ? "pr-16 text-right" : "pl-16 text-left"}`}>
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-sm mb-4 ${
                        isLeft ? "ml-auto" : "mr-auto"
                      }`}
                      style={{ background: "hsl(190 100% 50% / 0.1)" }}
                    >
                      <Icon size={24} className="text-accent-cyan" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
