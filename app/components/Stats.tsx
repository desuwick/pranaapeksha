"use client";
import { motion, useInView, useMotionValue, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Heart, Users, Package } from "lucide-react";

type Stat = {
  id: number;
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  {
    id: 1,
    icon: <Package size={36} />,
    value: 500,
    suffix: "+",
    label: "Donations Distributed",
  },
  {
    id: 2,
    icon: <Users size={36} />,
    value: 300,
    suffix: "+",
    label: "Patients Supported",
  },
  {
    id: 3,
    icon: <Heart size={36} />,
    value: 50,
    suffix: "+",
    label: "Volunteers",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // ❌ remove { once: true } so it triggers every scroll
  const inView = useInView(ref);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      // reset to 0 every time user scrolls back
      count.set(0);
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, value, count]);

  useMotionValueEvent(count, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  return (
    <span
      ref={ref}
      className="relative text-4xl font-bold text-white mb-2 inline-block"
    >
      {display}
      {suffix}
      {/* ✅ shimmer overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent py-16 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent)]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 drop-shadow-lg">Our Impact</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl shadow-lg hover:scale-105 transition backdrop-blur-md animate-pulse-glow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: stat.id * 0.2 }}
            >
              <div className="text-white mb-4">{stat.icon}</div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-lg text-white/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
