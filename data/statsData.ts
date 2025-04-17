// data/statistics.ts
export interface StatItem {
    number: string;
    label: string;
    description: string;
    image?: string;
  }
  
  export const statisticsData: StatItem[] = [
    {
      number: "15+",
      label: "Editions",
      description: "Successfully completed editions across multiple platforms",
      image: "/assets/stats/DSC02620[1].jpg"
    },
    {
      number: "1.5M+",
      label: "Connections",
      description: "Global connections established through our network",
      image: "/images/stats-bg-2.jpg"
    },
    {
      number: "1000+",
      label: "Sessions",
      description: "Interactive sessions conducted worldwide",
      image: "/images/stats-bg-3.jpg"
    },
    {
      number: "50+",
      label: "Countries",
      description: "International presence across continents",
      image: "/images/stats-bg-4.jpg"
    },
    {
      number: "100K+",
      label: "Users",
      description: "Active users engaging with our platform",
      image: "/images/stats-bg-5.jpg"
    }
  ];