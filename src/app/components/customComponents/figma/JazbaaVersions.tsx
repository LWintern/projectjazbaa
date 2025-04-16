// components/JazbaaVersions.tsx
import { FC } from 'react';
import { Card } from '@/components/ui/card';

interface InvestorCardProps {
  number: string;
  title: string;
  description: string;
}

const InvestorCard: FC<InvestorCardProps> = ({ number, title, description }) => (
  <Card className="p-4 mb-4 flex items-start gap-4 hover:shadow-lg transition-shadow">
    <span className="text-4xl font-bold text-[#ff0000]">{number}</span>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </Card>
);

const JazbaaVersions: FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="flex">
        {/* Left Column */}
        <div className="flex-1 pr-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Jazbaa</h2>
            <div className="flex gap-4 justify-center mt-2">
              <span className="font-semibold">1.0</span>
              <span className="font-semibold">2.0</span>
              <span className="font-semibold">3.0</span>
            </div>
          </div>
          {/* Cards for versions 1.0-3.0 */}
          {Array(5).fill(0).map((_, index) => (
            <InvestorCard
              key={index}
              number="65+"
              title="Top - Notch angel investors"
              description="Top - Notch angel investors from various cities namely mumbai, bangalore, hyderabad etc to grab even present in jazbaa 1.0&2.0"
            />
          ))}
        </div>

        {/* Vertical Partition Line */}
        <div className="w-[2px] bg-[#ff0000] mx-4 h-[660px] mt-20" /> {/* This is the partition line */}

        {/* Right Column */}
        <div className="flex-1 pl-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Jazbaa</h2>
            <div className="mt-2">
              <span className="font-semibold">4.0</span>
            </div>
          </div>
          {/* Cards for version 4.0 */}
          {Array(5).fill(0).map((_, index) => (
            <InvestorCard
              key={index}
              number="65+"
              title="Top - Notch angel investors"
              description="Top - Notch angel investors from various cities namely mumbai, bangalore, hyderabad etc to grab even present in jazbaa 1.0&2.0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JazbaaVersions;