import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Briefcase, ChevronRight, ChevronDown, CheckCircle2, Trophy, Star, Target, Zap } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';
import { useState } from 'react';

const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
      {/* Timeline Dot & Logo */}
      <div className="hidden md:flex flex-col items-center z-10 mt-2">
        <div className="w-16 h-16 rounded-2xl glass border-border shadow-sm flex items-center justify-center text-2xl font-bold text-teal-500 group-hover:border-teal-500/50 group-hover:scale-110 transition-all duration-300">
          {exp.logo}
        </div>
      </div>

      {/* Content Card */}
      <Card className="flex-1 p-6 md:p-8 glass border-gradient shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-110 group-hover:bg-teal-500/10"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {/* Mobile Logo */}
              <div className="md:hidden w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-teal-500 font-bold text-xl border border-white/5 shadow-sm">
                {exp.logo}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{exp.role}</h3>
            </div>
            <div className="flex items-center gap-2 text-teal-500 font-semibold text-lg">
              <Briefcase className="h-5 w-5" />
              {exp.company}
            </div>
          </div>
          
          <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5 bg-background/50 border border-white/5 px-3 py-1.5 rounded-full shadow-sm w-fit">
              <Calendar className="h-4 w-4 text-teal-500" />
              {exp.duration}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 text-base md:text-lg">
          {exp.description}
        </p>

        {/* Achievement Highlights (Visual Block) */}
        {exp.achievement && (
          <div className="mb-6 relative z-10 bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 rounded-xl p-5 shadow-sm">
            <h4 className="flex items-center gap-2 font-bold text-amber-500 mb-3 text-sm uppercase tracking-wider">
              {exp.achievementIcon || <Trophy className="w-5 h-5" />}
              Achievement Highlight
            </h4>
            {typeof exp.achievement === 'string' ? (
              <p className="text-foreground font-medium">{exp.achievement}</p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {exp.achievement.map((ach: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium text-foreground">
                    <Star className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    {ach}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Skills & Tools */}
        <div className="mb-6 relative z-10">
          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Skills & Tools</h4>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill: string) => (
              <Badge key={skill} variant="secondary" className="bg-muted/50 hover:bg-muted text-muted-foreground px-3 py-1 font-medium transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Badge Tags (Categorized) */}
        <div className="flex flex-wrap gap-2 mb-2 relative z-10">
          {exp.badgeTags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="bg-teal-500/5 text-teal-400 border-teal-500/20 px-3 py-1 font-semibold">
              <Zap className="w-3 h-3 mr-1.5 inline" />
              {tag}
            </Badge>
          ))}
        </div>

        {/* Expandable Responsibilities Section */}
        <div className={`space-y-6 relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <div className="pt-6 border-t border-white/5">
            <h4 className="text-sm font-bold text-card-foreground uppercase tracking-wider mb-4 flex items-center">
              <Target className="w-4 h-4 mr-2 text-teal-500" />
              Key Responsibilities
            </h4>
            <div className="space-y-3">
              {exp.responsibilities?.map((resp: string, idx: number) => (
                <div key={idx} className="flex items-start text-sm md:text-base text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-teal-500/70 shrink-0 mr-3 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
            
            {exp.keyContributions && (
              <div className="mt-6">
                 <h4 className="text-sm font-bold text-card-foreground uppercase tracking-wider mb-3 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-purple-400" />
                  Key Contributions (Client Projects)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.keyContributions.map((proj: string) => (
                    <Badge key={proj} variant="outline" className="bg-purple-500/5 text-purple-400 border-purple-500/20 px-3 py-1">
                      {proj}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        {exp.responsibilities && exp.responsibilities.length > 0 && (
          <div className="mt-6 relative z-10 flex justify-center border-t border-white/5 pt-5">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground hover:text-teal-400 hover:bg-teal-500/10 transition-colors w-full sm:w-auto font-semibold tracking-wide"
            >
              {isExpanded ? 'Hide Details' : 'View Responsibilities'}
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'InnoCrede Solutions',
      role: 'Full Stack Engineer Intern',
      duration: 'May 2025 - Dec 2025',
      description: 'Worked on real-world client products involving full-stack development, requirement gathering, workflow structuring, UI development, testing, and product execution.',
      responsibilities: [
        'Conducted 10+ client requirement gathering sessions and translated business needs into structured workflows and wireframes.',
        'Collaborated directly with clients to understand product requirements and business goals.',
        'Delivered front-end modules for 3 client products ahead of schedule.',
        'Participated in backend support, workflow implementation, and dashboard-related development.',
        'Worked alongside designers and developers to transform business ideas into actionable implementation plans.',
        'Contributed to feature planning, UI development, testing, and product delivery processes.',
        'Assisted in smoke testing, acceptance validation, and usability verification.',
        'Participated in workflow optimization discussions and implementation strategies.'
      ],
      achievement: [
        'Client Collaboration: 10+ Requirement Sessions',
        'Workflow Design & Structuring',
        'Product Execution: 3 Client Products Delivered',
        'Full Product Lifecycle Exposure'
      ],
      achievementIcon: <Target className="w-5 h-5" />,
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Frontend Development', 'Backend Support', 'Workflow Design', 'Wireframing', 'Product Execution', 'Testing & Validation'],
      badgeTags: ['Full Stack Development', 'Client Collaboration', 'Workflow Design', 'Product Execution', 'Testing & Validation'],
      keyContributions: ['CHD State', 'Flash Mins', 'Diamond 11'],
      logo: 'I'
    },
    {
      company: 'Make360',
      role: 'Technical Training & Development Intern',
      duration: 'May 2024 - Aug 2024',
      description: 'Contributed to technical training, web development education, digital learning initiatives, and student professional development programs while collaborating with mentors and industry professionals.',
      responsibilities: [
        'Assisted in delivering training programs focused on Web Development, SEO, Database Fundamentals, and Professional Development.',
        'Supported website management and UI/UX enhancement initiatives.',
        'Contributed to digital learning programs to improve student learning experiences.',
        'Guided students in resume building, interview preparation, and career readiness activities.',
        'Collaborated with mentors and teams to organize workshops, training sessions, and internship opportunities.',
        'Assisted in student engagement, communication, networking, and professional development initiatives.'
      ],
      achievement: '🏆 Super Achiever Award: Ranked 1st among 150+ participants for outstanding performance, contribution, and leadership during the internship program.',
      achievementIcon: <Trophy className="w-5 h-5 text-yellow-500" />,
      skills: ['Web Development', 'SEO', 'UI/UX', 'Student Mentorship', 'Communication', 'Professional Development', 'Training & Workshops'],
      badgeTags: ['Super Achiever Award', 'Top Performer', 'Training & Development', 'Web Development', 'SEO'],
      logo: 'M'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="cards" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1000px] mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
              Professional Experience
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real-world product execution, technical ownership, and industry achievements.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-[1000px] mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal-500/50 via-purple-500/20 to-transparent rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
               <FadeIn key={index} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
                <ExperienceCard exp={exp} index={index} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;