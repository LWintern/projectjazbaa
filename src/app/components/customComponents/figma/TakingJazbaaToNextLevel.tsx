// components/team-grid.tsx
"use client"
import { cn } from "@/lib/utils";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";

interface TeamMember {
  id: string;
  name: string;
  jobTitle: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mr Amit Shah",
    jobTitle: "Minister of Home Affairs of India",
    imageUrl: "/assets/investors/mr amit shah.jpeg",
  },
  {
    id: "2",
    name: "Mr Aroon Purie",
    jobTitle: "Aaj Tak|India Today,Owner",
    imageUrl: "/assets/investors/mr aroon purie.jpeg",
  },
  {
    id: "3",
    name: "Mr P.Chidambaram",
    jobTitle: "Former Finance Minister",
    imageUrl: "/assets/investors/Mr p.chidambram.jpeg",
  },
  {
    id: "4",
    name: "Mr Sudhir Choudhary",
    jobTitle: "Aaj Tak,Editor",
    imageUrl: "/assets/investors/mr sudhir choudhary.jpeg",
  },
  {
    id: "5",
    name: "Mr Mohan Yadav",
    jobTitle: "CM of Madhya Pradesh",
    imageUrl: "/assets/investors/mr. mohan yadav.jpeg",
  },
  {
    id: "6",
    name: "Ms Sweta Singh",
    jobTitle: "Indian Journalist & Newscaster",
    imageUrl: "/assets/investors/ms sweta singh.jpeg",
  },
  {
    id: "7",
    name: "Mr Narayan Murthy",
    jobTitle: "Founder of Infosys",
    imageUrl: "/assets/investors/narayan murthy.jpeg",
  },
  {
    id: "8",
    name: "Sadhguru Ji",
    jobTitle: "Spiritual Leader",
    imageUrl: "/assets/investors/sadhgurujii.jpeg",
  },
  {
    id: "9",
    name: "Mrs Sudha Murty",
    jobTitle: "Member of Rajya Sabha",
    imageUrl: "/assets/investors/sudha murty.jpeg",
  },
];

const TeamMemberCard = ({
  imageUrl,
  name,
  jobTitle,
  className,
  isMain = false,
}: {
  imageUrl: string;
  name: string;
  jobTitle: string;
  className?: string;
  isMain?: boolean;
}) => (
  <div 
    className={cn(
      "relative rounded-2xl overflow-hidden",
      "transition-all duration-300 hover:scale-[1.02]",
      "h-[300px] sm:h-[350px]",
      "hover:shadow-xl",
      className
    )}
  >
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={`${name}'s profile`}
        layout="fill"
        objectFit="cover"
        priority={isMain}
      />
    </div>
    
    {isMain && (
      <div className="absolute inset-0 bg-blue-500/20 z-[1]" />
    )}
    
    <div 
      className={cn(
        "absolute inset-0 bg-gradient-to-b",
        "from-transparent via-transparent to-red-500/90"
      )}
    />
    
    <div className="absolute bottom-10 left-0 right-0 text-center text-white z-10">
      <h3 className="text-xl sm:text-2xl font-normal mb-1">{name}</h3>
      <p className="text-base sm:text-lg font-light">{jobTitle}</p>
    </div>
  </div>
);

export function TeamGrid() {
  // State to track the currently displayed team members
  const [displayedMembers, setDisplayedMembers] = useState({
    featured: teamMembers[0],
    topRight: teamMembers[1],
    bottomRight: teamMembers[2]
  });

  // Counter to keep track of which set of images to show
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to rotate the displayed team members
    const rotateMembers = () => {
      const nextIndex = (currentIndex + 1) % Math.ceil(teamMembers.length / 3);
      
      // Calculate indices for the three positions
      const featuredIndex = (nextIndex * 3) % teamMembers.length;
      const topRightIndex = (featuredIndex + 1) % teamMembers.length;
      const bottomRightIndex = (featuredIndex + 2) % teamMembers.length;
      
      setDisplayedMembers({
        featured: teamMembers[featuredIndex],
        topRight: teamMembers[topRightIndex],
        bottomRight: teamMembers[bottomRightIndex]
      });
      
      setCurrentIndex(nextIndex);
    };

    // Set up the interval to rotate members every 5 seconds
    const intervalId = setInterval(rotateMembers, 4000);
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="container bg-black mx-auto px-4 py-6 sm:p-6 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        TAKING JAZBAA TO NATIONAL LEVEL
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left large card */}
        <div className="relative">
          <TeamMemberCard
            imageUrl={displayedMembers.featured.imageUrl}
            name={displayedMembers.featured.name}
            jobTitle={displayedMembers.featured.jobTitle}
            className="h-[300px] sm:h-[400px] md:h-[550px]"
            isMain
          />
        </div>

        {/* Right column cards */}
        <div className="flex flex-col gap-6 md:h-[550px]">
          {/* Top right card */}
          <TeamMemberCard
            imageUrl={displayedMembers.topRight.imageUrl}
            name={displayedMembers.topRight.name}
            jobTitle={displayedMembers.topRight.jobTitle}
            className="md:flex-1"
          />
          
          {/* Bottom right card */}
          <TeamMemberCard
            imageUrl={displayedMembers.bottomRight.imageUrl}
            name={displayedMembers.bottomRight.name}
            jobTitle={displayedMembers.bottomRight.jobTitle}
            className="md:flex-1"
          />
        </div>
      </div>
    </div>
  );
}