"use client"

import React, { useEffect, useState } from 'react'
import { Trees } from "lucide-react"
import { cn } from "@/lib/utils"

// --- TYPES ---
interface AirtableReview {
  id: string;
  fields: {
    "Customer Name": string;
    "Review Text": string;
    "Stars": number;
    "Service Provided"?: string;
    "Date": string;
    "Approved"?: boolean;
  };
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<AirtableReview[]>([]);
  const [loading, setLoading] = useState(true);

  const AIRTABLE_FORM_URL = "https://airtable.com/appEyzclpgcY51EIc/pagZBHPDIucHKhOub/form";

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (!res.ok) throw new Error('Fetch failed');
        const data = await res.json();
        setReviews(data.records || []);
      } catch (error) {
        console.error("Internal API Error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  return (
    <div className="bg-transparent pt-12 pb-24 px-6" id="testimonials">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Proven <span className="opacity-50">Results.</span>
            </h2>
            <p className="text-lg text-white/80 border-l-2 border-white/30 pl-6 uppercase tracking-[0.2em] font-bold">
              Trusted feedback from our landscaping clients.
            </p>
          </div>

          <a
            href={AIRTABLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-[0.3em] rounded-none text-[#da6d42] bg-white hover:bg-white/90 transition-all duration-300 shadow-2xl"
          >
            Leave a review
          </a>
        </div>

        {/* Loading / Empty States */}
        {loading ? (
          <div className="text-center py-20 text-white/20 uppercase tracking-[0.3em] animate-pulse font-black text-sm">
            Loading Testimonials...
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-sm">
            <p className="text-white/60 uppercase tracking-widest italic font-bold">No reviews yet. Be the first!</p>
          </div>
        ) : (
          /* Testimonials Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="group relative bg-white/20 backdrop-blur-md p-10 border border-white/20 flex flex-col h-full rounded-[2.5rem] hover:bg-white/25 transition-all duration-500 overflow-hidden"
              >
                {/* The Spartan Drop-Down Line */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-white group-hover:h-full transition-all duration-700 ease-in-out" />

                {/* Stars - OPTION 2: Hollow Luxury Look */}
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => {
                    const isFilled = i < (review.fields.Stars || 0);
                    return (
                      <span
                        key={i}
                        className={cn(
                          "text-xl transition-all duration-500",
                          isFilled ? "text-white scale-110" : "text-white/20"
                        )}
                        style={{
                          // Adds a subtle text stroke to create the "hollow" effect for empty stars
                          WebkitTextStroke: !isFilled ? "1px rgba(255,255,255,0.4)" : "none",
                          color: !isFilled ? "transparent" : "white"
                        }}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>

                {/* Review Body */}
                <p className="text-white text-lg leading-relaxed mb-10 font-medium italic">
                  &ldquo;{review.fields["Review Text"]}&rdquo;
                </p>

                {/* Card Footer */}
                <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-black uppercase tracking-widest text-white text-sm">
                      {review.fields["Customer Name"]}
                    </p>
                    <p className="text-[9px] text-white/40 font-black uppercase tracking-[0.2em] mt-1">
                      Verified Estate Owner
                    </p>
                  </div>
                  <Trees className="h-5 w-5 text-white/20 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}