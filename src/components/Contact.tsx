import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aryanraj190223@gmail.com',
      href: 'mailto:aryanraj190223@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8709751968',
      href: 'tel:+918709751968'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Aryanraj0105/',
      username: '@Aryanraj0105'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aryan-raj-arm0105',
      username: 'Aryan Raj'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, discuss opportunities, or just have a conversation about technology?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, research collaborations, 
                or innovative projects. Feel free to reach out if you'd like to connect!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.label} 
                    className="p-6 hover-lift transition-smooth bg-white dark:bg-gray-900 border border-border"
                  >
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-fast">
                          {info.label}
                        </p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Card 
                      key={social.label} 
                      className="p-4 hover-lift transition-smooth bg-white dark:bg-gray-900 border border-border"
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 group"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm group-hover:text-primary transition-fast">
                            {social.label}
                          </p>
                          <p className="text-xs text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Download CV */}
            <Card className="p-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white dark:from-orange-600 dark:to-orange-700">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3">
                  Interested in my background?
                </h4>
                <p className="mb-4 text-sm">
                  Download my detailed resume for a comprehensive overview
                </p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white dark:bg-gray-900 border border-border">
            <h3 className="text-2xl font-heading font-semibold mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me more about your project or inquiry..."
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-purple-500 hover:shadow-glow transition-smooth text-white">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
