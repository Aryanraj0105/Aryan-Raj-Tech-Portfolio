import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { useState } from 'react';
import ResumeModal from './ResumeModal';
import AmbientBackground from './AmbientBackground';

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-32 pb-16 overflow-hidden w-full" id="about">
      <AmbientBackground variant="hero" />
      
      {/* Premium Background Typography Watermark */}
      <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 w-full max-w-[100vw] flex justify-center pointer-events-none select-none z-0">
        <div className="relative">
          <div className="animate-in fade-in slide-in-from-left-32 duration-[1500ms] ease-out" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            {/* Main Text with Gradient Fill & Depth Blur */}
            <div className="text-[12vw] md:text-[14vw] lg:text-[16vw] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-foreground/[0.15] via-foreground/[0.06] to-transparent dark:from-foreground/[0.12] dark:via-foreground/[0.04] dark:to-transparent blur-[1px] opacity-90 whitespace-nowrap px-4">
              Developer
            </div>
            
            {/* Ambient Glow Behind Text */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-purple-500/10 to-transparent blur-[60px] -z-10 animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-center flex-1">
        
        {/* Profile Image with 3-Color Glowing Gradients */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 group animate-float cursor-pointer" onClick={() => setIsResumeModalOpen(true)}>
          {/* Subtle but amuse effects: glowing orbs */}
          <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-teal-400 to-amber-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-teal-400/30 rounded-full animate-spin-slow"></div>
          
          <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-background shadow-2xl relative z-10 bg-muted/20 transform transition-transform duration-500 group-hover:scale-105">
            <img
              src="/My_Photos/Aryan Raj formal Pic.png"
              alt="Aryan Raj"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center animate-slide-up max-w-4xl px-4">
          <p className="text-lg md:text-xl font-medium text-muted-foreground mb-4">
            Hey There, <span className="inline-block animate-wave origin-bottom-right">👋</span>
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-foreground">
            I'm Aryan Raj
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground mb-6 leading-relaxed">
            4th Year Computer Science & Engineering Student at <br className="hidden md:block" />
            <span className="text-teal-500 font-bold">Chandigarh Engineering College, CGC-Landran</span>
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions, conducting cutting-edge research, and building impactful technology that makes a difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto font-medium shadow-md transition-all hover:shadow-lg bg-teal-500 hover:bg-teal-600 text-white border-0" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass w-full sm:w-auto font-medium transition-all hover:shadow-md hover:bg-white/5" asChild>
              <a href="/Aryan_Raj_Tech_Resume.pdf" download="Aryan_Raj_Tech_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="relative mt-16 flex justify-center animate-bounce text-muted-foreground z-10 hidden sm:flex">
        <ArrowDown className="h-5 w-5" />
      </div>

      {/* Stats Section at the bottom */}
      <div className="w-full border-t border-white/5 mt-12 py-8 glass z-10 relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-teal-500 mb-2">1+</span>
              <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-teal-500 mb-2">5+</span>
              <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-teal-500 mb-2">3+</span>
              <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">Research Papers</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl md:text-4xl font-extrabold text-teal-500 mb-2">1</span>
              <span className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">Patent Filed</span>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
};

export default Hero;
