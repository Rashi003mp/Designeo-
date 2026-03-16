import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import bannerImg from "@/assets/Banner.jpeg";
import flexprintImg from "@/assets/notice.jpeg";
import flyerImg from "@/assets/stand-up.jpeg";
import idcardImg from "@/assets/tags.jpeg";
import medals from "@/assets/portfolio-image.jpeg";
import Flexprinting from "@/assets/flex printing.jpeg"
// import medalImg from "@/assets/portfolio-medal.png";

const transition = { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const };

type Category = "all" | "print" | "web";

const projects = [
  { title: "Exhibition Banner", category: "print" as const, span: "row-span-2", image: flyerImg },
  { title: "ID Card & Lanyard", category: "print" as const, span: "", image: idcardImg },
  { title: "Promotional Flyer", category: "print" as const, span: "", image: flexprintImg },
  { title: "Medals", category: "print" as const, span: "row-span-2", image: medals },
  { title: "Flex Printing", category: "print" as const, span: "row-span-2", image:Flexprinting  },
  { title: "Vinyl Print Work", category: "print" as const, span: "", image: bannerImg },
  // { title: "Custom Medal", category: "print" as const, span: "", image: medalImg },
];

const filters: { label: string; value: Category }[] = [
  { label: "All Works", value: "all" },
  { label: "Physical Print", value: "print" },
  { label: "Web Design", value: "web" },
];

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section-padding" id="portfolio">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">Best Works</h2>
          </div>

          <div className="flex gap-0 border border-foreground/[0.08] rounded-sm overflow-hidden">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider font-display font-semibold transition-all ${
                  activeFilter === f.value
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={transition}
                className={`relative group cursor-pointer rounded-sm overflow-hidden ${project.span}`}
                style={{
                  outline: "1px solid rgba(255,255,255,0.1)",
                  outlineOffset: "-1px",
                }}
              >
                {/* Project image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/60 transition-all duration-500" />

                {/* Hover content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <span className="ink-tag-print">Print</span>
                    <h3 className="font-display text-lg font-bold text-foreground mt-3">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
