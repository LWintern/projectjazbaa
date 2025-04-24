import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden" id='Hero'>
      {/* Background image with overlay - optimized for all screen types */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70">
        <img 
          src="/assets/Artboard 1 copy 2 (2).jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
    </div>
  );
}