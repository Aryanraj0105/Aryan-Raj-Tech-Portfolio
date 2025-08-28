import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Award, ExternalLink, Download } from 'lucide-react';

const Research = () => {
  const researchWorks = [
    {
      type: 'Patent',
      title: 'USB Bus Tracking System',
      description: 'An innovative IoT-based system for real-time tracking and monitoring of public transportation using USB-powered devices. The system provides live location updates, route optimization, and passenger information management.',
      status: 'Filed',
      date: '2024',
      category: 'IoT & Securitu',
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'published':
        return 'bg-green-500/10 text-green-700 border-green-500/30';
      case 'filed':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/30';
      case 'under review':
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/30';
      default:
        return 'bg-gray-500/10 text-gray-700 border-gray-500/30';
    }
  };

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Research <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring cutting-edge technologies through patents, publications, and innovative research projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {researchWorks.map((work, index) => {
            const Icon = work.icon;
            return (
              <Card key={work.title} className="p-8 hover-lift transition-smooth group bg-gradient-card">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {work.type}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`${getStatusColor(work.status)} border`}
                      >
                        {work.status}
                      </Badge>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {work.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-fast">
                  {work.title}
                </h3>

                {/* Category */}
                <Badge variant="secondary" className="mb-4">
                  {work.category}
                </Badge>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {work.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {work.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button variant="default" size="sm" className="flex-1" asChild>
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Research Stats */}
        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-2">Research Impact</h3>
              <p className="text-muted-foreground">Contributions to the academic and research community</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-muted-foreground">Patent Filed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Research Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Active Year</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;