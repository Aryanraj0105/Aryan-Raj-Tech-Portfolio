import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#research', label: 'Research' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/Aryanraj0105/', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/aryan-raj-arm0105', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:aryanraj190223@gmail.com', icon: Mail, label: 'Email' },
    { href: 'tel:+918709751968', icon: Phone, label: 'Phone' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-custom' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">AR</span>
          </div>
          <span className="font-heading font-bold text-xl">Aryan Raj</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-fast font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Links & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-3">
          {socialLinks.slice(0, 2).map((social) => {
            const Icon = social.icon;
            return (
              <Button key={social.label} variant="ghost" size="sm" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <Icon size={18} />
                </a>
              </Button>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-fast font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-3 pt-4 border-t border-border">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button key={social.label} variant="ghost" size="sm" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon size={18} />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;