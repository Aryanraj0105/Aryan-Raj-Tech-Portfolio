import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = ['about', 'skills', 'projects', 'research', 'contributions', 'experience', 'certifications', 'achievements', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contributions', label: 'Contributions', id: 'contributions' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#certifications', label: 'Certifications', id: 'certifications' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/Aryanraj0105/', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/aryan-raj-arm0105', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'glass shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/My_Photos/arlogo.png"
            alt="AR Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain scale-[1.3] group-hover:scale-[1.4] transition-transform duration-300 origin-left"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3 border border-border/50 rounded-full px-8 py-2.5 bg-background/50 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-5 py-2.5 rounded-full text-lg font-medium transition-colors duration-200 ${
                activeSection === item.id 
                  ? 'bg-foreground/10 text-foreground' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button key={social.label} variant="ghost" size="icon" className="h-12 w-12 text-muted-foreground hover:text-foreground" asChild>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <Icon size={24} />
                </a>
              </Button>
            );
          })}
          <div className="w-[2px] h-6 bg-border mx-2"></div>
          <ThemeToggle />
          <Button size="lg" className="ml-4 text-base px-6 py-6 rounded-full font-medium shadow-sm transition-transform hover:scale-105" asChild>
             <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-lg absolute w-full animate-fade-in">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-4 pt-6 px-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={social.label} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon size={24} />
                    </a>
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
