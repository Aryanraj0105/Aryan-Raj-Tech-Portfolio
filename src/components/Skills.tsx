import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-blue-500',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 60 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      color: 'text-green-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Node.js', level: 60 },
        { name: 'API Development', level: 60 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'text-purple-500',
      skills: [
        { name: 'Java', level: 70 },
        { name: 'C++', level: 85 },
        { name: 'Python', level: 75 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'text-orange-500',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Excel', level: 80 }
      ]
    }
  ];

  const technologies = [
    'React', 'JavaScript', 'Java', 'C++', 'MySQL', 'MongoDB',
    'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Node.js',
    'Git', 'GitHub', 'VS Code', 'Figma', 'Python'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="p-8 hover-lift transition-smooth bg-gradient-card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <Card className="p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-semibold">Technology Stack</h3>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Technologies I work with regularly
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default hover-lift"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;