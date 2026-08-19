import React from 'react';
import { motion } from 'motion/react';
import { Translation } from '../data/translations';

interface HeroVisualProps {
  t: Translation;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ t }) => {
  return (
    <div
      id="hero-visual-container"
      className="flex flex-col items-center justify-center max-w-[700px] w-full text-center px-2 py-4 select-none"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[38px] sm:text-[46px] lg:text-[52px] leading-[1.12] font-extrabold tracking-tight text-neutral-900 mb-8 max-w-[600px]"
      >
        <span>{t.heroTitle1} </span>
        <br className="hidden sm:inline" />
        {t.heroYour && <span className="text-neutral-900">{t.heroYour} </span>}
        <span className="bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#E1306C] bg-clip-text text-transparent">
          {t.heroClose}{' '}
        </span>
        <span className="bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] bg-clip-text text-transparent">
          {t.heroFriends}
        </span>
      </motion.h1>

      {/* Official Instagram Friends Stories Illustration Graphic (Enlarged) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative w-full max-w-[590px] flex items-center justify-center"
      >
        <img
          id="instagram-friends-hero-image"
          src="https://static.cdninstagram.com/rsrc.php/yR/r/92ZsVHNkyvf.webp"
          alt="See everyday moments from your close friends"
          className="w-full h-auto max-h-[580px] object-contain drop-shadow-md transition-transform hover:scale-[1.02] duration-300 pointer-events-none"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
};
