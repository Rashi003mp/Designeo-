import { motion } from "framer-motion";

const marqueeText = "DESIGNEO Premium Advertising & PRINTING Agency";
const separator = " ✦ ";
// Increased repeat count slightly to ensure no gaps on very large screens
const repeated = Array(10).fill(marqueeText + separator).join("");

const MarqueeSection = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-white/10 bg-black">
      <div className="flex gap-0">
        <motion.div
          className="flex shrink-0 whitespace-nowrap"
          // Moving to -50% ensures a seamless loop with the duplicated span
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 100, // Increased from 20 to 40 for a slower, smoother crawl
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* Using your requested color #dbfe43 and increasing font size */}
          <span className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#dbfe43]">
            {repeated}
          </span>
          <span className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#dbfe43]">
            {repeated}
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;