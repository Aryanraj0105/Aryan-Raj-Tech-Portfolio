import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Briefcase, Zap } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
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

        <p className="text-muted-foreground mb-6 leading-relaxed relative z-10 text-base">
          {exp.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 relative z-10">
          <ul className="space-y-2">
            {exp.highlights.map((highlight: string, idx: number) => (
              <li key={idx} className="flex items-start text-sm text-foreground/80 font-medium">
                <span className="w-1.5 h-1.5 bg-teal-500/70 rounded-full mr-3 mt-1.5 flex-shrink-0 shadow-[0_0_4px_rgba(20,184,166,0.5)]"></span>
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 relative z-10 pt-4 border-t border-white/5">
          {exp.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="bg-teal-500/5 text-teal-400 border-teal-500/20 px-3 py-1 font-semibold">
              <Zap className="w-3 h-3 mr-1.5 inline" />
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'Klimb.io',
      role: 'Product Manager',
      duration: 'Dec 2025 – Present',
      description: 'Worked on enterprise HR-tech products, coordinating execution, testing, and workflow optimization across multiple platforms.',
      highlights: [
        'Collaborated with cross-functional teams for product delivery.',
        'Worked on HRMS, HRIS, AI Interviewer, and AI Scheduler platforms.',
        'Conducted smoke testing and feature validation before releases.',
        'Coordinated sprint execution and workflow improvements.',
        'Contributed usability-focused enhancements and product optimization.'
      ],
      tags: ['Product Management', 'HR-Tech', 'AI Interviewer', 'HRMS', 'HRIS', 'Sprint Coordination'],
      logo: 'K'
    },
    {
      company: 'InnoCrede Solutions',
      role: 'Full Stack Engineer Intern',
      duration: 'May 2025 – Dec 2025',
      description: 'Worked on real-world client products involving requirement gathering, workflow design, frontend/backend development, testing, and product execution.',
      highlights: [
        'Conducted 10+ client requirement gathering sessions.',
        'Converted business requirements into workflows and wireframes.',
        'Delivered frontend modules for 3 client products.',
        'Contributed to backend support, testing, and product delivery.',
        'Collaborated with clients, designers, and developers throughout execution.'
      ],
      tags: ['Full Stack', 'React', 'Workflow Design', 'Client Collaboration', 'Testing'],
      logo: 'I'
    },
    {
      company: 'Makes360',
      role: 'Technical Training & Development Intern',
      duration: 'Aug 2024 – May 2025',
      description: 'Contributed to technical training initiatives focused on web development, SEO, databases, and professional skill development while supporting student learning and career readiness programs.',
      highlights: [
        'Assisted in delivering web development, SEO, and database training sessions.',
        'Supported website management and UI/UX improvement initiatives.',
        'Guided students in resume building and interview preparation.',
        'Collaborated in workshops, training sessions, and internship programs.',
        'Ranked 1st among 150+ participants and received the Super Achiever Award.'
      ],
      tags: ['Web Development', 'SEO', 'Training', 'UI/UX', 'Professional Development'],
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