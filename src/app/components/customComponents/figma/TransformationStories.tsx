// components/TransformationStories.tsx
"use client"

import { useState, useEffect } from 'react'
import Image from 'next/legacy/image'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

interface StoryContent {
  title: string
  description: string
  imageUrl: string
}

interface CardConfig {
  id: number
  position: 'top' | 'middle' | 'bottom'
  contents: StoryContent[]
}

// Define content for each card position
const cardConfigs: CardConfig[] = [
  {
    id: 1,
    position: 'bottom',
    contents: [
      {
        title: "DEEPAK MAURYA ",
        description: "FOUNDER OF STARTUP - POKET SHIP",
        imageUrl: "/assets/stats/poketship.jpg"
      },
    
      // Add more content items for card 1
    ]
  },
  {
    id: 2,
    position: 'middle',
    contents: [
      {
        title: "LAKSHYA JAIN",
        description: "FOUNDER OF STARTUP - KEPLR",
        imageUrl: "/assets/stats/keplr.jpg"
      },
    
      // Add more content items for card 2
    ]
  },
  {
    id: 3,
    position: 'bottom',
    contents: [
      {
        title: "ABHISHEK KHANDAL",
        description: "Summer Intern listed at Forbes 30 under 30",
        imageUrl: "/assets/stats/Abhishek.jpg"
      },
     
      // Add more content items for card 3
    ]
  }
]

const StoryCard = ({ 
  config,
  className 
}: { 
  config: CardConfig
  className?: string
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (config.contents.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % config.contents.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [config.contents.length])

  const content = config.contents[currentIndex]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex flex-col">
        {config.position === 'middle' && (
          <div className="text-center p-4 bg-white h-[250px] flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{content.title}</h3>
            <p className="text-sm text-gray-600">{content.description}</p>
            <ChevronDown className="w-6 h-6 mx-auto mt-2  text-gray-600" />
          </div>
        )}
        
        <div className="relative h-[350px] w-full bg-red-100">
          <Image
            src={content.imageUrl}
            alt={content.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {(config.position === 'top' || config.position === 'bottom') && (
          <div className="text-center p-4 bg-white h-[300px] flex flex-col justify-center">
            <ChevronDown className="w-6 h-6 mx-auto mb-2 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{content.title}</h3>
            <p className="text-sm text-gray-600">{content.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export function TransformationStories() {
  return (
    <div className="w-full bg-black py-12" id='careertransformation'>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          TRANSFORMATION STORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
          {cardConfigs.map((config) => (
            <div 
              key={config.id}
              className="transform transition-all duration-500"
            >
              <StoryCard config={config} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}