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
                    {/* Container for all content with proper spacing */}
                    <div className="w-full flex items-center justify-between">
                        {/* Left Content */}
                        <div className="flex-1 pr-4">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                                    {stat.leftStat.number}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-light text-white/90">
                                        {stat.leftStat.label}
                                    </span>
                                    <span className="text-sm text-gray-300 mt-1">
                                        {stat.leftStat.description}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Centered Vertical Line */}
                        <div className="h-[120px] w-[2px] bg-red-500 mx-8 flex-shrink-0" />

                        {/* Right Content */}
                        <div className="flex-1 pl-4">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                                    {stat.rightStat.number}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-xl sm:text-2xl md:text-3xl font-light text-white/90">
                                        {stat.rightStat.label}
                                    </span>
                                    <span className="text-sm text-gray-300 mt-1">
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