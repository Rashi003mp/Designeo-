import { motion } from "framer-motion";

const transition = { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const };

const HeroSection = () => {
  return (
    <section className="relative min-h-[90svh] flex items-center overflow-hidden">
      {/* Registration marks */}
      <div className="registration-mark top-8 left-8" />
      <div className="registration-mark top-8 right-8" />
      <div className="registration-mark bottom-8 left-8" />
      <div className="registration-mark bottom-8 right-8" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6 font-body">
              Premium Advertising Agency
            </p>
            <h1
              className="font-display font-900 leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              <span className="block text-foreground">PHYSICAL</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
          >
            <h1
              className="font-display font-900 leading-[0.9]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              <span
                className="block text-outline animate-gradient-sweep"
                style={{
                  backgroundSize: "200% 200%",
                  background: "linear-gradient(135deg, hsl(190 100% 50%), hsl(320 100% 50%), hsl(220 100% 55%), hsl(190 100% 50%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitTextStroke: "0px",
                }}
              >
                DIGITAL
              </span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.6 }}
        >
          <a href="#contact" className="glass-button font-display font-semibold text-foreground text-sm uppercase tracking-wider">
            Get a Quote
          </a>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed font-body">
            From Physical Prints to Digital Presence — We bridge the gap between the weight of paper and the speed of light.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-24 grid grid-cols-3 gap-8 border-t border-foreground/10 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.8 }}
        >
          {[
            { value: "2,400+", label: "DPI Precision" },
            { value: "99.9%", label: "Uptime" },
            { value: "100%", label: "Craft" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl md:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
