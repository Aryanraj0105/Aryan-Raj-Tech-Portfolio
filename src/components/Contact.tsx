import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send, FileText, Eye } from 'lucide-react';
import { useState } from 'react';
import ResumeModal from './ResumeModal';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const Contact = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

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
    <section id="contact" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="neutral" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Ready to collaborate, discuss opportunities, or just have a conversation about technology?
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-12 max-w-[1400px] mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn direction="right">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in discussing new opportunities, product execution, 
                  or innovative full-stack projects.
                </p>
              </div>
            </FadeIn>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <FadeIn key={info.label} delay={index * 0.1} direction="right">
                    <Card 
                      className="p-4 glass border-gradient hover:shadow-md hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 group"
                      >
                        <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                          <Icon className="h-5 w-5 text-teal-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-card-foreground group-hover:text-teal-500 transition-colors">
                            {info.label}
                          </p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </Card>
                  </FadeIn>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <FadeIn key={social.label} delay={0.3 + (index * 0.1)} direction="right">
                    <Card 
                      className="p-4 glass border-gradient hover:shadow-md hover:scale-[1.05] transition-all duration-300 h-full group"
                    >
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center space-y-2 group"
                      >
                        <Icon className="h-6 w-6 text-muted-foreground group-hover:text-teal-500 transition-colors" />
                        <div>
                          <p className="font-medium text-sm text-card-foreground group-hover:text-teal-500 transition-colors">
                            {social.label}
                          </p>
                          <p className="text-xs text-muted-foreground">{social.username}</p>
                        </div>
                      </a>
                    </Card>
                  </FadeIn>
                );
              })}
            </div>

            {/* View Resume CTA */}
            <FadeIn delay={0.5} direction="up">
              <Card className="p-6 glass border-gradient shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1 text-card-foreground">
                      Detailed Overview
                    </h4>
                    <p className="mb-4 text-sm text-muted-foreground">
                      View my comprehensive resume for a deep dive into my experience.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full bg-background hover:bg-teal-500/5 hover:text-teal-500 hover:border-teal-500/50 transition-colors"
                      onClick={() => setIsResumeModalOpen(true)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview Resume
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" delay={0.2}>
              <Card className="p-8 glass border-gradient shadow-xl h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full -z-10"></div>
                <h3 className="text-2xl font-bold mb-6 text-foreground relative z-10">Send a Message</h3>
                
                <form 
                  className="space-y-6 relative z-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name') as string;
                    const email = formData.get('email') as string;
                    const subject = formData.get('subject') as string;
                    const message = formData.get('message') as string;

                    const mailtoLink = `mailto:aryanraj190223@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                    window.location.href = mailtoLink;
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-muted-foreground">Name</Label>
                      <Input id="name" name="name" required placeholder="Your full name" className="bg-background/50 border-border/50 focus:border-teal-500/50 focus:ring-teal-500/20 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="your.email@example.com" className="bg-background/50 border-border/50 focus:border-teal-500/50 focus:ring-teal-500/20 transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-muted-foreground">Subject</Label>
                    <Input id="subject" name="subject" required placeholder="What's this about?" className="bg-background/50 border-border/50 focus:border-teal-500/50 focus:ring-teal-500/20 transition-all" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required
                      placeholder="Tell me more about your project or inquiry..."
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-teal-500/50 focus:ring-teal-500/20 transition-all resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-sm hover:shadow-md transition-all bg-teal-500 hover:bg-teal-600 text-white border-0 group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </section>
  );
};

export default Contact;
