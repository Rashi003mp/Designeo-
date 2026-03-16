import { motion, AnimatePresence } from "framer-motion";
import { FormEvent, useState } from "react";
import { Mail, MessageCircle, X, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const transition = { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const };

const ContactHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const { error } = (await res.json()) as { error?: string };
        throw new Error(error ?? "Unable to send message");
      }

      toast({
        title: "Message sent",
        description: "We received your message and will get back to you soon.",
      });

      setName("");
      setEmail("");
      setMessage("");
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Couldn’t send message",
        description: (error as Error).message || "Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Main contact section */}
      <section className="section-padding border-t border-foreground/[0.08]" id="contact">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="max-w-2xl"
          >
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8">
              Let's Build<br />Something
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-md">
              Whether it's a billboard or a website, we're ready to bring your vision to life with precision and craft.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@designeo.agency?subject=Project%20Inquiry&body=Hi%20Designeo%2C%0A%0AI'm%20interested%20in%20discussing%20a%20project.%0A%0ABest%20regards"
                className="glass-button font-display font-semibold text-foreground text-sm uppercase tracking-wider inline-flex items-center gap-2"
              >
                <Mail size={16} /> Mail Us
              </a>
              <a
                href="https://wa.me/1234567890?text=Hi%20Designeo%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button font-display font-semibold text-foreground text-sm uppercase tracking-wider inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating contact form toggle */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-sm flex items-center justify-center border border-foreground/10 bg-card backdrop-blur-md shadow-lg"
        style={{ boxShadow: "var(--shadow-layered)" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} className="text-foreground" /> : <Send size={20} className="text-accent-cyan" />}
      </motion.button>

      {/* Floating form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={transition}
            className="fixed bottom-24 right-6 z-50 w-[340px] md:w-[380px] border border-foreground/[0.08] bg-card/95 backdrop-blur-xl rounded-sm p-8"
            style={{ boxShadow: "var(--shadow-layered)" }}
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-6">Quick Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-foreground/10 pb-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-blue focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b-2 border-foreground/10 pb-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-blue focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project"
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-foreground/10 pb-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent-blue focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="glass-button w-full font-display font-semibold text-foreground text-sm uppercase tracking-wider disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactHub;
