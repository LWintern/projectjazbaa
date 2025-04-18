import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70">
        <img 
          src="/assets/Artboard 1 copy 2.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Content */}
      {/* <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to Our Website</h1>
        <p className="text-xl text-white/90 mb-8">
          A stunning full-width and full-height hero section to capture attention and showcase your brand.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
          Get Started
        </button>
      </div> */}
    </div>
  );
}