"use client"

import { useState, useEffect } from "react"
import Image from "next/legacy/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Laptop, Code, Lightbulb, PresentationIcon } from "lucide-react"

// Interfaces
interface CardData {
  icon: React.ReactNode;
  title: string;
  position: number;
  customPosition: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    translateX?: string;
    translateY?: string;
  };
  mobilePosition: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    translateX?: string;
    translateY?: string;
  };
  className?: string;
  centerDetails: CenterDetails;
}

interface CenterDetails {
  name: string;
  address: string;
  email: string;
  image: string;
  description: string;
}

// Card Data
const cardData: CardData[] = [
  {
    icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />,
    title: "Learn",
    position: 0,
    customPosition: {
      top: "11%",
      left: "26%",
      translateY: "-20px"
    },
    mobilePosition: {
      top: "5%",
      left: "50%",
      translateX: "-50%",
      translateY: "0"
    },
    className: "absolute",
    centerDetails: {
      name: "Linux World Training Center",
      address: "Tech Hub, Innovation Park, Sector 15, Bangalore - Karnataka - India",
      email: "training@linuxworld.com",
      image: "/images/training-center.jpg",
      description: "Specialized training in Linux system administration, cloud computing, and DevOps practices."
    }
  },
  {
    icon: <Laptop className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />,
    title: "Build",
    position: 1,
    customPosition: {
      top: "63%",
      left: "60%",
      translateX: "-50%",
      translateY: "-50%"
    },
    mobilePosition: {
      top: "35%",
      left: "50%",
      translateX: "-50%",
      translateY: "0"
    },
    className: "absolute",
    centerDetails: {
      name: "Linux World Development Hub",
      address: "Innovation Tower, Tech Valley, Sector 21, Pune - Maharashtra - India",
      email: "devops@linuxworld.com",
      image: "/images/dev-hub.jpg",
      description: "Advanced DevOps training and implementation of CI/CD pipelines and container orchestration."
    }
  },
  {
    icon: <PresentationIcon className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />,
    title: "Present",
    position: 2,
    customPosition: {
      top: "-15%",
      right: "0%",
      translateY: "-20px"
    },
    mobilePosition: {
      top: "65%",
      left: "50%",
      translateX: "-50%",
      translateY: "0"
    },
    className: "absolute",
    centerDetails: {
      name: "Linux World Cloud Center",
      address: "Cloud Park, Digital Zone, Sector 63, Gurugram - Haryana - India",
      email: "cloud@linuxworld.com",
      image: "/images/cloud-center.jpg",
      description: "Comprehensive cloud infrastructure training and implementation using leading platforms."
    }
  }
];

// ProcessCard Component
const ProcessCard = ({ 
  icon, 
  title, 
  customPosition,
  mobilePosition, 
  className = "", 
  onClick,
  isActive 
}: CardData & { 
  onClick: () => void;
  isActive: boolean;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const positionStyle = {
    ...(isMobile ? mobilePosition : customPosition),
    transform: `translate(${
      (isMobile ? mobilePosition?.translateX : customPosition?.translateX) || '0'
    }, ${
      (isMobile ? mobilePosition?.translateY : customPosition?.translateY) || '0'
    })`
  };

  return (
    <div 
      className={`w-[80px] sm:w-[100px] cursor-pointer ${className}`}
      style={positionStyle}
      onClick={onClick}
    >
      <Card className={`bg-white rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isActive ? 'ring-2 ring-emerald-600 shadow-lg' : 'shadow-md'
      }`}>
        <CardContent className="p-0">
          <div className="aspect-square relative bg-gray-50 flex items-center justify-center">
            {icon}
          </div>
          <div className="p-2 sm:p-4 text-center">
            <h3 className="font-semibold text-xs sm:text-sm">{title}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// CenterDetailsCard Component
const CenterDetailsCard = ({ details }: { details: CenterDetails }) => (
  <Card className="bg-white rounded-xl overflow-hidden shadow-lg">
    <CardContent className="p-4 sm:p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
            {details.name}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
            {details.description}
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">
            {details.address}
          </p>

          <Button variant="outline" className="mb-4 sm:mb-6 text-sm sm:text-base">
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

          <div className="flex items-center mb-4 sm:mb-6">
            <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gray-500" />
            <a 
              href={`mailto:${details.email}`}
              className="text-sm sm:text-base text-emerald-600 hover:underline"
            >
              {details.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-sm sm:text-base">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-gray-300 text-sm sm:text-base">
              View Programs
            </Button>
          </div>
        </div>

        <div className="relative h-[200px] sm:h-[240px] md:h-[300px] rounded-lg overflow-hidden mt-4 md:mt-0">
          <Image
            src={details.image}
            alt={details.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </CardContent>
  </Card>
);

// Main Component
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
    <div className="relative w-full min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[80%] bg-blue-900">
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

      <div className="relative z-10 w-full py-8 sm:py-12 px-4">
        <div className="relative text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Our Training Programs
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-blue-200">
            Comprehensive Linux and cloud computing education for the modern tech landscape
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-8 sm:mb-12 h-[400px] sm:h-[300px]">
          {!isMobile && (
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
          )}

          {isMobile && (
            <svg
              className="absolute top-0 left-1/2 h-full w-[2px] z-0 -translate-x-1/2"
              viewBox="0 0 2 400"
              preserveAspectRatio="none"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="400"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />
            </svg>
          )}

          {!isMobile ? (
            <>
              <div className="absolute top-[40%] left-[4%] w-3 h-3 sm:w-4 sm:h-4 bg-blue-200 rounded-full -translate-y-1/2 z-10"></div>
              <div className="absolute top-[67%] left-[30%] w-3 h-3 sm:w-4 sm:h-4 bg-blue-200 rounded-full -translate-y-1/2 z-10"></div>
              <div className="absolute top-[32%] left-[60%] w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="absolute top-[40%] right-[4%] w-3 h-3 sm:w-4 sm:h-4 bg-blue-200 rounded-full -translate-y-1/2 z-10"></div>
            </>
          ) : (
            <>
              <div className="absolute top-[10%] left-1/2 w-3 h-3 bg-blue-200 rounded-full -translate-x-1/2 z-10"></div>
              <div className="absolute top-[40%] left-1/2 w-3 h-3 bg-blue-200 rounded-full -translate-x-1/2 z-10"></div>
              <div className="absolute top-[70%] left-1/2 w-3 h-3 bg-blue-200 rounded-full -translate-x-1/2 z-10"></div>
            </>
          )}

          <div className="relative w-full h-full">
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

        <div className="relative max-w-4xl mx-auto">
          <CenterDetailsCard details={sortedCards[activeCardIndex].centerDetails} />
        </div>
      </div>
    </div>
  )
}