// data/statistics.ts
export interface StatItem {
  leftStat: {
      number: string;
      label: string;
      description: string;
  };
  rightStat: {
      number: string;
      label: string;
      description: string;
  };
  image?: string;
}

export const statisticsData: StatItem[] = [
  {
      leftStat: {
          number: "65+",
          label: "Top-Notch Angel Investors",
          description: "from across the globe",
      },
      rightStat: {
          number: "50+",
          label: "Early-Stage Investors",
          description: "With Angels & VCs as well at JAZBAA 4.0", 
      },
      image: "/assets/stats/DSC02620[1].jpg"
  },
  {
      leftStat: {
          number: "133+",
          label: "Statups Showcased",
          description: "Unbelievable was the feedback from the investors to these 89+ startups,"
      },
      rightStat: {
          number: "500+",
          label: "Startups Would Be",
          description: "Showcased by our Summer Interns this year at JAZBAA 4.0",
      },
      image: "/assets/stats/DSC_2974.JPG"
  },
  {
      leftStat: {
          number: "10+",
          label: "Sectors Covered",
          description: "Healthcare,Education,Logistics & Transportation,Agriculture,Consumer Products & many more"
      },
      rightStat: {
          number: "10+",
          label: "Sectors",
          description: "Covered this year without leaving any stone untouched at JAZBAA 4.0"
      },
      image: "/assets/stats/DSC_3405.JPG"
  },
  {
      leftStat: {
          number: "15+",
          label: "Technologies Covered",
          description: "In these Startups including Generative AIOps |ML|Mobile Based|Cloud|Devops|Full stack development & many more"
      },
      rightStat: {
          number: "15+",
          label: "Technologies will be used", 
          description: "In these Startups inc. Generative AIOps |ML|Mobile Based|Cloud|Devops|Full stack development & many more"
      },
      image: "/assets/stats/IMG_5714.JPG"
  },
  
];