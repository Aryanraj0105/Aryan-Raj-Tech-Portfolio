import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Award, ExternalLink, Download } from 'lucide-react';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const Research = () => {
  const researchWorks = [
    {
      type: 'Patent',
      title: 'USB Bus Tracking System',
      description: 'An innovative IoT-based system for real-time tracking and monitoring of public transportation using USB-powered devices. The system provides live location updates, route optimization, and passenger information management.',
      status: 'Filed',
      date: '2025',
      category: 'IoT & Security',
      icon: Award,
      link: '#',
      highlights: [
        'Real-Time Anomaly Detection + Encryption (ECDSA with SHA-256)',
        'Machine Learning-Based Device Filtering (SVM)',
        'Secure System Boot & Decentralized Verification',
        'Matches identities with trusted devices for precise recognition, offering better protection than token-based systems.'
      ]
    },
    {
      type: 'Book Chapter',
      title: 'The Convergence of Quantum Computing and Cloud Services',
      description: 'A comprehensive analysis of how quantum computing technologies are being integrated with cloud computing platforms, exploring the challenges, opportunities, and future implications for distributed computing.',
      status: 'Under Review',
      date: '2025',
      category: 'Quantum Computing',
      icon: BookOpen,
      link: '#',
      highlights: [
        'Quantum-cloud integration strategies',
        'Security implications analysis',
        'Performance benchmarking',
        'Future research directions'
      ]
    },
    {
      type: 'Research Paper',
      title: 'A Novel Integrated Framework for IoT Safety: Adaptive AI Alerts, Zero-Trust Architecture, and Quantum-Resistant Cryptography',
      description: 'This research presents a comprehensive security framework for IoT devices that combines machine learning-based threat detection, zero-trust security principles, and post-quantum cryptographic methods.',
      status: 'Under Review',
      date: '2025',
      category: 'IoT Security',
      icon: FileText,
      link: '#',
      highlights: [
        'AI-powered threat detection',
        'Zero-trust security model',
        'Quantum-resistant encryption',
        'Real-time anomaly detection'
      ]
    },
    {
      type: 'Article',
      title: 'A Novel Integrated Framework for IoT Safety',
      description: 'A technical article exploring the implementation details and practical applications of advanced security measures for Internet of Things devices in various industrial and consumer contexts.',
      status: 'Published',
      date: '2025',
      category: 'IoT Security',
      icon: FileText,
      link: '#',
      highlights: [
        'Practical implementation guide',
        'Industry use cases',
        'Performance evaluation',
        'Best practices'
      ]
    }
  ];

  return (
    <section id="research" className="py-24 relative overflow-hidden bg-background">
      <AmbientBackground />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Research Work
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Exploring cutting-edge technologies through patents, publications, and innovative research projects.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
          {researchWorks.map((work, index) => {
            const Icon = work.icon;
            return (
              <FadeIn key={index} delay={index * 0.2}>
                <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-teal-500/10 transition-colors">
                        <Icon className="h-6 w-6 text-teal-500" />
                      </div>
                      <div>
                        <div className="flex gap-2 mb-1">
                          <Badge variant="secondary" className="bg-muted text-muted-foreground">
                            {work.type}
                          </Badge>
                          <Badge variant="outline" className="border-border/50">
                            {work.status}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {work.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-teal-500 transition-colors">
                    {work.title}
                  </h3>

                  {/* Category */}
                  <Badge variant="outline" className="mb-4 w-fit bg-background/50 text-muted-foreground">
                    {work.category}
                  </Badge>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {work.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-card-foreground">Key Highlights</h4>
                    <ul className="space-y-2">
                      {work.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-teal-500/50 rounded-full mr-2.5 mt-1.5 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-border/50">
                    <Button variant="default" className="flex-1 shadow-sm bg-teal-500 hover:bg-teal-600 text-white" asChild>
                      <a href={work.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Details
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-background hover:bg-muted">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>

        {/* Research Stats */}
        <FadeIn delay={0.4} direction="up">
          <div className="mt-20 max-w-[1400px] mx-auto">
            <Card className="p-8 bg-card/80 backdrop-blur-md border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Research Impact</h3>
                <p className="text-muted-foreground">Contributions to the academic and research community</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-teal-500 mb-2">1</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Patent Filed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-500 mb-2">3+</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Publications</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-500 mb-2">2</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Research Areas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-500 mb-2">2024</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Active Year</div>
                </div>
              </div>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Research;