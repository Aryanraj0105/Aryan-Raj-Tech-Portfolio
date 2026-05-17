import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layers, Rocket, Users, Target, CheckCircle2 } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const About = () => {
  const philosophies = [
    {
      icon: Target,
      title: 'Product-Oriented Engineering',
      description: 'Building features that solve real user problems. I focus on the "why" before the "how" to ensure technical execution aligns with business goals.'
    },
    {
      icon: Layers,
      title: 'Full-Stack Execution',
      description: 'From designing scalable databases to crafting pixel-perfect UI components, I handle the entire development lifecycle with a systems-thinking approach.'
    },
    {
      icon: Users,
      title: 'Cross-Functional Collaboration',
      description: 'Experienced in translating business requirements into technical architectures and working seamlessly with design, marketing, and leadership teams.'
    },
    {
      icon: Rocket,
      title: 'Workflow Optimization',
      description: 'Passionate about improving team efficiency through automated pipelines, robust testing, and clear requirement gathering.'
    }
  ];

  const focusAreas = [
    'Front-End Engineering', 'Full-Stack Development', 'Requirement Gathering',
    'System Architecture', 'Agile/Scrum', 'UI/UX Implementation', 'API Design', 'Performance Optimization'
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
              I am a Technical Product-Oriented Engineer with a strong foundation in full-stack development. 
              My approach to engineering goes beyond writing clean code—I aim to understand the product vision, 
              optimize workflows, and deliver impactful digital experiences that users love.
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
                  Core Focus Areas
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
                  The Engineering Process
                </h3>
                <ul className="space-y-3 relative z-10">
                  {['Requirement Analysis', 'Architecture Design', 'Iterative Development', 'Rigorous Testing', 'Continuous Deployment'].map((step, i) => (
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