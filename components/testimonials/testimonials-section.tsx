"use client"

import React, { useEffect, useState } from 'react'
import { Trees } from "lucide-react" // Updated icon import
import { cn } from "@/lib/utils"

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
    <div className="bg-transparent py-24 px-6 border-t border-veridian-green/10" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black text-veridian-green uppercase tracking-tighter mb-6">
              Proven <span className="text-veridian-gold">Results.</span>
            </h2>
            <p className="text-lg text-veridian-green/70 border-l-2 border-veridian-gold pl-6 uppercase tracking-[0.2em] font-bold">
              Trusted feedback from our landscaping clients.
            </p>
          </div>
          <a href={AIRTABLE_FORM_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-[0.3em] rounded-none text-white bg-veridian-green hover:bg-veridian-gold hover:text-veridian-green transition-all duration-300 shadow-xl">
            Leave a review
          </a>
        </div>

        {loading ? (
          <div className="text-center py-20 text-veridian-green/40 uppercase tracking-[0.3em] animate-pulse font-black text-sm">
            Loading Testimonials...
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-20 bg-[#E2E8E4] border border-veridian-green/10 rounded-2xl">
            <p className="text-veridian-green/60 uppercase tracking-widest italic font-bold">No reviews yet. Be the first!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id}
                className="group relative bg-[#E2E8E4] p-10 border border-veridian-green/10 flex flex-col h-full rounded-[2rem] hover:shadow-2xl transition-all duration-500 overflow-hidden">

                {/* THE DROP-DOWN LINE: 
                    Expands from top to bottom on card hover */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-veridian-gold group-hover:h-full transition-all duration-700 ease-in-out shadow-[2px_0_10px_rgba(0,0,0,0.1)]" />

                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl transition-colors duration-500 ${i < (review.fields.Stars || 0) ? "text-[#8C6D2D]" : "text-veridian-green/10"}`}>
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-veridian-green/90 text-lg leading-relaxed mb-10 font-medium italic">
                  &ldquo;{review.fields["Review Text"]}&rdquo;
                </p>

                <div className="mt-auto pt-8 border-t border-veridian-green/10 flex items-center justify-between">
                  <div>
                    <p className="font-black uppercase tracking-widest text-veridian-green text-sm">
                      {review.fields["Customer Name"]}
                    </p>
                    <p className="text-[9px] text-veridian-green/40 font-black uppercase tracking-[0.2em] mt-1">Verified Estate Owner</p>
                  </div>
                  {/* Updated Trees Icon with hover effect */}
                  <Trees className="h-5 w-5 text-veridian-green/20 group-hover:text-veridian-gold transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}