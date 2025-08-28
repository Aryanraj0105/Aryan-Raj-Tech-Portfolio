import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Full Name', value: 'Aryan Raj' },
    { icon: GraduationCap, label: 'Education', value: '4th Year CSE Student' },
    { icon: MapPin, label: 'College', value: 'Chandigarh Engineering College, CGC-Landran' },
    { icon: Calendar, label: 'Academic Year', value: '2022-2026' },
  ];

  const interests = [
    'Gaming', 'Research', 'Space Exploration', 'Artificial Intelligence',
    'Quantum Computing', 'IoT Security', 'Cloud Computing', 'UI/UX'
  ];

  const interpersonalSkills = [
    'Team Management', 'Leadership', 'Decision-Making', 
    'Presentation Skills', 'Problem Solving', 'Communication', 'Public Speaking'
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <div className="space-y-8">
            <Card className="p-8 hover-lift transition-smooth bg-gradient-card">
              <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
                <User className="mr-3 h-6 w-6 text-primary" />
                Personal Information
              </h3>
              <div className="grid gap-4">
                {personalInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Professional Summary */}
            <Card className="p-8 hover-lift transition-smooth">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Science & Engineering student with a passion for 
                innovation and research. Currently in my 4th year at Chandigarh Engineering College, 
                I've developed expertise in full-stack development, database management, and emerging 
                technologies like IoT security and quantum computing. My academic journey has been 
                enriched with hands-on projects, research publications, and leadership experiences 
                that have shaped my technical and interpersonal skills.
              </p>
            </Card>
          </div>

          {/* Skills & Interests */}
          <div className="space-y-8">
            {/* Interpersonal Skills */}
            <Card className="p-8 hover-lift transition-smooth">
              <h3 className="text-2xl font-heading font-semibold mb-6">
                Interpersonal Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {interpersonalSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Interests & Hobbies */}
            <Card className="p-8 hover-lift transition-smooth bg-gradient-card">
              <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
                <Heart className="mr-3 h-6 w-6 text-primary" />
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="outline" 
                    className="px-4 py-2 text-sm font-medium border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth cursor-default"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-8 hover-lift transition-smooth bg-gradient-accent">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-secondary-foreground">
                Let's Connect
              </h3>
              <div className="space-y-3">
                <p className="text-secondary-foreground/80">
                  <span className="font-semibold">Email:</span> aryanraj190223@gmail.com
                </p>
                <p className="text-secondary-foreground/80">
                  <span className="font-semibold">Phone:</span> +91 8709751968
                </p>
                <p className="text-secondary-foreground/80">
                  <span className="font-semibold">Location:</span> Chandigarh, India
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;