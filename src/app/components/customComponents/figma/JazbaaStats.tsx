// components/StatisticsSection.tsx
"use client"

import { statisticsData } from "../../../../../data/statsData";
import { StatCard } from "../subComponents/StatsCards";

const StatisticsSection = () => {
    return (
        <section className="relative w-full bg-black py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading Section */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Jazbaa
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center sm:gap-80 gap-2 text-gray-400 text-lg sm:text-xl md:text-2xl">
                        <span>Jazbaa 1.0 | 2.0 | 3.0</span>
                        <span>Jazbaa 4.0</span>
                    </div>
                </div>

                {/* Stats Content */}
                <div className="mt-8 sm:mt-12">
                    <div className="grid gap-4 sm:gap-6">
                        {statisticsData.map((stat, index) => (
                            <StatCard key={index} stat={stat} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;