



'use client'

import { useState } from 'react'
import Footer2 from './Footer2'

export default function Footer() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)

  return ( 
    <div className='bg-black'>
      <div className=" py-6 md:py-8 lg:py-12 max-w-7xl mx-auto px-4 flex items-center justify-start">
        <div className="text-center w-full">
          <h1 className="text-[40px] sm:text-[80px] md:text-[120px] lg:text-[180px] leading-[0.85] font-bold tracking-tighter cursor-default"> 
            <span 
              className={`text-transparent transition-all duration-300 ${
                hoveredWord === 'THE' 
                  ? '[-webkit-text-stroke:1px_#ff0000] sm:[-webkit-text-stroke:2px_#ff0000] md:[-webkit-text-stroke:3px_#ff0000] lg:[-webkit-text-stroke:4px_#ff0000]' 
                  : '[-webkit-text-stroke:1px_#333333] sm:[-webkit-text-stroke:2px_#333333] md:[-webkit-text-stroke:3px_#333333] lg:[-webkit-text-stroke:4px_#333333]'
              }`}
              onMouseEnter={() => setHoveredWord('THE')}
              onMouseLeave={() => setHoveredWord(null)}
            >
              THE&nbsp;
            </span> 
            <span 
              className={`transition-colors duration-300 ${
                hoveredWord === 'CREATOR' ? 'text-[#ff0000]' : 'text-gray-700'
              }`}
              onMouseEnter={() => setHoveredWord('CREATOR')}
              onMouseLeave={() => setHoveredWord(null)}
            >
              CREATOR
            </span> 
            <br />
            <span 
              className={`text-transparent transition-all duration-300 ${
                hoveredWord === 'GATHERING' 
                  ? '[-webkit-text-stroke:1px_#ff0000] sm:[-webkit-text-stroke:2px_#ff0000] md:[-webkit-text-stroke:3px_#ff0000] lg:[-webkit-text-stroke:4px_#ff0000]' 
                  : '[-webkit-text-stroke:1px_#333333] sm:[-webkit-text-stroke:2px_#333333] md:[-webkit-text-stroke:3px_#333333] lg:[-webkit-text-stroke:4px_#333333]'
              }`}
              onMouseEnter={() => setHoveredWord('GATHERING')}
              onMouseLeave={() => setHoveredWord(null)}
              style={{
                letterSpacing: 'calc(0.3vw + 4px)', // Responsive letter spacing
                padding: '0 calc(0.5vw + 5px)', // Responsive padding
              }}
            >
              GATHERING
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}