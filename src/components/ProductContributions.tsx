import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ChevronDown, CheckCircle2, Layers, Workflow, Briefcase, LayoutGrid } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

// Types
type Product = {
  name: string;
  category: string;
  description: string;
  features: string[];
  contributions: string[];
  techFocus: string[];
  link?: string;
};

type Company = {
  name: string;
  role: string;
  overview: string;
  generalResponsibilities: string[];
  products: Product[];
};

const ProductCard = ({ product, index }: { product: Product, index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-white/5 rounded-xl bg-muted/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-muted/30">
      {/* Header (Clickable) */}
      <div 
        className="p-5 flex items-center justify-between cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-foreground group-hover:text-teal-400 transition-colors">
              {product.name}
            </h4>
            <span className="text-sm text-teal-500/80 font-medium tracking-wide">
              {product.category}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {product.link && (
            <a 
              href={product.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition-colors hidden sm:block"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
            </a>
          )}
          <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-background/50 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-teal-500/10 text-teal-400' : ''}`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-0 border-t border-white/5 space-y-6">
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Features & Contributions Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Features */}
              <div className="space-y-3 bg-background/30 p-4 rounded-lg border border-white/5">
                <h5 className="text-sm font-bold text-card-foreground flex items-center uppercase tracking-wider">
                  <Layers className="w-4 h-4 mr-2 text-purple-400" />
                  Key Features
                </h5>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 mr-1.5 text-purple-400/70 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contributions */}
              <div className="space-y-3 bg-background/30 p-4 rounded-lg border border-white/5">
                <h5 className="text-sm font-bold text-card-foreground flex items-center uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-teal-400" />
                  My Contributions
                </h5>
                <ul className="space-y-2">
                  {product.contributions.map((contribution, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 mr-1.5 text-teal-400/70 shrink-0 mt-0.5" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech/Workflow Focus Badges */}
            <div className="pt-2">
              <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Tech & Workflow Focus</h5>
              <div className="flex flex-wrap gap-2">
                {product.techFocus.map((focus, idx) => (
                  <Badge key={idx} variant="outline" className="bg-muted/50 border-white/10 text-muted-foreground font-normal px-2.5 py-0.5">
                    {focus}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyCard = ({ company, index }: { company: Company, index: number }) => {
  return (
    <Card className="p-6 md:p-8 glass border-gradient shadow-xl relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-teal-500/10 transition-colors duration-700"></div>

      <div className="flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* Left Side: Company Info */}
        <div className="lg:w-1/3 shrink-0">
          <div className="sticky top-32 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-teal-500 font-medium mb-1">
                <Briefcase className="w-4 h-4" />
                Company
              </div>
              <h3 className="text-3xl font-extrabold text-foreground tracking-tight mb-2">
                {company.name}
              </h3>
              <p className="text-lg font-medium text-muted-foreground">
                {company.role}
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {company.overview}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-card-foreground flex items-center uppercase tracking-wider">
                <Workflow className="w-4 h-4 mr-2 text-teal-500" />
                General Responsibilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {company.generalResponsibilities.map((resp, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-background/50 text-xs font-normal">
                    {resp}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Products Accordion */}
        <div className="lg:w-2/3 space-y-4">
          <h4 className="text-lg font-bold text-foreground mb-4 border-b border-white/5 pb-2">Product Contributions</h4>
          {company.products.map((product, idx) => (
            <ProductCard key={idx} product={product} index={idx} />
          ))}
        </div>

      </div>
    </Card>
  );
};

const ProductContributions = () => {
  const [showMore, setShowMore] = useState(false);

  const companies: Company[] = [
    {
      name: 'Trinamix Systems Private Limited',
      role: 'Systems Engineer – AI Engineering',
      overview: 'Working on enterprise AI and ERP modernization solutions, contributing to intelligent document conversion, AI-powered backend systems, enterprise automation, software testing, and scalable applications. Due to project confidentiality, only publicly shareable responsibilities are included.',
      generalResponsibilities: [
        'AI Engineering',
        'Python Development',
        'FastAPI Development',
        'MERN Stack Development',
        'Enterprise ERP Solutions',
        'Oracle Fusion Integration',
        'Excel Data Transformation',
        'REST API Development',
        'LLM Integration',
        'Retrieval-Augmented Generation (RAG)',
        'Software Testing',
        'Quality Assurance',
        'Debugging',
        'Workflow Automation',
        'Cross-functional Collaboration'
      ],
      products: [
        {
          name: 'Enterprise Data Conversion Platform',
          category: 'Excel-to-Oracle Fusion ERP Transformation',
          description: 'Contributed to the development of an enterprise conversion platform that transforms structured Excel datasets into Oracle Fusion ERP compatible formats. Responsible for backend implementation, API development, workflow optimization, and testing while ensuring scalability and production readiness.',
          features: [
            'Structured Excel dataset parsing',
            'ERP data transformation',
            'Oracle Fusion format generation',
            'Scalable conversion pipelines'
          ],
          contributions: [
            'Backend implementation',
            'API development',
            'Workflow optimization',
            'Testing & production readiness'
          ],
          techFocus: [
            'Python',
            'Enterprise ERP',
            'API Integration',
            'Oracle Fusion'
          ]
        },
        {
          name: 'Enterprise AI Backend',
          category: 'FastAPI • Python • MERN',
          description: 'Develop enterprise backend services using Python, FastAPI, MERN Stack, and REST APIs. Contribute to AI-assisted workflows, scalable system architecture, debugging, testing, and enterprise software development following modern engineering practices.',
          features: [
            'Enterprise backend services',
            'AI-assisted workflows',
            'Scalable system architecture',
            'Modern engineering integration'
          ],
          contributions: [
            'REST API development',
            'System debugging',
            'Automated testing',
            'Enterprise software development'
          ],
          techFocus: [
            'FastAPI',
            'Python',
            'MERN Stack',
            'REST APIs'
          ]
        },
        {
          name: 'LLM & RAG Integration',
          category: 'Enterprise Artificial Intelligence',
          description: 'Contribute to integrating Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) into enterprise applications to improve intelligent document understanding, contextual information retrieval, and AI-powered automation.',
          features: [
            'LLM model integration',
            'Retrieval-Augmented Generation',
            'Contextual information retrieval',
            'AI-powered automation workflows'
          ],
          contributions: [
            'AI integration support',
            'Intelligent document understanding',
            'Contextual search execution',
            'Enterprise AI implementation'
          ],
          techFocus: [
            'LLMs',
            'RAG',
            'AI Automation',
            'Intelligent Document Processing'
          ]
        }
      ]
    },
    {
      name: 'Klimb.io',
      role: 'Product Manager – AI Products',
      overview: 'Worked on enterprise HR-tech platforms focused on workflow execution, AI-based hiring systems, payroll operations, interview automation, and operational HR process management.',
      generalResponsibilities: [
        'Cross-functional collaboration',
        'Product execution coordination',
        'Sprint coordination',
        'Workflow optimization',
        'Smoke testing',
        'Acceptance validation',
        'Feature verification',
        'Product usability improvements'
      ],
      products: [
        {
          name: 'AI Interviewer',
          category: 'AI-Based Hiring Platform',
          description: 'AI-powered interview platform designed for automated hiring workflows and candidate assessment systems.',
          features: ['MCQ test system', 'Coding assessments', 'AI interview workflows', 'Candidate evaluation process'],
          contributions: ['Product workflow coordination', 'Testing and validation', 'Interview flow verification', 'Feature execution support', 'Workflow optimization suggestions', 'Acceptance testing', 'Usability-focused checks'],
          techFocus: ['AI hiring workflows', 'Coding assessments', 'Interview systems', 'Workflow execution', 'Product testing']
        },
        {
          name: 'AI Scheduler',
          category: 'Interview Scheduling Platform',
          description: 'Bulk scheduling platform designed to automate interview coordination and assignment workflows.',
          features: ['Bulk scheduling', 'Automated assignment workflows', 'Scheduling coordination', 'Interview management systems'],
          contributions: ['Workflow coordination', 'Execution planning support', 'Product validation', 'Smoke testing', 'Scheduling workflow understanding', 'Feature verification'],
          techFocus: ['Scheduling systems', 'Automation workflows', 'Product execution', 'Testing workflows']
        },
        {
          name: 'AI Assessment Platform',
          category: 'Candidate Evaluation System',
          description: 'Platform designed for robust candidate evaluation with automated workflows and AI-driven insights.',
          features: ['Automated workflows', 'AI-driven insights', 'Candidate evaluation', 'Assessment systems'],
          contributions: ['Workflow coordination', 'Testing and validation', 'Product usability', 'Feature verification'],
          techFocus: ['AI Assessment', 'Evaluation Systems', 'Product Testing']
        },
        {
          name: 'HRMS & HRIS',
          category: 'Enterprise HR-Tech Platform',
          description: 'Enterprise workforce management and HR operations platform handling employee workflows, payroll systems, KPI/KRA tracking, and operational HR processes.',
          features: ['Payroll systems', 'KPI/KRA workflows', 'Employee management', 'Goal tracking systems', 'HR operational workflows'],
          contributions: ['Workflow execution coordination', 'Product usability validation', 'Feature verification', 'Sprint collaboration', 'Smoke testing', 'Acceptance testing', 'Operational workflow understanding', 'Product coordination support'],
          techFocus: ['Enterprise workflows', 'Payroll systems', 'HR operations', 'KPI/KRA systems', 'Product validation']
        }
      ]
    },
    {
      name: 'InnoCrede Solutions',
      role: 'Technical Product Manager & Full-Stack Developer Intern',
      overview: 'Contributed to real-world client applications across frontend development, backend support, UI/UX improvements, dashboard development, database integration, and product execution. Leveraged AI-assisted development tools for design ideation, interface improvements, and productivity while collaborating with engineering and product teams.',
      generalResponsibilities: [
        'Full-Stack Development',
        'Frontend Development',
        'Backend Development',
        'UI/UX Design',
        'Responsive Design',
        'Dashboard Development',
        'Database Integration',
        'Product Execution',
        'Software Testing',
        'Acceptance Validation',
        'Workflow Optimization',
        'AI-assisted Development',
        'Cross-functional Collaboration'
      ],
      products: [
        {
          name: 'CHD State',
          category: 'E-Commerce & Gymwear Platform',
          link: 'https://www.chdstate.com/',
          description: 'Contributed to frontend development, UI/UX improvements, responsive interface implementation, and feature development for an e-commerce platform. Used AI-assisted development tools to explore design improvements, optimize user experience, and accelerate development while collaborating with the engineering team.',
          features: [
            'Responsive interface implementation',
            'UI/UX design exploration',
            'E-commerce feature development',
            'AI-assisted development processes'
          ],
          contributions: [
            'Frontend development execution',
            'UI/UX improvement suggestions',
            'Feature implementation',
            'Productivity enhancement via AI tools'
          ],
          techFocus: [
            'Frontend Development',
            'UI/UX Design',
            'AI-Assisted Workflows',
            'E-Commerce'
          ]
        },
        {
          name: 'Flash Mins',
          category: 'Hyperlocal Delivery Platform',
          description: 'Worked on frontend implementation, workflow optimization, dashboard improvements, and product execution for a hyperlocal delivery platform. Collaborated on feature implementation, testing, and usability enhancements to improve the overall customer experience.',
          features: [
            'Frontend implementation',
            'Dashboard improvements',
            'Operational workflow optimization',
            'Usability enhancements'
          ],
          contributions: [
            'Frontend feature execution',
            'Workflow testing',
            'Dashboard implementation support',
            'Usability testing'
          ],
          techFocus: [
            'Frontend Development',
            'Dashboard Systems',
            'Workflow Optimization',
            'Product Execution'
          ]
        },
        {
          name: 'Diamond 11',
          category: 'Fantasy Sports Platform',
          description: 'Contributed to frontend development, interface improvements, backend coordination, software testing, and feature validation while helping deliver a scalable and engaging fantasy sports platform.',
          features: [
            'Interface improvements',
            'Frontend implementation',
            'Backend coordination workflows',
            'Scalable fantasy sports features'
          ],
          contributions: [
            'Frontend development support',
            'Software testing',
            'Feature validation',
            'Backend coordination'
          ],
          techFocus: [
            'Frontend Development',
            'Software Testing',
            'Backend Coordination',
            'Feature Validation'
          ]
        }
      ]
    }
  ];

  return (
    <section id="contributions" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="cards" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1200px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
              Professional Product Contributions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Enterprise AI engineering contributions focused on intelligent automation, ERP modernization, scalable backend development, and AI-powered enterprise solutions.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          {companies.slice(0, 2).map((company, index) => (
            <FadeIn key={company.name} delay={index * 0.2} direction="up">
              <CompanyCard company={company} index={index} />
            </FadeIn>
          ))}
          
          <div className={`grid transition-all duration-700 ease-in-out ${showMore ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="flex flex-col gap-12 pt-1">
                {companies.slice(2).map((company, index) => (
                  <CompanyCard key={company.name} company={company} index={index + 2} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 text-teal-400 font-semibold hover:bg-teal-500/20 transition-all border border-teal-500/20 hover:border-teal-500/40"
            >
              {showMore ? (
                <>
                  <span className="text-[10px] leading-none">▲</span> Show Less
                </>
              ) : (
                <>
                  <span className="text-[10px] leading-none">▼</span> Show More
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContributions;
