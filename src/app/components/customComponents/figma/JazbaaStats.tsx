// "use client"

// // components/JazbaaStats.tsx
// import { FC, useRef, useEffect, useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { jazbaaData, VersionData } from '../../../../../data/statsData';

// interface InvestorCardProps {
//   number: string;
//   title: string;
//   description: string;
// }

// const InvestorCard: FC<InvestorCardProps> = ({ number, title, description }) => (
//   <Card className="p-4 mb-4 flex items-start gap-4 hover:shadow-lg transition-shadow">
//     <div className="flex items-center justify-center min-w-[80px]">
//       <span className="text-4xl font-bold text-[#ff0000]">{number}</span>
//     </div>
//     <div>
//       <h3 className="font-semibold">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   </Card>
// );

// const JazbaaStats: FC = () => {
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [lineHeight, setLineHeight] = useState<number>(660);

//   useEffect(() => {
//     const updateHeight = () => {
//       if (contentRef.current) {
//         const height = contentRef.current.offsetHeight;
//         setLineHeight(height);
//       }
//     };

//     updateHeight();
//     window.addEventListener('resize', updateHeight);
//     return () => window.removeEventListener('resize', updateHeight);
//   }, []);

//   return (
//     <div className="w-full max-w-6xl mx-auto px-4">
//       {/* Mobile View */}
//       <div className="md:hidden">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl font-bold">Jazbaa</h2>
//           <div className="flex gap-4 justify-center mt-2 flex-wrap">
//             {jazbaaData.leftColumn.map((version) => (
//               <span key={version.version} className="font-semibold">
//                 {version.version}
//               </span>
//             ))}
//             {jazbaaData.rightColumn.map((version) => (
//               <span key={version.version} className="font-semibold">
//                 {version.version}
//               </span>
//             ))}
//           </div>
//         </div>
//         {/* All cards in single column for mobile */}
//         <div>
//           {jazbaaData.leftColumn.map((version) =>
//             version.cards.map((card, index) => (
//               <InvestorCard
//                 key={`left-${version.version}-${index}`}
//                 number={card.number}
//                 title={card.title}
//                 description={card.description}
//               />
//             ))
//           )}
//           {jazbaaData.rightColumn.map((version) =>
//             version.cards.map((card, index) => (
//               <InvestorCard
//                 key={`right-${version.version}-${index}`}
//                 number={card.number}
//                 title={card.title}
//                 description={card.description}
//               />
//             ))
//           )}
//         </div>
//       </div>

//       {/* Desktop View */}
//       <div className="hidden md:block">
//         <div className="flex" ref={contentRef}>
//           {/* Left Column */}
//           <div className="flex-1 pr-8">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl font-bold">Jazbaa</h2>
//               <div className="flex gap-4 justify-center mt-2">
//                 {jazbaaData.leftColumn.map((version) => (
//                   <span key={version.version} className="font-semibold">
//                     {version.version}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             {jazbaaData.leftColumn.map((version) =>
//               version.cards.map((card, index) => (
//                 <InvestorCard
//                   key={`${version.version}-${index}`}
//                   number={card.number}
//                   title={card.title}
//                   description={card.description}
//                 />
//               ))
//             )}
//           </div>

//           {/* Vertical Partition Line */}
//           <div 
//             className="w-[2px] bg-[#ff0000] mx-4 mt-20" 
//             style={{ 
//               height: `${lineHeight - 80}px`,
//               transition: 'height 0.3s ease' 
//             }}
//           />

//           {/* Right Column */}
//           <div className="flex-1 pl-8">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl font-bold">Jazbaa</h2>
//               <div className="mt-2">
//                 {jazbaaData.rightColumn.map((version) => (
//                   <span key={version.version} className="font-semibold">
//                     {version.version}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             {jazbaaData.rightColumn.map((version) =>
//               version.cards.map((card, index) => (
//                 <InvestorCard
//                   key={`${version.version}-${index}`}
//                   number={card.number}
//                   title={card.title}
//                   description={card.description}
//                 />
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JazbaaStats;




"use client"

import { statisticsData } from "../../../../../data/statsData";
import { StatCard } from "../subComponents/StatsCards";

const StatisticsSection = () => {
  return (
    <section className="relative w-full bg-black py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Jazbaa
          </h2>
          <div className="flex flex-wrap justify-center gap-80 text-gray-400 md:text-2xl text-xl">
            <span className="">Jazbaa 1.0 2.0 3.0</span>
            <span>Jazbaa 4.0</span>
          </div>
        </div>

        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <div 
            className="grid h-full"
            style={{ 
              gridTemplateRows: `repeat(${statisticsData.length}, 1fr)` 
            }}
          >
            {statisticsData.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white"
                style={{ opacity: 0.15 }}
              >
                <img
                  src={stat.image || `/images/stats-bg-${index + 1}.jpg`}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Content */}
        <div className="relative z-10">
          <div className="grid gap-6 md:gap-8 lg:gap-10">            
            {/* Stats Cards */}
            <div className="space-y-8 md:space-y-2">
              {statisticsData.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default StatisticsSection;