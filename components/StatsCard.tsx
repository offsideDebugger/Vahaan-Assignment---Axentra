"use client";

import { motion } from "motion/react";
import CountUp from "react-countup";

type StatCardProps = {
  end: number;
  label: string;
  description?: string;
  suffix?: string;
};

export default function StatCard({
  end,
  label,
  description,
  suffix = "+",
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-xl"
    >
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <CountUp
          end={end}
          duration={2}
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      </h2>

      <div className="mt-4 h-1 w-12 rounded-full bg-black transition-all duration-300 group-hover:w-20" />

      <h3 className="mt-4 text-xl font-semibold">
        {label}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-zinc-500">
          {description}
        </p>
      )}
    </motion.div>
  );
}