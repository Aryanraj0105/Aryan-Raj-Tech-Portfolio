import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Code, Monitor, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Makes360',
      role: 'Team Lead for Tech and Non-Tech Teams',
      position: 'Director of the Training Program',
      duration: 'September 2024 - June 2025',
      location: 'Chandigarh',
      type: 'Leadership',
      description: 'Leading cross-functional teams and directing comprehensive training programs for technical and non-technical development.',
      highlights: [
        'Lead both technical and non-technical teams',
        'Design and execute training programs',
        'Manage team coordination and development',
        'Oversee program structure and delivery'
      ],
      skills: ['Team Leadership', 'Program Management', 'Training Design', 'Cross-functional Coordination'],
      icon: Users,
      color: 'bg-blue-500/10 text-blue-700 border-blue-500/30'
    },
    {
      company: 'Innocrede Solutions',
      role: 'Front-End Developer & Project/Product Manager',
      position: 'Client-Facing Representative',
      duration: 'April 2024 - Present',
      location: 'Chandigarh',
      type: 'Technical',
      description: 'Managing frontend development projects while serving as the primary client contact for project delivery and requirements.',
      highlights: [
        'Develop responsive user interfaces',
        'Manage client relationships and communications',
        'Oversee project timelines and deliverables',
        'Bridge technical and business requirements'
      ],
      skills: ['Frontend Development', 'Project Management', 'Client Relations', 'UI/UX Design'],
      icon: Code,
      color: 'bg-green-500/10 text-green-700 border-green-500/30'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Internship & <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey showcasing leadership roles, technical expertise, and project management experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card key={exp.company} className="p-8 hover-lift transition-smooth">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold">{exp.company}</h3>
                        <Badge variant="outline" className={exp.color}>
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Role Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold text-primary mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-lg font-medium text-muted-foreground">
                        {exp.position}
                      </p>
                    </div>

                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h5 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        Key Contributions
                      </h5>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h5 className="font-semibold mb-3 flex items-center">
                        <Monitor className="h-4 w-4 mr-2 text-primary" />
                        Skills & Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="px-3 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-smooth"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Experience Stats */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-hero">
            <div className="text-center text-primary-foreground">
              <h3 className="text-2xl font-heading font-semibold mb-8">Professional Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">12+</div>
                  <div className="text-sm opacity-90">Months Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2</div>
                  <div className="text-sm opacity-90">Leadership Roles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Multiple</div>
                  <div className="text-sm opacity-90">Projects Delivered</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;