import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Introduction to Deep Learning 2025',
      issuer: 'Infosys',
      year: '2025',
      type: 'AI/ML',
      description: 'Comprehensive training on deep learning fundamentals, neural networks, and practical applications.',
      skills: ['Deep Learning', 'Neural Networks', 'Python', 'TensorFlow'],
      color: 'bg-purple-500/10 text-purple-700 border-purple-500/30',
      logo: '🧠'
    },
    {
      title: 'Web Development Training Certification',
      issuer: 'Makes360',
      year: '2024',
      type: 'Web Development',
      description: 'Advanced web development training covering modern frameworks and best practices.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
      color: 'bg-blue-500/10 text-blue-700 border-blue-500/30',
      logo: '🌐'
    },
    {
      title: 'AWS Academy Certification: Cloud Foundations',
      issuer: 'AWS Academy',
      year: '2024',
      type: 'Cloud Computing',
      description: 'Foundational knowledge of AWS cloud services, architecture, and best practices.',
      skills: ['AWS Services', 'Cloud Architecture', 'EC2', 'S3', 'IAM'],
      color: 'bg-orange-500/10 text-orange-700 border-orange-500/30',
      logo: '☁️'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validated expertise through industry-recognized certifications and training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card key={cert.title} className="p-6 hover-lift transition-smooth bg-gradient-card h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                  {cert.logo}
                </div>
                <Badge variant="outline" className={cert.color}>
                  {cert.type}
                </Badge>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-heading font-bold mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <p className="text-primary font-semibold">{cert.issuer}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.year}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2 flex items-center">
                  <Award className="h-4 w-4 mr-1 text-primary" />
                  Skills Covered
                </h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill} 
                      variant="secondary" 
                      className="px-2 py-1 text-xs hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certification Summary */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-2xl font-heading font-semibold mb-6">
            Continuous Learning & Professional Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Active Certifications</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Technology Domains</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">2024-25</div>
              <div className="text-sm text-muted-foreground">Recent Achievements</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;