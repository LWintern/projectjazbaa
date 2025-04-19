// data/startupCarousel.ts
import { LogoItem } from '../types/startupCarousel';

export const firstRowLogos: LogoItem[] = [
  {
    name: "Advintage",
    logo: "/assets/Startup/Advintage.png",
    tagline: "Link a in a blink",
    color: "#FF0000"
  },
  {
    name: "Bhadaas",
    logo: "/assets/Startup/Bhadaas.png",
    tagline: "Where Dream Score & Talent Soar",
    color: "#FF0000"
  },
  {
    name: "DainikVetan",
    logo: "/assets/Startup/DainikVetan.jpeg",
    tagline: "Innovate connect, fund",
    color: "#FF0000"
  },
  {
    name: "dhvani",
    logo: "/assets/Startup/dhvani.jpg",
    tagline: "My own insta.",
    color: "#FF0000"
  },
  {
    name: "Emanate",
    logo: "/assets/Startup/Emanate.jpeg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "FAM-LY2",
    logo: "/assets/Startup/FAM-LY2.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Farmunity",
    logo: "/assets/Startup/Farmunity.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  }
];

export const secondRowLogos: LogoItem[] = [
  {
    name: "Gravityos",
    logo: "/assets/Startup/gravityos2logo.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Keplr",
    logo: "/assets/Startup/Keplr.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Kick off",
    logo: "/assets/Startup/Kick off.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "LB",
    logo: "/assets/Startup/LB.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Luxicab",
    logo: "/assets/Startup/Luxicab.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Mystig",
    logo: "/assets/Startup/Mystig.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Ok Health",
    logo: "/assets/Startup/Ok Health.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Pocketship",
    logo: "/assets/Startup/Pocketship.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Quantum",
    logo: "/assets/Startup/Quantum.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Sarthi",
    logo: "/assets/Startup/sarthi.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Shatranj",
    logo: "/assets/Startup/Shatranj.jpeg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Shop linker",
    logo: "/assets/Startup/shop linker.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Simulyst",
    logo: "/assets/Startup/simulyst.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Tech date",
    logo: "/assets/Startup/Tech date.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "ValidX",
    logo: "/assets/Startup/validX.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Winzbee",
    logo: "/assets/Startup/Winzbee.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "WM",
    logo: "/assets/Startup/WM.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  }
];

// You can add more arrays if needed for additional rows

// Optional: Export a combined array if needed
export const allLogos: LogoItem[] = [...firstRowLogos, ...secondRowLogos];

// Optional: Export the total count if needed
export const totalStartups = allLogos.length;

// Optional: Helper function to get random logos if needed
export const getRandomLogos = (count: number): LogoItem[] => {
  const shuffled = [...allLogos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Optional: Helper function to get logos by category if needed
export const getLogosByCategory = (category: string): LogoItem[] => {
  return allLogos.filter(logo => logo.category === category);
};

// Optional: Add any other helper functions or data structures you might need