"use client"

import React, { useEffect, useState } from 'react'

export function ReviewBadge() {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCount() {
      try {
        const res = await fetch('/api/reviews/count');
        const data = await res.json();
        setCount(data.count || 0);
      } catch (e) {
        console.error("Failed to load review count:", e);
      } finally {
        setIsLoading(false);
      }
    }
    getCount();
  }, []);

  if (isLoading || count === 0) return null;

  return (
    /* Glass pill: Increased border opacity and blur for the orange background */
    <div className="flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-xl border border-white/30 w-fit px-4 py-1.5 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-1000 shadow-xl">
      {/* Stars: Changed from Green/Gold to Pure White */}
      <div className="flex text-white text-[10px] tracking-widest">
        {"★★★★★"}
      </div>

      {/* Divider */}
      <div className="h-3 w-px bg-white/20 mx-1" />

      {/* Text: Changed to White/90 for maximum readability */}
      <span className="text-white text-xs font-bold uppercase tracking-tight">
        Trusted by {count} homeowners
      </span>
    </div>
  );
}