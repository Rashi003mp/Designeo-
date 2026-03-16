import { MapPin, Phone, ExternalLink,  Instagram, Facebook, Linkedin } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mapUrl = "https://maps.app.goo.gl/e83Fua1B8qWAsYC29";

  return (
    <footer className="relative border-t border-foreground/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-black uppercase tracking-tighter text-[#dbfe43]">
              DESIGNEO
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Premium Advertising & Printing Agency delivering high-impact visual solutions from Kerala to the world.
            </p>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/50">Contact Us</h3>
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 transition-colors hover:text-[#dbfe43]"
            >
              <MapPin className="w-5 h-5 text-[#dbfe43] shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-foreground group-hover:text-[#dbfe43]">KK TOWER</p>
                <p className="text-muted-foreground">Puzhakkattiri, Kerala 679321, India</p>
                <span className="text-[10px] text-[#dbfe43] flex items-center gap-1 mt-1 font-bold">
                  VIEW ON MAP <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
            
            <a href="tel:+971556347379" className="flex items-center gap-3 text-sm hover:text-[#dbfe43] transition-colors">
              <Phone className="w-4 h-4" />
              <span>+971 55 634 7379</span>
            </a>
          </div>

          {/* Social / Quick Links (Placeholder for growth) */}
          <div className="flex flex-col md:items-end space-y-5">
  <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/50">Connect</h3>
  <div className="flex gap-5">
    {/* Instagram */}
    <a 
      href="https://www.instagram.com/p/DVanJ_5DxMF/?utm_source=ig_web_copy_link" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-foreground/10 hover:border-[#dbfe43] hover:text-[#dbfe43] transition-all duration-300 group"
    >
      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>

    {/* Facebook */}
    <a 
      href="https://facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-foreground/10 hover:border-[#dbfe43] hover:text-[#dbfe43] transition-all duration-300 group"
    >
      <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>

    {/* LinkedIn */}
    {/* <a 
      href="https://linkedin.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-foreground/10 hover:border-[#dbfe43] hover:text-[#dbfe43] transition-all duration-300 group"
    >
      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a> */}
  </div>
</div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {currentYear} Designeo. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
            Crafted for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;