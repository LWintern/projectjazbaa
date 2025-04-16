

import React from 'react';

export default function AIInnovationPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4">
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Main content */}
      <div className="container max-w-6xl z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-10">
            Building What&apos;s <span className="text-cyan-400">Next!</span>
          </h1>
          
          <p className="text-lg max-w-4xl mx-auto">
            AI isn&apos;t just advancing—it&apos;s <span className="italic">disrupting, evolving, and reshaping industries</span> at an unprecedented pace. Each innovation ripples outward, creating a massive AI-powered ocean <span className="italic">where you either learn to surf or risk being left behind</span>.
          </p>
          
          <p className="text-lg mt-6 max-w-4xl mx-auto">
            We don&apos;t wait, we anticipate shifts and <span className="italic">build talent for what&apos;s next</span>. The focus is on high-impact sectors, creating scalable talent pipelines and leveraging India&apos;s deep talent pool through flexible, industry-tailored models....
          </p>
        </div>
        
        <h2 className="text-2xl font-bold my-16 text-center">
          While others adapt, we build what&apos;s next!
        </h2>
        
        {/* Vision and Mission cards */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Vision Card */}
          <div className="flex-1 bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 text-left">
            <h3 className="text-2xl text-rose-300 text-center mb-4">Our Vision</h3>
            
            <div className="flex justify-center items-center my-4">
              <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-300 to-rose-300 mx-1"></div>
              <div className="w-2 h-2 rounded-full bg-rose-300"></div>
            </div>
            
            <div className="space-y-4">
              <p>
                To establish India as the global hub of AI innovation—where talent, technology, and tradition shape the future.
              </p>
              
              <p>
                From Aryabhata&apos;s legacy to today&apos;s AI revolution, India has always been a beacon of intellectual leadership. Now, we aim not just to adopt AI but to lead its evolution, leveraging our vast talent and ingenuity to drive world-changing breakthroughs.
              </p>
              
              <p>
                From India to the world, we are igniting the next technological AI revolution.
              </p>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="flex-1 bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 text-left">
            <h3 className="text-2xl text-amber-300 text-center mb-4">Our Mission</h3>
            
            <div className="flex justify-center items-center my-4">
              <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-300 to-rose-300 mx-1"></div>
              <div className="w-2 h-2 rounded-full bg-rose-300"></div>
            </div>
            
            <div className="space-y-4">
              <p>
                To transform India into a global AI leader by bridging the gap between raw talent and world-class impact. We build cutting-edge AI solutions rooted in Indian ingenuity, empowering individuals and institutions through upskilling, industry-aligned training, and real-world applications.
              </p>
              
              <p>
                From uncovering hidden talent to creating global AI pipelines, we ensure the next breakthroughs don&apos;t just come to India—they come from India. Together, we are shaping a future where India defines the rules of innovation and stands tall as a global AI powerhouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}