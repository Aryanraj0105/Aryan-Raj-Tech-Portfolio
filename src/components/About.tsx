import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Rocket, Users, Target, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const About = () => {
  const philosophies = [
    {
      icon: Target,
      title: 'AI Engineering',
      description: 'Building intelligent applications using Machine Learning, Generative AI, and modern AI frameworks to solve real-world problems through practical, production-ready solutions.'
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Experienced in designing and developing responsive web applications using modern frontend and backend technologies with a strong focus on scalability, performance, and clean architecture.'
    },
    {
      icon: Users,
      title: 'Software Engineering',
      description: 'Passionate about writing maintainable code, implementing best practices, collaborating on projects, and delivering reliable software through testing, debugging, and continuous improvement.'
    },
    {
      icon: Rocket,
      title: 'Research & Innovation',
      description: 'Interested in exploring emerging AI technologies, intelligent automation, and innovative software solutions that bridge research with practical industry applications.'
    }
  ];

  const focusAreas = [
    'Artificial Intelligence', 'Full-Stack Development', 'ERP Solutions',
    'Software Testing', 'REST APIs', 'System Design', 'Database Design', 'Problem Solving', 'Research & Innovation'
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="neutral" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              I am an aspiring AI Engineer and Full-Stack Developer with hands-on experience in building intelligent applications, ERP solutions, and scalable web platforms. I enjoy solving real-world problems through AI, modern software engineering, and continuous learning while creating impactful technology that delivers value.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 max-w-[1400px] mx-auto">
          {/* Engineering Philosophy */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {philosophies.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="p-6 h-full glass border-gradient hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors relative z-10">
                      <Icon className="h-6 w-6 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                      {item.description}
                    </p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>

          {/* Quick Facts & Focus Areas */}
          <div className="lg:col-span-4 space-y-6">
            <FadeIn delay={0.2} direction="left">
              <Card className="p-6 glass border-gradient shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground border-b border-white/5 pb-2 relative z-10">
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {focusAreas.map((area) => (
                    <Badge 
                      key={area} 
                      variant="secondary" 
                      className="px-3 py-1.5 text-xs font-medium hover:bg-teal-500/20 hover:text-teal-500 transition-colors"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              <Card className="p-6 glass border-gradient shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground border-b border-white/5 pb-2 relative z-10">
                  Development Workflow
                </h3>
                <ul className="space-y-3 relative z-10">
                  {['Requirement Analysis', 'Solution Design', 'Development', 'Testing & Debugging', 'Deployment & Optimization'].map((step, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground group">
                      <CheckCircle2 className="h-4 w-4 text-teal-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      {step}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;