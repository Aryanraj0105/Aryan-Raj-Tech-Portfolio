import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Calendar, Users } from 'lucide-react';
import DocumentModal from './DocumentModal';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const Achievements = () => {
  const [selectedDoc, setSelectedDoc] = useState<{title: string, url: string, type: 'image' | 'pdf' | 'link'} | null>(null);

  const academicAchievements = [
    {
      title: 'Super Achiever Award',
      description: 'Received Super Achiever Award during Summer Training Program 2024 organized by Make360, out of 150 students',
      year: '2024',
      category: 'Academic Excellence',
      icon: Trophy,
      image: '/My_Photos/Super Achiever Award.png'
    },
    {
      title: 'Frontend Development Project Award',
      description: 'Awarded for Frontend Development Project in National Science Day, out of 200 students',
      year: '2024',
      category: 'Project Excellence',
      icon: Award,
      image: '/My_Photos/Frontend Development Project Award.png'
    },
    {
      title: '3rd Place in Mathematical Competition',
      description: 'Secured 3rd Place in Inter-College Mathematical Competition',
      year: '2023',
      category: 'Academic Excellence',
      icon: Star,
      image: '/My_Photos/3rd Place in Mathematical Competition.png'
    }
  ];

  const extracurricularAchievements = [
    {
      title: 'Invited As A Guest Lecturer',
      description: 'Served as Team Leader & Tech Coordinator for Parivartan 2023',
      year: '2025',
      category: 'Leadership',
      icon: Users,
      image: '/My_Photos/Invited As A Guest Lecturer.png'
    },
    {
      title: 'Best Finance Associate & Product Manager',
      description: 'Awarded Best Finance Associate & Product Manager at InnoCrede Solutions',
      year: '2025',
      category: 'Leadership',
      icon: Trophy,
      image: '/My_Photos/Best Finance Associate & Product Manager.png'
    },
    {
      title: 'Director of Make360 Training Program',
      description: 'Recognized as Director of Make360 Training Program for leadership and contributions',
      year: '2024',
      category: 'Leadership',
      icon: Award,
      image: '/My_Photos/Director of Make360 Training Program.png'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'leadership':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/30';
      case 'project excellence':
        return 'bg-teal-500/10 text-teal-500 border-teal-500/30';
      case 'academic excellence':
        return 'bg-indigo-500/10 text-indigo-500 border-indigo-500/30';
      default:
        return 'bg-primary/10 text-primary border-primary/30';
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="neutral" />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Academic Achievements */}
        <div className="mb-20">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              Academic Achievements
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {academicAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <FadeIn key={achievement.title} delay={index * 0.1}>
                  <Card
                    className="p-6 transition-all text-center glass border-gradient overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 h-full group"
                  >
                    {achievement.image && (
                      <div
                        className="mb-6 -mx-6 -mt-6 cursor-pointer overflow-hidden group"
                        onClick={() => setSelectedDoc({ title: achievement.title, url: achievement.image, type: 'image' })}
                      >
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-border/50 bg-background/50">
                      <Icon className="h-8 w-8 text-teal-400" />
                    </div>
                    <Badge variant="outline" className={`${getCategoryColor(achievement.category)} mb-4`}>
                      {achievement.category}
                    </Badge>
                    <h4 className="text-lg font-bold mb-3 text-card-foreground">{achievement.title}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{achievement.description}</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground mt-auto">
                      <Calendar className="h-4 w-4 mr-1.5" />
                      {achievement.year}
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Extracurricular Achievements */}
        <div className="mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              Leadership & Extracurricular Excellence
            </h2>
          </FadeIn>
          <div className="grid lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {extracurricularAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <FadeIn key={achievement.title} delay={index * 0.1}>
                  <Card
                    className="p-6 transition-all overflow-hidden glass border-gradient shadow-sm hover:shadow-xl hover:-translate-y-1 h-full group"
                  >
                    {achievement.image && (
                      <div
                        className="mb-6 -mx-6 -mt-6 cursor-pointer overflow-hidden group"
                        onClick={() => setSelectedDoc({ title: achievement.title, url: achievement.image, type: 'image' })}
                      >
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="flex items-start space-x-5">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-border/50 bg-background/50">
                        <Icon className="h-6 w-6 text-teal-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <Badge variant="outline" className={`${getCategoryColor(achievement.category)}`}>
                            {achievement.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1.5" />
                            {achievement.year}
                          </div>
                        </div>
                        <h4 className="text-lg font-bold mb-2 text-card-foreground">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>

      {selectedDoc && (
        <DocumentModal 
          isOpen={!!selectedDoc} 
          onClose={() => setSelectedDoc(null)} 
          title={selectedDoc.title}
          documentUrl={selectedDoc.url}
          type={selectedDoc.type}
        />
      )}
    </section>
  );
};

export default Achievements;
