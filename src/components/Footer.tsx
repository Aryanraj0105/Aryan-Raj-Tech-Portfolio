import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aryanraj0105/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aryan-raj-arm0105', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:aryanraj190223@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold text-lg">AR</span>
              </div>
              <span className="font-semibold text-xl tracking-tight">Aryan Raj</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              AI Engineer and Full-Stack Developer passionate about building intelligent applications, ERP solutions, scalable software, and AI-powered systems that solve real-world business challenges.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button 
                    key={social.label} 
                    variant="outline" 
                    size="icon"
                    className="h-10 w-10 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <Icon size={18} />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-6 text-foreground">Navigation</h3>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-6 text-foreground">Contact</h3>
            <div className="space-y-4 text-muted-foreground">
              <a href="mailto:aryanraj190223@gmail.com" className="block hover:text-foreground transition-colors">
                aryanraj190223@gmail.com
              </a>
              <a href="tel:+918709751968" className="block hover:text-foreground transition-colors">
                +91 87097 51968
              </a>
              <p>Chandigarh, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Aryan Raj. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Button
              variant="secondary"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full shadow-sm hover:scale-105 transition-transform"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;