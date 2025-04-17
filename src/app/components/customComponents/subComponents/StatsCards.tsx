// components/subComponents/StatsCards.tsx
"use client"

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { StatItem } from "..//../../../../data/statsData";

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
      <Card className="w-full h-[200px] relative overflow-hidden group border-none">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={stat.image || `/images/stats-bg-${index + 1}.jpg`}
            alt=""
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-6 flex items-center">
          <div className="flex items-baseline gap-6">
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
              {stat.number}
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90">
                {stat.label}
              </span>
              {stat.description && (
                <span className="text-sm sm:text-base text-gray-300">
                  {stat.description}
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};