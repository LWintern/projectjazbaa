"use client";
import React, { useEffect, useState } from 'react';

interface LogoItem {
  name: string;
  logo: string;
  tagline: string;
  color: string;
}

export default function StartupCarousel() {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);

  useEffect(() => {
    const animateCarousel = () => {
      // First row moves right
      setPosition1(prev => (prev + 0.15) % 100);
      // Second row moves left
      setPosition2(prev => (prev + 0.15) % 100);
    };

    const interval = setInterval(animateCarousel, 50);
    return () => clearInterval(interval);
  }, []);

  const firstRowLogos: LogoItem[] = [
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
    },
   


  ];

  const secondRowLogos: LogoItem[] = [
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
      logo: "/assets/Startup/Shatranj.png.jpeg",
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
    },
    
  ];


  const renderLogoItem = (item: LogoItem, index: number) => (
    <div className="flex flex-col items-center mx-8" key={`${item.name}-${index}`}>
      <div className="bg-white p-4 w-32 h-32 flex items-center justify-center mb-2">
        <img src={item.logo} alt={`${item.name} logo`} className="max-w-full max-h-full" />
      </div>
      <div 
        className="text-white font-bold py-2 px-4 w-40 text-center mb-1"
        style={{ backgroundColor: item.color }}
      >
        {item.name}
      </div>
      <p className="text-center text-sm text-white max-w-40">{item.tagline}</p>
    </div>
  );

  // Duplicate logos multiple times for smooth infinite animation
  const duplicatedFirstRow = [...firstRowLogos, ...firstRowLogos, ...firstRowLogos];
  const duplicatedSecondRow = [...secondRowLogos, ...secondRowLogos, ...secondRowLogos];

  return (
    <div className="w-full bg-black py-12 overflow-hidden">
       <h2 className="text-4xl text-white font-bold text-center mb-12">
      50+ AI STARTUP SHOWCASED @ JAZBAA 3.0
    </h2>
      {/* First row - moving right */}
      <div className="relative mb-16">
        <div 
          className="flex whitespace-nowrap transition-transform duration-300"
          style={{ transform: `translateX(-${position1}%)` }}
        >
          {duplicatedFirstRow.map((item, index) => renderLogoItem(item, index))}
        </div>
      </div>

      {/* Second row - moving left */}
      <div className="relative">
        <div 
          className="flex whitespace-nowrap transition-transform duration-300"
          style={{ transform: `translateX(${position2}%)` }}
        >
          {duplicatedSecondRow.map((item, index) => renderLogoItem(item, index))}
        </div>
      </div>
    </div>
  );
}