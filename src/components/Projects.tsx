import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Monitor, LayoutDashboard, Brain } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const Projects = () => {
  const projects = [
    {
      title: 'Supplier Intelligence Assistant',
      description: 'Built an AI-powered Supplier Intelligence Assistant using Flowise, OpenAI GPT-4o, and RAG to analyze supplier performance, compliance, disruption risks, and governance policies through contextual AI reasoning.',
      technologies: ['Flowise', 'OpenAI GPT-4o', 'RAG', 'FastAPI', 'Python', 'Vector Databases', 'OpenAI Embeddings'],
      category: 'Enterprise AI Solution',
      icon: Brain,
      demoLink: '#',
      codeLink: 'https://github.com/Aryanraj0105/scm-assistant-bot',
      features: [
        'Implemented hybrid retrieval using CSV analytics and PDF policy documents.',
        'Integrated OpenAI Embeddings and Vector Databases.',
        'Built intelligent question-answering workflows using RAG.',
        'Improved retrieval accuracy and response relevance.'
      ],
      badges: ['GenAI', 'RAG', 'OpenAI', 'Flowise', 'FastAPI', 'Vector Database']
    },
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
      ],
      badges: []
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
      ],
      badges: []
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="cards" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
              Showcasing enterprise AI solutions, full-stack applications, and product execution across different domains.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <FadeIn key={project.title} delay={0.1 + (index * 0.1)}>
                <Card className="group h-full overflow-hidden glass border-gradient hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                  <div className="p-8 flex-1 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-foreground group-hover:bg-teal-500/10 group-hover:text-teal-400 transition-colors border border-white/5">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground border-white/5 font-semibold">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    
                    {project.badges && project.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.badges.map(badge => (
                          <Badge key={badge} variant="outline" className="bg-teal-500/5 text-teal-400 border-teal-500/20 px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-sm md:text-base">
                      {project.description}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-bold mb-3 text-sm text-card-foreground uppercase tracking-wider">Highlights</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground font-medium">
                              <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-3 text-sm text-card-foreground uppercase tracking-wider">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="bg-background/50 border-white/10 text-muted-foreground hover:border-white/30 transition-colors font-semibold"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t border-white/5 bg-black/20 flex gap-4 mt-auto relative z-10">
                    {project.demoLink !== '#' && (
                      <Button className="flex-1 font-semibold shadow-sm hover:shadow-md transition-all bg-white/10 hover:bg-white/20 text-white border-0" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" className={`font-semibold bg-background/50 hover:bg-muted transition-colors border-white/10 ${project.demoLink === '#' ? 'w-full' : 'flex-1'}`} asChild>
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
            <Button variant="outline" size="lg" className="rounded-full px-8 shadow-sm hover:shadow-md transition-all border-teal-500/30 hover:border-teal-500 hover:bg-teal-500/5 font-bold tracking-wide" asChild>
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