import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LayoutTemplate, Server, Database, Workflow, PenTool, Lightbulb } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: LayoutTemplate,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'FastAPI']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      title: 'AI & GenAI',
      icon: Lightbulb,
      skills: ['OpenAI', 'RAG', 'Flowise', 'Prompt Engineering', 'Vector Databases', 'OpenAI Embeddings']
    },
    {
      title: 'Product & Engineering',
      icon: Workflow,
      skills: ['Agile/Scrum', 'SDLC', 'REST APIs', 'Product Workflows', 'Requirement Gathering', 'Wireframing', 'Smoke Testing', 'Acceptance Testing']
    },
    {
      title: 'Tools',
      icon: PenTool,
      skills: ['Git/GitHub', 'Jira', 'Postman', 'Figma', 'Miro', 'Google Analytics', 'Mixpanel', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="grid" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Technical Arsenal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A comprehensive overview of the tools, technologies, and methodologies I leverage to build scalable products.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="p-6 h-full glass border-gradient hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center text-teal-500 group-hover:bg-teal-500/10 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-muted/50 text-muted-foreground hover:bg-teal-500/10 hover:text-teal-500 transition-colors font-medium px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;