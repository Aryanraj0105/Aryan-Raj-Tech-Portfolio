import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Monitor, LayoutDashboard } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const Projects = () => {
  const projects = [
    {
      title: 'ZudoCampus',
      description: 'A comprehensive student-focused digital ecosystem platform. Optimized navigation and implemented KPI-based workflow improvements for enhanced user engagement.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      category: 'Digital Ecosystem Platform',
      icon: Monitor,
      demoLink: '#',
      codeLink: '#',
      features: [
        'Event Management System',
        'Tutor Marketplace',
        'Second-Hand Marketplace',
        'Cafe Booking System',
        'KPI-Based Workflow Improvements'
      ]
    },
    {
      title: 'EduFlow ERP',
      description: 'An enterprise resource planning platform tailored for schools and colleges. Built with a scalable multi-module architecture to automate administrative tasks.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js'],
      category: 'ERP Platform',
      icon: LayoutDashboard,
      demoLink: '#',
      codeLink: '#',
      features: [
        'Multi-Module Architecture',
        'Comprehensive Dashboard Systems',
        'Attendance Automation',
        'Notice Management',
        'Role-Based Permission Systems'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="cards" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Showcasing full-stack applications and product execution across different domains.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 max-w-[1400px] mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={index * 0.2}>
                <Card className="group overflow-hidden glass border-gradient hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                  <div className="p-8 flex-1 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:bg-teal-500/20 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-teal-500 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-semibold mb-3 text-sm text-card-foreground uppercase tracking-wider">Core Features</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-sm text-card-foreground uppercase tracking-wider">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="bg-background/50 border-border/50 text-muted-foreground hover:border-teal-500/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t border-white/5 bg-black/20 flex gap-4 mt-auto relative z-10">
                    <Button className="flex-1 shadow-sm hover:shadow-md transition-all bg-teal-500 hover:bg-teal-600 text-white border-0" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-background/50 hover:bg-muted transition-colors" asChild>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4} direction="up">
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="rounded-full px-8 shadow-sm hover:shadow-md transition-all border-teal-500/30 hover:border-teal-500 hover:bg-teal-500/5" asChild>
              <a href="https://github.com/Aryanraj0105/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View All on GitHub
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;