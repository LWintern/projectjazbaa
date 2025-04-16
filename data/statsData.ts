// data/jazbaaData.ts

export interface VersionData {
    version: string;
    cards: {
      number: string;
      title: string;
      description: string;
    }[];
  }
  
  export const jazbaaData: {
    leftColumn: VersionData[];
    rightColumn: VersionData[];
  } = {
    leftColumn: [
      {
        version: "1.0",
        cards: [
          {
            number: "65+",
            title: "Top-Notch Angel Investors",
            description: "Top-Notch angel investors from various cities namely Mumbai, Bangalore, Hyderabad etc to grab even present in Jazbaa 1.0"
          },
          {
            number: "40+",
            title: "Startup Pitches",
            description: "Innovative startup pitches from various sectors presented during Jazbaa 1.0"
          },
          // Add more cards as needed
        ]
      },
      {
        version: "2.0",
        cards: [
          {
            number: "80+",
            title: "Investment Opportunities",
            description: "Expanded network of investors and opportunities in Jazbaa 2.0"
          },
          // Add more cards
        ]
      },
      {
        version: "3.0",
        cards: [
          {
            number: "100+",
            title: "Global Investors",
            description: "International investment opportunities and global network expansion in Jazbaa 3.0"
          },
          // Add more cards
        ]
      }
    ],
    rightColumn: [
      {
        version: "4.0",
        cards: [
          {
            number: "150+",
            title: "Premium Investors",
            description: "Elite group of investors and enhanced opportunities in Jazbaa 4.0"
          },
          {
            number: "200+",
            title: "Startup Connections",
            description: "Expanded startup network and enhanced collaboration opportunities"
          },
          // Add more cards
        ]
      }
    ]
  };