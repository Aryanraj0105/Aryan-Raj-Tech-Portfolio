import { FC } from 'react';
import { motion } from 'framer-motion';

interface AmbientBackgroundProps {
  variant?: 'hero' | 'grid' | 'neutral' | 'cards';
}

const AmbientBackground: FC<AmbientBackgroundProps> = ({ variant = 'neutral' }) => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise mix-blend-overlay z-10" />

      {variant === 'grid' && (
        <div className="absolute inset-0 bg-grid-slate z-0" style={{ maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)' }} />
      )}

      {/* Cinematic Hero Variants */}
      {variant === 'hero' && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-slate opacity-30 z-0" style={{ maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)' }} />
          
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] rounded-full bg-primary/20 blur-[140px]" 
          />
          
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute top-[20%] right-[-10%] w-[45%] h-[55%] rounded-full bg-blue-600/15 blur-[150px]" 
          />

          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              x: [0, 40, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute bottom-[-10%] left-[20%] w-[35%] h-[40%] rounded-full bg-indigo-500/10 blur-[130px]" 
          />
        </>
      )}

      {/* Cards Variant (Projects/Experience) */}
      {variant === 'cards' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-[30%] h-[30%] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        </>
      )}

      {/* Grid Variant (Skills) */}
      {variant === 'grid' && (
        <>
          <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        </>
      )}

      {/* Neutral Variant (Contact, About, etc) */}
      {variant === 'neutral' && (
        <>
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-slate-800/30 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        </>
      )}
    </div>
  );
};

export default AmbientBackground;
