// data/startupCarousel.ts
import { LogoItem } from '../types/startupCarousel';

export const firstRowLogos: LogoItem[] = [
  {
    name: "Advintage",
    logo: "/assets/Startup/Advintage.png.png",
    tagline: "Link a in a blink",
    color: "#FF0000"
  },
  {
    name: "Bhadaas",
    logo: "/assets/Startup/Bhadaas.png.png",
    tagline: "Where Dream Score & Talent Soar",
    color: "#FF0000"
  },
  {
    name: "DainikVetan",
    logo: "/assets/Startup/DainikVetan.png.jpeg",
    tagline: "Innovate connect, fund",
    color: "#FF0000"
  },
  {
    name: "dhvani",
    logo: "/assets/Startup/dhvani.png.jpg",
    tagline: "My own insta.",
    color: "#FF0000"
  },
  {
    name: "Emanate",
    logo: "/assets/Startup/Emanate.png.jpeg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "FAM-LY2",
    logo: "/assets/Startup/FAM-LY2.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Farmunity",
    logo: "/assets/Startup/Farmunity.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  }
];

export const secondRowLogos: LogoItem[] = [
  {
    name: "Gravityos",
    logo: "/assets/Startup/gravityos2logo.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Keplr",
    logo: "/assets/Startup/Keplr.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Kick off",
    logo: "/assets/Startup/Kick off.png.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "LB",
    logo: "/assets/Startup/LB.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Luxicab",
    logo: "/assets/Startup/Luxicab.png.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Mystig",
    logo: "/assets/Startup/Mystig.png.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Ok Health",
    logo: "/assets/Startup/Ok Health.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Pocketship",
    logo: "/assets/Startup/Pocketship.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Quantum",
    logo: "/assets/Startup/Quantum.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Sarthi",
    logo: "/assets/Startup/sarthi.png.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Shatranj",
    logo: "/assets/Startup/Shatranj .png.jpeg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Shop linker",
    logo: "/assets/Startup/shop linker.png.jpg",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Simulyst",
    logo: "/assets/Startup/simulyst.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Tech date",
    logo: "/assets/Startup/Tech date.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "ValidX",
    logo: "/assets/Startup/validX .png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "Winzbee",
    logo: "/assets/Startup/Winzbee.png.png",
    tagline: "Streets United Possibilities Unlimited",
    color: "#FF0000"
  },
  {
    name: "WM",
    logo: "/assets/Startup/WM .png.png",
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