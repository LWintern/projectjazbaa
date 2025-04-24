import React from 'react';

export default function AIInnovationPage() {
  return (
    <div
    className="relative min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4"
    style={{
      backgroundImage: "url('/assets/logo_LW.png')",
      backgroundSize: '800px', // medium size
      backgroundPosition: 'bottom right', // right and vertically centered
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Dark overlay to enhance readability */}
    <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />
  
    {/* Background dots pattern */}
    <div
      className="absolute inset-0 opacity-30 pointer-events-none z-0"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255, 255, 255, 0.23) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}
    ></div>
  

      {/* Main content */}
      <div className="container max-w-6xl z-10 relative" id='AboutLinuxWorld'>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-10">
            Building What&apos;s <span className="text-cyan-400">Next!</span>
          </h1>

          <p className="text-lg max-w-4xl mx-auto">
            AI isn&apos;t just advancing—it&apos;s{' '}
            <span className="italic">
              disrupting, evolving, and reshaping industries
            </span>{' '}
            at an unprecedented pace. Each innovation ripples outward, creating a
            massive AI-powered ocean{' '}
            <span className="italic">
              where you either learn to surf or risk being left behind
            </span>
            .
          </p>

          <p className="text-lg mt-6 max-w-4xl mx-auto">
            We don&apos;t wait, we anticipate shifts and{' '}
            <span className="italic">build talent for what&apos;s next</span>. The
            focus is on high-impact sectors, creating scalable talent pipelines and
            leveraging India&apos;s deep talent pool through flexible,
            industry-tailored models....
          </p>
        </div>

        <h2 className="text-2xl font-bold my-16 text-center">
          While others adapt, we build what&apos;s next!
        </h2>

        {/* Vision and Mission cards */}
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Vision Card */}
          <div className="flex-1 bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 text-left">
            <h3 className="text-2xl text-rose-300 text-center mb-4">The Present</h3>

            <div className="flex justify-center items-center my-4">
              <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-300 to-rose-300 mx-1"></div>
              <div className="w-2 h-2 rounded-full bg-rose-300"></div>
            </div>

            <div className="space-y-4">
              <p>
                Transforming Engineers into the Technology Creators by developing an entrepreneurial mindset and inclating technical competencies to innovate and produce products accepted globally.
              </p>


            </div>
          </div>

          {/* Mission Card */}
          <div className="flex-1 bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 text-left">
            <h3 className="text-2xl text-amber-300 text-center mb-4">The Future</h3>

            <div className="flex justify-center items-center my-4">
              <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-300 to-rose-300 mx-1"></div>
              <div className="w-2 h-2 rounded-full bg-rose-300"></div>
            </div>

            <div className="space-y-4">
              <p>
                We will be at the foefront of the India AI Mission,driving innovation and technological advancement in the field of Artificial Intelligence.
              </p>
              <p>
                Soon Indians to be known as "Creators in the Technology Space"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
