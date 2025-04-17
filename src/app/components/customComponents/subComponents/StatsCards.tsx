// components/StatCard.tsx
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
      className="flex items-center space-x-8"
    >
      <Card className="w-full bg-red-100 border-none hover:bg-white/5 transition-colors duration-300">
        <div className="flex items-baseline justify-between sm:justify-start p-10">
          <span className="text-4xl sm:text-7xl font-bold text-white tracking-tight">
            {stat.number}
          </span>
          <span className="text-2xl sm:text-5xl font-light text-white ml-4">
            {stat.label}
          </span>
        </div>
      </Card>
    </motion.div>
  );
};