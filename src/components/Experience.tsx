import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Briefcase, ChevronRight, ChevronDown, CheckCircle2, Server, TestTubes, Workflow } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';
import { useState } from 'react';

const ExperienceCard = ({ exp, index }: { exp: any, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
      {/* Timeline Dot & Logo */}
      <div className="hidden md:flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-2xl glass border-border shadow-sm flex items-center justify-center text-xl font-bold text-teal-500 group-hover:border-teal-500/50 transition-colors">
          {exp.logo}
        </div>
      </div>

      {/* Content Card */}
      <Card className="flex-1 p-6 md:p-8 glass border-gradient shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              {/* Mobile Logo */}
              <div className="md:hidden w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-teal-500 font-bold">
                {exp.logo}
              </div>
              <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
            </div>
            <div className="flex items-center gap-2 text-teal-500 font-medium text-lg">
              <Briefcase className="h-4 w-4" />
              {exp.company}
            </div>
          </div>
          
          <div className="flex flex-col sm:items-end gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full w-fit">
              <Calendar className="h-3.5 w-3.5" />
              {exp.duration}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {exp.location}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
          {exp.description}
        </p>

        {/* Quick Badges (Always visible) */}
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {exp.techFocus && exp.techFocus.map((focus: string) => (
            <Badge key={focus} variant="outline" className="bg-teal-500/5 text-teal-500 border-teal-500/20 px-3 py-1 font-medium">
              <Workflow className="w-3 h-3 mr-1.5" />
              {focus}
            </Badge>
          ))}
          {exp.testingHighlights && exp.testingHighlights.map((test: string) => (
            <Badge key={test} variant="outline" className="bg-purple-500/5 text-purple-400 border-purple-500/20 px-3 py-1 font-medium">
              <TestTubes className="w-3 h-3 mr-1.5" />
              {test}
            </Badge>
          ))}
          {exp.backendFocus && exp.backendFocus.map((be: string) => (
            <Badge key={be} variant="outline" className="bg-amber-500/5 text-amber-500 border-amber-500/20 px-3 py-1 font-medium">
              <Server className="w-3 h-3 mr-1.5" />
              {be}
            </Badge>
          ))}
        </div>

        {/* Expandable Section */}
        <div className={`space-y-6 relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 border-t border-white/5">
            <h4 className="text-sm font-bold text-card-foreground uppercase tracking-wider mb-4 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-2 text-teal-500" />
              Key Responsibilities & Execution
            </h4>
            <div className="space-y-3">
              {exp.responsibilities?.map((resp: string, idx: number) => (
                <div key={idx} className="flex items-start text-sm text-muted-foreground">
                  <ChevronRight className="h-4 w-4 text-teal-500/70 shrink-0 mr-2 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        {exp.responsibilities && exp.responsibilities.length > 0 && (
          <div className="mt-6 relative z-10 flex justify-center border-t border-white/5 pt-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground hover:text-teal-500 hover:bg-teal-500/10 transition-colors w-full sm:w-auto"
            >
              {isExpanded ? 'Show Less' : 'View Detailed Execution'}
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
      company: 'Klimb.io',
      role: 'Product Manager',
      duration: 'Recent',
      location: 'Remote / India',
      type: 'Full-time',
      description: 'Enterprise product coordination and technical workflow execution focused on HR-tech platforms. Bridged engineering logic with business workflows to scale AI-driven HR solutions.',
      responsibilities: [
        'Worked on HRMS and HRIS enterprise systems',
        'Contributed to payroll-related workflow understanding and execution coordination',
        'Participated in KPI/KRA-related product workflow structures',
        'Worked on AI Interviewer systems including: MCQ assessment workflows, Coding test structures, and Interview process flows',
        'Worked on AI Scheduler systems for bulk scheduling operations',
        'Collaborated with teams for execution planning and workflow coordination',
        'Conducted smoke testing and acceptance validation before releases',
        'Performed feature verification and usability-focused checks',
        'Participated in sprint coordination and workflow optimization',
        'Suggested improvements for smoother operational execution and better user workflows'
      ],
      techFocus: ['Enterprise Product Coordination', 'Workflow Execution', 'HRMS/HRIS'],
      testingHighlights: ['Smoke Testing', 'Acceptance Validation'],
      backendFocus: ['Workflow Logic Integration'],
      logo: 'K'
    },
    {
      company: 'InnoCrede Solutions',
      role: 'Technical Product Manager & Front-End Engineer Intern',
      duration: 'Previous',
      location: 'Chandigarh',
      type: 'Internship',
      description: 'Bridged the gap between business requirements and technical implementation while contributing to full-stack execution and front-end development.',
      responsibilities: [
        'Led client requirement meetings and translated business needs into technical specifications.',
        'Designed workflows, wireframes, and user journeys for new product features.',
        'Developed front-end modules and ensured seamless product execution.',
        'Fostered team collaboration to deliver high-quality client solutions.'
      ],
      techFocus: ['Front-End Engineering', 'Technical Product Management'],
      testingHighlights: ['Feature Verification'],
      backendFocus: ['Requirement Engineering'],
      logo: 'I'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="cards" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1000px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real-world product execution experience with technical and workflow ownership.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-[1000px] mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border/60"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
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