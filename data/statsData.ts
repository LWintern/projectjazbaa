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
          number: "15+",
          label: "Editions",
          description: "Successfully completed editions"
      },
      rightStat: {
          number: "10K+",
          label: "Participants",
          description: "Across multiple platforms"
      },
      image: "/assets/stats/DSC02620[1].jpg"
  },
  {
      leftStat: {
          number: "1.5M+",
          label: "Connections",
          description: "Global network reach"
      },
      rightStat: {
          number: "500K+",
          label: "Engagements",
          description: "Active community interactions"
      },
      image: "/images/stats-bg-2.jpg"
  },
  {
      leftStat: {
          number: "1000+",
          label: "Sessions",
          description: "Interactive workshops"
      },
      rightStat: {
          number: "200+",
          label: "Mentors",
          description: "Expert guidance worldwide"
      },
      image: "/images/stats-bg-3.jpg"
  },
  {
      leftStat: {
          number: "50+",
          label: "Countries",
          description: "Global presence"
      },
      rightStat: {
          number: "100+",
          label: "Partners",
          description: "International collaborations"
      },
      image: "/images/stats-bg-4.jpg"
  },
  {
      leftStat: {
          number: "100K+",
          label: "Users",
          description: "Active platform users"
      },
      rightStat: {
          number: "25K+",
          label: "Projects",
          description: "Successfully completed"
      },
      image: "/images/stats-bg-5.jpg"
  }
];