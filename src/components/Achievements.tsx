import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Calendar, Users, BookOpen } from 'lucide-react';

const Achievements = () => {
  const academicAchievements = [
    {
      title: 'Super Achiever Award',
      description: 'Received Super Achiever Award during Summer Training Program 2024 organized by Make360, out of 150 students',
      year: '2024',
      category: 'Academic Excellence',
      icon: Trophy,
      image: '/lovable-uploads/beeefb0d-aa20-43b0-b723-b42b0c68fb32.png'
      
    },
    {
      title: 'Frontend Development Project Award',
      description: 'Awarded for Frontend Development Project in National Science Day, out of 200 students',
      year: '2024',
      category: 'Project Excellence',
      icon: Award,
      image: '/lovable-uploads/a66c7b05-b1d7-49b4-abf6-43b9f0cec523.png'
    },
    {
      title: '3rd Place in Mathematical Competition',
      description: 'Secured 3rd Place in Inter-College Mathematical Competition',
      year: '2023',
      category: 'Academic Excellence',
      icon: Star,
      image: '/lovable-uploads/e3a15b4e-2719-4351-bca5-f5394085edb6.png'
    }
  ];

  const extracurricularAchievements = [
    {
      title: 'Invited As A Guest Lecturer',
      description: 'Served as Team Leader & Tech Coordinator for Parivartan 2023',
      year: '2025',
      category: 'Leadership',
      icon: Users,
      image: '/lovable-uploads/e8b8bf66-00dc-4363-ae11-ad540eb625a0.png'
    },
    {
      title: 'Best Finance Associate & Product Manager',
      description: 'Awarded Best Finance Associate & Product Manager at InnoCrede Solutions',
      year: '2025',
      category: 'Leadership',
      icon: Trophy,
       image: '/lovable-uploads/1bc9305b-8ad7-4626-870b-78b00aca391c.png'
    },
    {
      title: 'Director of Make360 Training Program',
      description: 'Recognized as Director of Make360 Training Program for leadership and contributions',
      year: '2024',
      category: 'Leadership',
      icon: Award,
      image: '/lovable-uploads/e83a240d-8434-4fd1-a213-aa45a0c7358e.png' 
    }
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Google Analytics Certified',
    'MongoDB Developer',
    'React Professional Certificate',
    'Cybersecurity Fundamentals'
  ];

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'leadership':
        return Users;
      case 'competition':
        return Trophy;
      case 'communication':
        return Award;
      case 'innovation':
        return Star;
      case 'academic excellence':
        return BookOpen;
      default:
        return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'leadership':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/30';
      case 'competition':
        return 'bg-green-500/10 text-green-700 border-green-500/30';
      case 'communication':
        return 'bg-purple-500/10 text-purple-700 border-purple-500/30';
      case 'innovation':
        return 'bg-orange-500/10 text-orange-700 border-orange-500/30';
      case 'academic excellence':
        return 'bg-indigo-500/10 text-indigo-700 border-indigo-500/30';
      case 'research':
        return 'bg-teal-500/10 text-teal-700 border-teal-500/30';
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-500/30';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Achievements & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of academic excellence, leadership roles, and extracurricular accomplishments
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-semibold text-center mb-8">
            Academic Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {academicAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={achievement.title} className="p-6 hover-lift transition-smooth text-center bg-gradient-card overflow-hidden">
                  {achievement.image && (
                    <div className="mb-4 -mx-6 -mt-6">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`${getCategoryColor(achievement.category)} border mb-3`}
                  >
                    {achievement.category}
                  </Badge>
                  <h4 className="text-lg font-heading font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground mb-3 text-sm">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {achievement.year}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Extracurricular & Co-Curricular */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-semibold text-center mb-8">
            Leadership & Extracurricular Excellence
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {extracurricularAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={achievement.title} className="p-6 hover-lift transition-smooth overflow-hidden">
                  {achievement.image && (
                    <div className="mb-4 -mx-6 -mt-6">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <Badge 
                          variant="outline" 
                          className={`${getCategoryColor(achievement.category)} border`}
                        >
                          {achievement.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {achievement.year}
                        </div>
                      </div>
                      <h4 className="text-lg font-heading font-semibold mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <Card className="p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-2xl font-heading font-semibold mb-6">
            Professional Certifications
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert) => (
              <Badge 
                key={cert} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Achievement Stats */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-hero">
            <div className="text-center text-primary-foreground">
              <h3 className="text-2xl font-heading font-semibold mb-8">Achievement Summary</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-sm opacity-90">Total Awards</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-90">Academic Achievements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-90">Leadership Excellence</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;