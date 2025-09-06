import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      {/* Reflection Text Behind Profile Pic */}
      <span
        className="
          absolute
          top-1/3 left-1/2
          -translate-x-1/2 -translate-y-[40%]
          text-[50px] sm:text-[80px] md:text-[120px] lg:text-[160px]
          font-extrabold tracking-widest
          text-black/10 dark:text-white/10
          drop-shadow-2xl
          whitespace-nowrap
          pointer-events-none select-none
          z-0
        "
      >
        𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫
      </span>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image with Neon Glow + Halo */}
          <div className="relative mx-auto mb-8 w-56 h-56 md:w-64 md:h-64">
            {/* Halo Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-3xl animate-pulse"></div>
            
            {/* Profile Pic */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl animate-neon-glow">
              <img
                src="/My_Photos/Aryan Raj formal Pic.png"
                alt="Aryan Raj"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Greeting */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
            Hey There, 👋
          </h2>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-slide-up">
            I'm{' '}
            <span className="bg-gradient-hero bg-clip-text">
              Aryan Raj
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            4th Year Computer Science & Engineering Student at{' '}
            <span className="text-primary font-semibold">Chandigarh Engineering College, CGC-Landran</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-up">
            Passionate about creating innovative solutions, conducting cutting-edge research,
            and building impactful technology that makes a difference.
          </p>

          {/* CTA Buttons (Aligned & Connected) */}
          <div className="flex justify-center items-center animate-scale-in">
            {/* Get In Touch */}
            <a href="#contact">
              <Button 
                size="lg" 
                className="group bg-gradient-hero hover:shadow-glow transition-smooth rounded-l-full rounded-r-none"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>

            {/* Download CV */}
            <a 
              href="/Aryan Raj_resume.pdf" 
              download="Aryan_Raj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="group hover-lift transition-smooth rounded-r-full rounded-l-none border-l-0"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in">
              <div className="text-2xl font-bold text-primary">1+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Research Papers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">Patent Filed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Neon Glow Animation */}
      <style>
        {`
          @keyframes neonPulse {
            0% {
              box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
            }
            50% {
              box-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 80px #ff00ff;
            }
            100% {
              box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
            }
          }

          .animate-neon-glow {
            animation: neonPulse 3s infinite ease-in-out;
            border-radius: 9999px;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
