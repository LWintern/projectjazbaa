// data/statistics.ts
export interface StatItem {
    number: string;
    label: string;
    image?: string; // Optional image path for background
  }
  
  export const statisticsData: StatItem[] = [
    {
      number: "15+",
      label: "Editions",
      image: "/images/stats-bg-1.jpg"
    },
    {
      number: "1.5M+",
      label: "Connections",
      image: "/images/stats-bg-2.jpg"
    },
    {
      number: "1000+",
      label: "Sessions",
      image: "/images/stats-bg-3.jpg"
    },
    // You can add more items here and they will automatically be rendered
    {
      number: "50+",
      label: "Countries",
      image: "/images/stats-bg-4.jpg"
    },
    {
      number: "100K+",
      label: "Users",
      image: "/images/stats-bg-5.jpg"
    }
  ];