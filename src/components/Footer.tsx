import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aryanraj0105/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aryan-raj-arm0105', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:aryanraj190223@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#research', label: 'Research' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AR</span>
              </div>
              <span className="font-heading font-bold text-xl">Aryan Raj</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Computer Science & Engineering student passionate about creating innovative 
              solutions and conducting cutting-edge research in technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button 
                    key={social.label} 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon size={18} />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-fast py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 aryanraj190223@gmail.com</p>
              <p>📱 +91 87097 51968 </p>
              <p>📍 Chandigarh, India</p>
              <p>🎓 Chandigarh Engineering College</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Aryan Raj. Made {' '}
            {/* <Heart className="inline h-4 w-4 text-red-500 mx-1" /> */}
            using React & Tailwind CSS
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-muted-foreground text-sm">
              Last updated: August 2025
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;