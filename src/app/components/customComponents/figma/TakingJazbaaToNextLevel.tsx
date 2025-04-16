// components/team-grid.tsx
import { cn } from "@/lib/utils";
import Image from "next/legacy/image";

interface TeamMember {
  id: string;
  name: string;
  jobTitle: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Name",
    jobTitle: "Job title",
    imageUrl: "/team-1.jpg", // Replace with your image paths
  },
  {
    id: "2",
    name: "Name",
    jobTitle: "Job title",
    imageUrl: "/team-2.jpg",
  },
  {
    id: "3",
    name: "Name",
    jobTitle: "Job title",
    imageUrl: "/team-3.jpg",
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
  return (
    <div className="container mx-auto px-4 py-6 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left large card */}
        <div className="relative">
          <TeamMemberCard
            imageUrl={teamMembers[0].imageUrl}
            name={teamMembers[0].name}
            jobTitle={teamMembers[0].jobTitle}
            className="h-[300px] sm:h-[400px] md:h-[550px]"
            isMain
          />
        </div>

        {/* Right column cards */}
        <div className="flex flex-col gap-6 md:h-[550px]">
          {teamMembers.slice(1).map((member) => (
            <TeamMemberCard
              key={member.id}
              imageUrl={member.imageUrl}
              name={member.name}
              jobTitle={member.jobTitle}
              className="md:flex-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}