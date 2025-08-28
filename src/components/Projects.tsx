import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Zudo Campus',
      description: 'A comprehensive campus management platform designed to streamline academic and administrative processes. Features include student management, course scheduling, grade tracking, and real-time communication between students, faculty, and administration.',
      image: '/placeholder-project-1.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'MongoDB', 'Tailwind CSS'],
      category: 'Web Application',
      icon: Smartphone,
      demoLink: '#',
      codeLink: '#',
      features: [
        'Student & Faculty Management',
        'Course Scheduling System',
        'Real-time Notifications',
        'Grade Management',
        'Responsive Design'
      ]
    },
    {
      title: 'Place Report Generator',
      description: 'An automated system for generating comprehensive placement reports with analytics and insights. The system processes placement data, generates visual reports, and provides detailed analytics for career services departments.',
      image: '/placeholder-project-2.jpg',
      technologies: ['php', 'JavaScript', 'tailwind', 'Sql', 'Express.js'],
      category: 'Data Analytics',
      icon: FileText,
      demoLink: '#',
      codeLink: '#',
      features: [
        'Automated Report Generation',
        'Data Visualization',
        'Statistical Analysis',
        'Export Functionality',
        'Interactive Dashboards'
      ]
    },
    {
      title: 'IoT Security Framework',
      description: 'A novel integrated framework for IoT safety combining adaptive AI alerts, zero-trust architecture, and quantum-resistant cryptography to enhance security in connected devices and smart systems.',
      image: '/placeholder-project-3.jpg',
      technologies: ['Python', 'IoT Protocols', 'Machine Learning', 'Cryptography', 'Blockchain'],
      category: 'Research Project',
      icon: Smartphone,
      demoLink: '#',
      codeLink: '#',
      features: [
        'AI-Powered Threat Detection',
        'Zero-Trust Security Model',
        'Quantum-Resistant Encryption',
        'Real-time Monitoring',
        'Scalable Architecture'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore some of my notable projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} className="group overflow-hidden hover-lift transition-smooth">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon className="h-16 w-16 text-primary/60" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                </div>

                <div className="p-6">
                  {/* Project Category */}
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>

                  {/* Project Title */}
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-fast">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs border-primary/30 hover:bg-primary hover:text-primary-foreground transition-fast"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift transition-smooth">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;