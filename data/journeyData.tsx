// data/statsData.ts

import { Mail, Laptop, Code, Lightbulb, PresentationIcon } from "lucide-react";

// Define all interfaces
interface VersionInfo {
  current: string;
  previous: string[];
  upcoming: string;
}

interface ContactInfo {
  headquarters: {
    address: string;
    phone: string;
    email: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

interface CenterDetails {
  name: string;
  address: string;
  email: string;
  image: string;
  description: string;
}

interface Position {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  translateX?: string;
  translateY?: string;
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

// Constants
export const serviceCategories: string[] = [
  "Training & Certification",
  "Development Services",
  "Cloud Solutions",
  "Enterprise Support",
  "Consulting Services"
];

export const versions: VersionInfo = {
  current: "4.0",
  previous: ["1.0", "2.0", "3.0"],
  upcoming: "5.0"
};

export const contactInfo: ContactInfo = {
  headquarters: {
    address: "Linux World Tower, Tech City, Bangalore - 560001",
    phone: "+91-XXX-XXX-XXXX",
    email: "info@linuxworld.com"
  },
  social: {
    linkedin: "linkedin.com/company/linuxworld",
    twitter: "twitter.com/linuxworld",
    github: "github.com/linuxworld"
  }
};

export const cardData: CardData[] = [
  {
    icon: <Lightbulb className="w-16 h-16 sm:w-16 sm:h-16 text-emerald-600" />,
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
      description: "Our state-of-the-art training center offers comprehensive Linux and cloud computing courses. Expert instructors provide hands-on training in system administration, DevOps practices, and cloud technologies."
    }
  },
  {
    icon: <Code className="w-20 h-20 sm:w-20 sm:h-2 text-emerald-600" />,
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
      email: "development@linuxworld.com",
      image: "/images/dev-hub.jpg",
      description: "A cutting-edge development center focused on creating innovative solutions using Linux and open-source technologies. Our team specializes in custom software development and system integration."
    }
  },
  {
    icon: <PresentationIcon className="w-16 h-16 sm:w-16 sm:h-16 text-emerald-600" />,
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
      name: "Linux World Innovation Lab",
      address: "Digital Park, Tech City, Sector 63, Gurugram - Haryana - India",
      email: "innovation@linuxworld.com",
      image: "/images/innovation-lab.jpg",
      description: "Our innovation lab is where ideas transform into reality. We focus on emerging technologies like containerization, microservices, and cloud-native applications."
    }
  }
];