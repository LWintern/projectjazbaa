"use client"

// components/JazbaaStats.tsx
import { FC, useRef, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { jazbaaData, VersionData } from '../../../../../data/statsData';

interface InvestorCardProps {
  number: string;
  title: string;
  description: string;
}

const InvestorCard: FC<InvestorCardProps> = ({ number, title, description }) => (
  <Card className="p-4 mb-4 flex items-start gap-4 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-center min-w-[80px]">
      <span className="text-4xl font-bold text-[#ff0000]">{number}</span>
    </div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </Card>
);

const JazbaaStats: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState<number>(660);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.offsetHeight;
        setLineHeight(height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Jazbaa</h2>
          <div className="flex gap-4 justify-center mt-2 flex-wrap">
            {jazbaaData.leftColumn.map((version) => (
              <span key={version.version} className="font-semibold">
                {version.version}
              </span>
            ))}
            {jazbaaData.rightColumn.map((version) => (
              <span key={version.version} className="font-semibold">
                {version.version}
              </span>
            ))}
          </div>
        </div>
        {/* All cards in single column for mobile */}
        <div>
          {jazbaaData.leftColumn.map((version) =>
            version.cards.map((card, index) => (
              <InvestorCard
                key={`left-${version.version}-${index}`}
                number={card.number}
                title={card.title}
                description={card.description}
              />
            ))
          )}
          {jazbaaData.rightColumn.map((version) =>
            version.cards.map((card, index) => (
              <InvestorCard
                key={`right-${version.version}-${index}`}
                number={card.number}
                title={card.title}
                description={card.description}
              />
            ))
          )}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex" ref={contentRef}>
          {/* Left Column */}
          <div className="flex-1 pr-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Jazbaa</h2>
              <div className="flex gap-4 justify-center mt-2">
                {jazbaaData.leftColumn.map((version) => (
                  <span key={version.version} className="font-semibold">
                    {version.version}
                  </span>
                ))}
              </div>
            </div>
            {jazbaaData.leftColumn.map((version) =>
              version.cards.map((card, index) => (
                <InvestorCard
                  key={`${version.version}-${index}`}
                  number={card.number}
                  title={card.title}
                  description={card.description}
                />
              ))
            )}
          </div>

          {/* Vertical Partition Line */}
          <div 
            className="w-[2px] bg-[#ff0000] mx-4 mt-20" 
            style={{ 
              height: `${lineHeight - 80}px`,
              transition: 'height 0.3s ease' 
            }}
          />

          {/* Right Column */}
          <div className="flex-1 pl-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Jazbaa</h2>
              <div className="mt-2">
                {jazbaaData.rightColumn.map((version) => (
                  <span key={version.version} className="font-semibold">
                    {version.version}
                  </span>
                ))}
              </div>
            </div>
            {jazbaaData.rightColumn.map((version) =>
              version.cards.map((card, index) => (
                <InvestorCard
                  key={`${version.version}-${index}`}
                  number={card.number}
                  title={card.title}
                  description={card.description}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JazbaaStats;