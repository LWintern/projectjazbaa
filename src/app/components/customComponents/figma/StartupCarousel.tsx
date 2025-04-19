// components/StartupCarousel.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { LogoItem } from '../../../../../types/startupCarousel';
import { firstRowLogos, secondRowLogos } from '../../../../../data/startupCarousel';
import Image from 'next/image';

export default function StartupCarousel() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstTrack = firstRowRef.current;
    const secondTrack = secondRowRef.current;

    if (!firstTrack || !secondTrack) return;

    // Clone items for smooth infinite scroll
    const cloneTrack = (track: HTMLElement) => {
      const items = Array.from(track.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        track.appendChild(clone);
      });
    };

    cloneTrack(firstTrack);
    cloneTrack(secondTrack);

    // Animation setup
    firstTrack.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${firstTrack.offsetWidth / 2}px)` }
      ],
      {
        duration: 50000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    secondTrack.animate(
      [
        { transform: `translateX(-${secondTrack.offsetWidth / 2}px)` },
        { transform: 'translateX(0)' }
      ],
      {
        duration: 50000,
        iterations: Infinity,
        easing: 'linear'
      }
    );
  }, []);

  const renderLogoItem = (item: LogoItem) => (
    <div 
      key={item.name}
      className="flex flex-col items-center justify-center flex-shrink-0 px-4 w-[200px] hover:scale-105 transition-transform duration-300"
    >
      {/* Logo Container */}
      <div className="w-[120px] h-[120px] bg-white rounded-lg p-3 flex items-center justify-center mb-3">
        <div className="relative w-full h-full">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            className="object-contain"
            sizes="120px"
          />
        </div>
      </div>

      {/* Name */}
      <div 
        className="w-full py-2 px-3 bg-red-500 rounded text-white text-center font-semibold text-sm mb-2"
      >
        {item.name}
      </div>

      {/* Tagline */}
      <p className="text-white text-xs text-center opacity-80 line-clamp-2">
        {item.tagline}
      </p>
    </div>
  );

  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">
          50+ AI STARTUP SHOWCASED
        </h2>
        <p className="text-xl text-red-500 font-semibold">
          @ JAZBAA 3.0
        </p>
      </div>

      {/* First Track */}
      <div className="relative mb-16 overflow-hidden">
        <div 
          ref={firstRowRef}
          className="flex w-fit"
        >
          {firstRowLogos.map(item => renderLogoItem(item))}
        </div>
      </div>

      {/* Second Track */}
      <div className="relative overflow-hidden">
        <div 
          ref={secondRowRef}
          className="flex w-fit"
        >
          {secondRowLogos.map(item => renderLogoItem(item))}
        </div>
      </div>
    </div>
  );
}