




 
// components/CareerSchools.tsx
"use client"

import { useState, useEffect } from "react"
import Image from "next/legacy/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { cardData } from "../../../../../data/journeyData"

// Define interfaces locally
interface Position {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  translateX?: string;
  translateY?: string;
}

interface CenterDetails {
  name: string;
  address: string;
  email: string;
  image: string;
  description: string;
}

interface CardData {
  icon: JSX.Element;
  title: string;
  position: number;
  customPosition: Position;
  mobilePosition: Position;
  className?: string;
  centerDetails: CenterDetails;
}

// Update ProcessCardProps
interface ProcessCardProps {
  icon: JSX.Element;
  title: string;
  customPosition: Position;
  mobilePosition: Position;
  className?: string;
  onClick: () => void;
  isActive: boolean;
}

// Rest of your component code remains the same...
const ProcessCard = ({ 
  icon, 
  title, 
  customPosition,
  mobilePosition, 
  className = "", 
  onClick,
  isActive 
}: ProcessCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const position = isMobile ? mobilePosition : customPosition;
  const styles = {
    ...position,
    transform: `translate(${position?.translateX || '0'}, ${position?.translateY || '0'})`
  };

  return (
    <div 
      className={`
        w-[80px] sm:w-[100px] cursor-pointer
        ${isMobile ? 'static' : 'absolute'}
        ${className}
      `}
      style={styles}
      onClick={onClick}
    >
      <Card className={`bg-black rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isActive ? 'ring-2 ring-emerald-600 shadow-lg' : 'shadow-md'
      }`}>
        <CardContent className="p-0">
          <div className="aspect-square relative bg-gray-50 flex items-center justify-center">
            {icon}
          </div>
          <div className="p-2 sm:p-4 text-center">
            <h3 className="font-semibold text-xs text-white sm:text-sm">{title}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const CenterDetailsCard = ({ details }: { details: CenterDetails }) => (
  <Card className="bg-white rounded-xl overflow-hidden shadow-lg">
    <CardContent className="p-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="md:order-2 relative h-[200px] sm:h-[240px] md:h-[300px] rounded-lg overflow-hidden">
          <Image
            src={details.image}
            alt={details.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>

        <div className="md:order-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
            {details.name}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            {details.description}
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            {details.address}
          </p>

          <Button variant="outline" className="mb-4 text-sm sm:text-base">
            <span className="mr-2">Get Direction</span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-4 sm:h-4"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Button>

          <div className="flex items-center mb-4">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-500" />
            <a 
              href={`mailto:${details.email}`}
              className="text-sm sm:text-base text-emerald-600 hover:underline"
            >
              {details.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-gray-300 text-sm sm:text-base">
              View Programs
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function CareerSchools() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sortedCards = [...cardData].sort((a, b) => a.position - b.position);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[950px] md:min-h-screen lg:min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[80%] bg-black ">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="0" cy="0" r="5" fill="white" />
              <circle cx="100" cy="0" r="5" fill="white" />
              <circle cx="0" cy="100" r="5" fill="white" />
              <circle cx="100" cy="100" r="5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            OUR TRAINING PROGRAMS
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-blue-200">
            Comprehensive Linux and cloud computing education for the modern tech landscape
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="md:hidden">
            <div className="flex justify-around mb-8">
              {sortedCards.map((card, index) => (
                <ProcessCard
                  key={index}
                  {...card}
                  onClick={() => setActiveCardIndex(index)}
                  isActive={activeCardIndex === index}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:block relative h-[300px]">
            <svg
              className="absolute top-0 left-0 w-full h-full z-0"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <path
                d="M 50,80 Q 350,200 600,60"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M 600,60 Q 800,160 950,80"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                opacity="0.3"
              />
            </svg>

            {sortedCards.map((card, index) => (
              <ProcessCard
                key={index}
                {...card}
                onClick={() => setActiveCardIndex(index)}
                isActive={activeCardIndex === index}
              />
            ))}

            <div className="absolute top-[40%] left-[4%] w-4 h-4 bg-blue-200 rounded-full -translate-y-1/2"></div>
            <div className="absolute top-[67%] left-[30%] w-4 h-4 bg-blue-200 rounded-full -translate-y-1/2"></div>
            <div className="absolute top-[32%] left-[60%] w-4 h-4 bg-white border-2 border-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-[40%] right-[4%] w-4 h-4 bg-blue-200 rounded-full -translate-y-1/2"></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-60 md:mt-10 lg:mt-10">
          <CenterDetailsCard details={sortedCards[activeCardIndex].centerDetails} />
        </div>
      </div>
    </div>
  );
}