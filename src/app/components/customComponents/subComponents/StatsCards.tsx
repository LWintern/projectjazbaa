// components/subComponents/StatsCards.tsx
"use client"

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { StatItem } from "../../../../../data/statsData";

interface StatCardProps {
  stat: StatItem;
  index: number;
}

export const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex items-center"
    >
      <Card className="w-full bg-transparent border-none hover:bg-white/5 transition-all duration-300">
        <div className="p-10">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center min-w-[100px]">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                {stat.number}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                {stat.label}
              </span>
              <span className="text-sm sm:text-base text-gray-400 mt-2">
                {stat.description}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};