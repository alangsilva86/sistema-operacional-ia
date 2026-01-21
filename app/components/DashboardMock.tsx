"use client";

import { motion } from "framer-motion";

const bars = [0.62, 0.86, 0.48, 0.72, 0.92, 0.58];
const shimmer = [0.7, 0.45, 0.85, 0.6];

export function DashboardMock() {
  return (
    <motion.div
      aria-hidden="true"
      role="presentation"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 backdrop-blur-md"
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-2 w-24 rounded-full bg-white/30" />
          <div className="h-2 w-16 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-10 rounded-full bg-emerald-300/70" />
          <span className="h-2 w-6 rounded-full bg-white/20" />
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-2 w-20 rounded-full bg-white/30" />
              <div className="h-2 w-12 rounded-full bg-white/15" />
            </div>
            <div className="h-8 w-8 rounded-full border border-emerald-300/40 bg-emerald-300/20" />
          </div>
          <div className="mt-4 space-y-3">
            {shimmer.map((value, index) => (
              <div key={`row-${value}`} className="h-1.5 w-full rounded-full bg-white/10">
                <motion.span
                  className="block h-full rounded-full bg-gradient-to-r from-emerald-300/70 via-emerald-400/70 to-emerald-200/70"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${Math.round(value * 100)}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="space-y-2">
            <div className="h-2 w-16 rounded-full bg-white/25" />
            <div className="h-2 w-10 rounded-full bg-white/10" />
          </div>
          <div className="mt-4 grid h-24 grid-cols-6 items-end gap-2">
            {bars.map((value, index) => (
              <motion.div
                key={`bar-${value}`}
                className="w-full rounded-full bg-blue-500 shadow-lg shadow-blue-500/20"
                initial={{ height: "18%" }}
                whileInView={{ height: `${Math.round(value * 100)}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="h-2 w-14 rounded-full bg-white/25" />
          <div className="mt-3 h-3 w-12 rounded-full bg-emerald-300/70" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="h-2 w-12 rounded-full bg-white/25" />
          <div className="mt-3 h-3 w-16 rounded-full bg-white/20" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="h-2 w-10 rounded-full bg-white/25" />
          <div className="mt-3 h-3 w-12 rounded-full bg-sky-300/70" />
        </div>
      </div>
    </motion.div>
  );
}
