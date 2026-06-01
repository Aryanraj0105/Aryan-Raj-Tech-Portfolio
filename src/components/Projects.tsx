import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Monitor, LayoutDashboard, Brain, Database, FileText, Layers, Bot, Workflow, ChevronDown, ChevronUp, Star, Zap } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';
import { useState } from 'react';

const ArchitectureVisualization = () => {
  return (
    <div className="mt-8 p-8 rounded-2xl bg-black/40 border border-teal-500/20 relative overflow-hidden group shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 -z-10 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
      
      <h4 className="text-xl font-bold text-foreground mb-10 flex items-center justify-center gap-2">
        <Workflow className="w-6 h-6 text-teal-400" /> RAG Architecture Pipeline
      </h4>
      
      <div className="flex flex-col items-center text-sm font-bold tracking-wide w-full">
        {/* Step 1 */}
        <div className="w-full max-w-md p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-center text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.1)] flex items-center justify-center gap-2">
          User Query
        </div>
        
        {/* Arrow */}
        <div className="h-8 w-0.5 bg-gradient-to-b from-teal-500/50 to-purple-500/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-pulse"></div>
        </div>
        
        {/* Step 2 */}
        <div className="w-full max-w-md p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center text-purple-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
          <Workflow className="w-5 h-5" /> Flowise Workflow
        </div>
        
        {/* Arrow */}
        <div className="h-8 w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-pulse"></div>
        </div>
        
        {/* Step 3: Branching */}
        <div className="w-full max-w-md p-5 rounded-xl bg-blue-500/5 border border-blue-500/20 relative">
          <div className="text-center text-blue-400 mb-4 text-xs uppercase tracking-widest font-extrabold">Hybrid Retrieval Layer</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center text-blue-300 flex flex-col items-center justify-center gap-2 hover:bg-blue-500/20 transition-colors shadow-sm">
              <FileText className="w-6 h-6" />
              <span className="text-xs">CSV Analytics</span>
            </div>
            <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-center text-indigo-300 flex flex-col items-center justify-center gap-2 hover:bg-indigo-500/20 transition-colors shadow-sm">
              <Layers className="w-6 h-6" />
              <span className="text-xs">PDF Policies</span>
            </div>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="h-8 w-0.5 bg-gradient-to-b from-blue-500/50 to-pink-500/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-pulse"></div>
        </div>
        
        {/* Step 4 */}
        <div className="w-full max-w-md p-4 rounded-xl bg-pink-500/10 border border-pink-500/30 text-center text-pink-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
          <Database className="w-5 h-5" /> OpenAI Embeddings & Vector DB
        </div>
        
        {/* Arrow */}
        <div className="h-8 w-0.5 bg-gradient-to-b from-pink-500/50 to-amber-500/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-pulse"></div>
        </div>
        
        {/* Step 5 */}
        <div className="w-full max-w-md p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center text-amber-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
          <Bot className="w-5 h-5" /> GPT-4o Reasoning Engine
        </div>
        
        {/* Arrow */}
        <div className="h-8 w-0.5 bg-gradient-to-b from-amber-500/50 to-emerald-500/50 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-pulse"></div>
        </div>
        
        {/* Final Step */}
        <div className="w-full max-w-md p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-center text-emerald-400 font-extrabold text-lg shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2">
          <Zap className="w-5 h-5 fill-emerald-400" /> Context-Aware Response
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isArchitectureExpanded, setIsArchitectureExpanded] = useState(false);

  const featuredProject = {
    title: 'Supplier Intelligence Assistant',
    label: 'Featured AI Project',
    category: 'Enterprise AI Solution | GenAI | RAG',
    role: 'AI Engineer & Solution Developer',
    description: 'Built an AI-powered Supplier Intelligence Assistant using Retrieval-Augmented Generation (RAG), OpenAI GPT-4o, Flowise, and Vector Database architectures to analyze supplier performance, governance policies, compliance risks, and operational disruptions through contextual AI reasoning.',
    description2: 'The system intelligently combines structured supplier datasets with unstructured policy documents to deliver enterprise-grade question-answering and supplier intelligence workflows.',
    technologies: ['Flowise', 'OpenAI GPT-4o', 'OpenAI Embeddings', 'RAG', 'Vector Databases', 'Python', 'CSV Analytics', 'Prompt Engineering', 'PDF Knowledge Base', 'Document Intelligence'],
    badges: ['GenAI', 'RAG', 'OpenAI', 'Flowise', 'Vector Database', 'AI Engineering', 'Enterprise AI', 'Document Intelligence', 'Prompt Engineering', 'LLM Application'],
    businessCases: [
      'Supplier Performance Analysis',
      'Governance Policy Retrieval',
      'Compliance Monitoring',
      'Risk Evaluation',
      'Disruption Assessment',
      'Supplier Intelligence Workflows',
      'Context-Aware Decision Support'
    ],
    techHighlights: [
      'Developed AI workflow pipelines using Flowise',
      'Integrated OpenAI GPT-4o for contextual reasoning',
      'Implemented Retrieval-Augmented Generation (RAG)',
      'Built hybrid retrieval architecture combining CSV & PDF',
      'Configured semantic search using OpenAI Embeddings',
      'Implemented Vector Database retrieval pipelines',
      'Designed enterprise-level QA workflows',
      'Improved retrieval relevance using chunking and embedding strategies',
      'Built contextual supplier intelligence reasoning workflows'
    ],
    github: 'https://github.com/Aryanraj0105/scm-assistant-bot?utm_source=chatgpt.com',
    icon: Brain,
  };

  const otherProjects = [
    {
      title: 'ZudoCampus',
      description: 'A comprehensive student-focused digital ecosystem platform. Optimized navigation and implemented KPI-based workflow improvements for enhanced user engagement.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      category: 'Digital Ecosystem Platform',
      icon: Monitor,
      demoLink: '#',
      codeLink: '#',
      features: [
        'Event Management System',
        'Tutor Marketplace',
        'Second-Hand Marketplace',
        'Cafe Booking System',
        'KPI-Based Workflow Improvements'
      ]
    },
    {
      title: 'EduFlow ERP',
      description: 'An enterprise resource planning platform tailored for schools and colleges. Built with a scalable multi-module architecture to automate administrative tasks.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js'],
      category: 'ERP Platform',
      icon: LayoutDashboard,
      demoLink: '#',
      codeLink: '#',
      features: [
        'Multi-Module Architecture',
        'Comprehensive Dashboard Systems',
        'Attendance Automation',
        'Notice Management',
        'Role-Based Permission Systems'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="cards" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
              Showcasing enterprise AI solutions, full-stack applications, and product execution across different domains.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
          
          {/* TOP FEATURED AI PROJECT */}
          <FadeIn delay={0.1} direction="up">
            <Card className="group overflow-hidden glass border-gradient shadow-[0_0_40px_rgba(20,184,166,0.1)] hover:shadow-[0_0_60px_rgba(20,184,166,0.2)] transition-all duration-700 relative">
              {/* Animated AI Gradient Glow */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] -z-10 group-hover:bg-teal-500/20 transition-all duration-700 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-purple-500/20 transition-all duration-700 pointer-events-none"></div>
              
              <div className="p-8 md:p-12 relative z-10 flex flex-col lg:flex-row gap-12">
                
                {/* Left Column: Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <Badge className="bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 border border-teal-500/50 px-3 py-1 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                      <Star className="w-3.5 h-3.5" fill="currentColor" /> {featuredProject.label}
                    </Badge>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground px-3 py-1 text-xs font-semibold border-white/5">
                      {featuredProject.category}
                    </Badge>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    {featuredProject.title}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 text-teal-400 font-semibold mb-6 bg-teal-500/10 px-4 py-1.5 rounded-full border border-teal-500/20">
                    <Brain className="w-4 h-4" />
                    {featuredProject.role}
                  </div>

                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed font-medium">
                    {featuredProject.description}
                  </p>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">
                    {featuredProject.description2}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div>
                      <h4 className="font-bold mb-5 text-sm text-card-foreground uppercase tracking-wider flex items-center gap-2">
                        <Monitor className="w-4 h-4 text-teal-500" /> Business Use Cases
                      </h4>
                      <ul className="grid gap-3">
                        {featuredProject.businessCases.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm md:text-base text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(20,184,166,0.8)]"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-5 text-sm text-card-foreground uppercase tracking-wider flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-purple-400" /> Technical Highlights
                      </h4>
                      <ul className="grid gap-3">
                        {featuredProject.techHighlights.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm md:text-base text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.8)]"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Badges */}
                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-xs text-muted-foreground uppercase tracking-wider">Project Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.badges.map((badge) => (
                        <Badge key={badge} variant="outline" className="bg-teal-500/5 text-teal-400 border-teal-500/30 font-semibold px-3 py-1.5 hover:bg-teal-500/10 transition-colors">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-10">
                    <h4 className="font-bold mb-4 text-xs text-muted-foreground uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10 text-foreground border-white/10 px-3 py-1.5 transition-colors font-semibold">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Architecture Button */}
                  <Button 
                    variant="outline" 
                    onClick={() => setIsArchitectureExpanded(!isArchitectureExpanded)}
                    className="w-full sm:w-auto font-bold tracking-wide border-teal-500/30 hover:border-teal-400 text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 bg-background/50 backdrop-blur-sm transition-all duration-300 shadow-sm"
                  >
                    {isArchitectureExpanded ? 'Hide Architecture' : 'View System Architecture'}
                    {isArchitectureExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                  
                  {/* Expandable Architecture Visualization */}
                  <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isArchitectureExpanded ? 'max-h-[1200px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <ArchitectureVisualization />
                  </div>
                </div>

                {/* Right Column: CTA & Status */}
                <div className="lg:w-[360px] shrink-0 flex flex-col gap-6">
                  {/* Repository Status Card */}
                  <div className="p-8 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden group/repo shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10 opacity-0 group-hover/repo:opacity-100 transition-opacity duration-500"></div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center border border-white/10 shadow-sm group-hover/repo:scale-110 transition-transform duration-300">
                        <Github className="w-8 h-8 text-foreground" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-foreground text-xl">Repository</h4>
                        <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mt-1">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                          </span>
                          Public / Open Source
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-8 font-medium relative z-10 leading-relaxed">
                      Explore the source code, RAG implementation, and enterprise workflows.
                    </p>
                    <Button className="w-full font-bold text-md h-12 shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all bg-teal-500 hover:bg-teal-400 text-black hover:-translate-y-1 duration-300 relative z-10" asChild>
                      <a href={featuredProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" /> View Source Code
                      </a>
                    </Button>
                  </div>
                </div>

              </div>
            </Card>
          </FadeIn>

          {/* OTHER PROJECTS GRID */}
          <div className="grid lg:grid-cols-2 gap-10">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <FadeIn key={project.title} delay={0.2 + (index * 0.1)}>
                  <Card className="group h-full overflow-hidden glass border-gradient hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
                    <div className="p-8 flex-1 relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors border border-white/5">
                          <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="bg-muted text-muted-foreground border-white/5 font-semibold">
                          {project.category}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed font-medium">
                        {project.description}
                      </p>

                      <div className="space-y-6 mb-8">
                        <div>
                          <h4 className="font-bold mb-3 text-sm text-card-foreground uppercase tracking-wider">Core Features</h4>
                          <ul className="grid grid-cols-1 gap-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-muted-foreground font-medium">
                                <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold mb-3 text-sm text-card-foreground uppercase tracking-wider">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="bg-background/50 border-white/10 text-muted-foreground hover:border-white/30 transition-colors font-semibold"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border-t border-white/5 bg-black/20 flex gap-4 mt-auto relative z-10">
                      {project.demoLink !== '#' && (
                        <Button className="flex-1 font-semibold shadow-sm hover:shadow-md transition-all bg-white/10 hover:bg-white/20 text-white border-0" asChild>
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" className="flex-1 font-semibold bg-background/50 hover:bg-muted transition-colors border-white/10" asChild>
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> Source Code
                        </a>
                      </Button>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>

        <FadeIn delay={0.4} direction="up">
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="rounded-full px-8 shadow-sm hover:shadow-md transition-all border-teal-500/30 hover:border-teal-500 hover:bg-teal-500/5 font-bold tracking-wide" asChild>
              <a href="https://github.com/Aryanraj0105/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View All on GitHub
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;