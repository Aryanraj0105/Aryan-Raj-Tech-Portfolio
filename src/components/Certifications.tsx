import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, Eye, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import DocumentModal from './DocumentModal';
import { FadeIn } from './ui/fade-in';
import AmbientBackground from './AmbientBackground';

const Certifications = () => {
  const [selectedDoc, setSelectedDoc] = useState<{title: string, url: string, type: 'image' | 'pdf' | 'link'} | null>(null);

  // Scalable data structure for certificates/proofs
  const certifications = [
    {
      title: 'React JS Free Course',
      issuer: 'Scaler Topics',
      year: '2025',
      category: 'Web Development',
      documentUrl: '/My_Photos/React.js Certification.png',
      documentType: 'image' as const,
      skills: ['React', 'Frontend Development']
    },
    {
      title: 'Introduction to Deep Learning',
      issuer: 'Infosys',
      year: '2025',
      category: 'AI/ML',
      documentUrl: '/Deep learning Certificate.pdf',
      documentType: 'pdf' as const,
      skills: ['Deep Learning', 'Neural Networks', 'Python']
    },
    {
      title: 'AI Certification',
      issuer: 'Infosys',
      year: '2025',
      category: 'AI/ML',
      documentUrl: '/AI Certification.pdf',
      documentType: 'pdf' as const,
      skills: ['AI', 'Machine Learning']
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <AmbientBackground variant="neutral" />
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-[1400px] mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Certifications & Proofs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Validated expertise, internship proofs, and achievements.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto mb-16">
          {certifications.map((cert, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="flex flex-col p-6 glass border-gradient hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                    <Award className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {cert.category}
                  </Badge>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-lg font-bold mb-2 text-card-foreground group-hover:text-teal-500 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-foreground">{cert.issuer}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {cert.year}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 mt-auto relative z-10">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-muted-foreground hover:text-teal-500 hover:bg-teal-500/10 transition-colors"
                    onClick={() => setSelectedDoc({ title: cert.title, url: cert.documentUrl, type: cert.documentType })}
                  >
                    {cert.documentType === 'link' ? (
                      <><ExternalLink className="h-4 w-4 mr-2" /> Verify Certificate</>
                    ) : (
                      <><Eye className="h-4 w-4 mr-2" /> View Document</>
                    )}
                  </Button>
                </div>
              </Card>
            </FadeIn>
          ))}
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

export default Certifications;