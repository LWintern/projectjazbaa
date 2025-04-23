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
            <Card className="w-full h-auto sm:h-[200px] relative overflow-hidden group border-none">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={stat.image || `/images/stats-bg-${index + 1}.jpg`}
                        alt=""
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-4 sm:p-6">
                    {/* Container for all content with proper spacing */}
                    <div className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 sm:gap-0">
                        {/* Left Content */}
                        <div className="flex-1 w-full sm:w-auto sm:pr-4">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
                                    {stat.leftStat.number}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-lg sm:text-xl md:text-3xl font-semibold text-white/90">
                                        {stat.leftStat.label}
                                    </span>
                                    <span className="text-sm sm:text-md text-gray-300 mt-1">
                                        {stat.leftStat.description}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Centered Line - Horizontal for mobile, Vertical for larger screens */}
                        <div className="w-full h-[2px] sm:h-[120px] sm:w-[2px] bg-red-500 sm:mx-8 flex-shrink-0" />

                        {/* Right Content */}
                        <div className="flex-1 w-full sm:w-auto sm:pl-4">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <span className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
                                    {stat.rightStat.number}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-lg sm:text-xl md:text-3xl font-semibold text-white/90">
                                        {stat.rightStat.label}
                                    </span>
                                    <span className="text-sm sm:text-md text-gray-300 mt-1">
                                        {stat.rightStat.description}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};