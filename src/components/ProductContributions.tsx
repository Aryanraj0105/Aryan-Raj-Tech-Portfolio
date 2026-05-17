import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ChevronDown, CheckCircle2, Layers, Workflow, TestTubes, Briefcase, LayoutGrid } from 'lucide-react';
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
  const companies: Company[] = [
    {
      name: 'Klimb.io',
      role: 'Product Manager',
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
          name: 'HRMS & HRIS Systems',
          category: 'Enterprise HR-Tech Platform',
          description: 'Enterprise workforce management and HR operations platform handling employee workflows, payroll systems, KPI/KRA tracking, and operational HR processes.',
          features: [
            'Payroll systems',
            'KPI/KRA workflows',
            'Employee management',
            'Goal tracking systems',
            'HR operational workflows'
          ],
          contributions: [
            'Workflow execution coordination',
            'Product usability validation',
            'Feature verification',
            'Sprint collaboration',
            'Smoke testing',
            'Acceptance testing',
            'Operational workflow understanding',
            'Product coordination support'
          ],
          techFocus: [
            'Enterprise workflows',
            'Payroll systems',
            'HR operations',
            'KPI/KRA systems',
            'Product validation'
          ]
        },
        {
          name: 'AI Interviewer',
          category: 'AI-Based Hiring Platform',
          description: 'AI-powered interview platform designed for automated hiring workflows and candidate assessment systems.',
          features: [
            'MCQ test system',
            'Coding assessments',
            'AI interview workflows',
            'Candidate evaluation process'
          ],
          contributions: [
            'Product workflow coordination',
            'Testing and validation',
            'Interview flow verification',
            'Feature execution support',
            'Workflow optimization suggestions',
            'Acceptance testing',
            'Usability-focused checks'
          ],
          techFocus: [
            'AI hiring workflows',
            'Coding assessments',
            'Interview systems',
            'Workflow execution',
            'Product testing'
          ]
        },
        {
          name: 'AI Scheduler',
          category: 'Interview Scheduling Platform',
          description: 'Bulk scheduling platform designed to automate interview coordination and assignment workflows.',
          features: [
            'Bulk scheduling',
            'Automated assignment workflows',
            'Scheduling coordination',
            'Interview management systems'
          ],
          contributions: [
            'Workflow coordination',
            'Execution planning support',
            'Product validation',
            'Smoke testing',
            'Scheduling workflow understanding',
            'Feature verification'
          ],
          techFocus: [
            'Scheduling systems',
            'Automation workflows',
            'Product execution',
            'Testing workflows'
          ]
        }
      ]
    },
    {
      name: 'InnoCrede Solutions',
      role: 'Technical Product Manager & Full-Stack Developer Intern',
      overview: 'Worked on real-world client products involving frontend/backend contribution, workflow structuring, dashboard systems, database handling, product execution, testing, and operational workflow optimization.',
      generalResponsibilities: [
        'Requirement gathering',
        'Workflow structuring',
        'Frontend contribution',
        'Backend support',
        'Database handling',
        'Dashboard systems',
        'Wireframing',
        'Product execution',
        'Smoke testing',
        'Acceptance validation'
      ],
      products: [
        {
          name: 'CHD State',
          category: 'E-Commerce / Gymwear Platform',
          link: 'https://www.chdstate.com/',
          description: 'Modern e-commerce platform focused on gymwear and lifestyle apparel with operational dashboard workflows and scalable product management systems.',
          features: [
            'Product management dashboard',
            'Order workflows',
            'User interaction systems',
            'Admin operations'
          ],
          contributions: [
            'Frontend development',
            'Backend support',
            'Database handling',
            'Dashboard workflow support',
            'SRS documentation assistance',
            'Wireframing',
            'UI/UX contribution',
            'Smoke testing',
            'Acceptance validation',
            'Workflow optimization suggestions',
            'Stakeholder collaboration during implementation'
          ],
          techFocus: [
            'Full-stack contribution',
            'Dashboard systems',
            'Product workflows',
            'E-commerce operations',
            'Database handling',
            'UI/UX systems',
            'Product validation'
          ]
        },
        {
          name: 'Flash Mins',
          category: 'Hyperlocal Delivery Platform',
          description: 'Hyperlocal commerce and delivery platform designed for food businesses and rapid operational workflows.',
          features: [
            'Delivery workflows',
            'Operational dashboards',
            'Commerce management',
            'User order systems'
          ],
          contributions: [
            'Workflow structuring',
            'Frontend/backend support',
            'Database-related contribution',
            'Dashboard workflow understanding',
            'Product execution support',
            'Feature validation',
            'Smoke testing',
            'Workflow optimization suggestions'
          ],
          techFocus: [
            'Hyperlocal commerce systems',
            'Delivery workflows',
            'Dashboard systems',
            'Backend support',
            'Database operations',
            'Workflow execution'
          ]
        },
        {
          name: 'Diamond 11',
          category: 'Fantasy Gaming Platform',
          description: 'Fantasy gaming platform focused on competitive engagement, user interaction workflows, and scalable gaming operations.',
          features: [
            'Fantasy gameplay workflows',
            'User engagement systems',
            'Gaming dashboards',
            'Reward/interaction systems',
            'Competitive gaming flows'
          ],
          contributions: [
            'Product planning discussions',
            'Workflow structuring',
            'Feature ideation support',
            'Frontend/backend support',
            'Database handling support',
            'Gaming interaction workflow discussions',
            'Product differentiation discussions',
            'Smoke testing',
            'Acceptance validation',
            'Feature verification',
            'Product execution support'
          ],
          techFocus: [
            'Gaming workflow systems',
            'Product support',
            'Full-stack contribution',
            'Feature planning',
            'Dashboard systems',
            'Backend support',
            'Smoke testing',
            'Product execution workflows'
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
              Real-world enterprise product execution, cross-functional engineering, and end-to-end workflow ownership.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-[1200px] mx-auto space-y-12">
          {companies.map((company, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up">
              <CompanyCard company={company} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductContributions;
