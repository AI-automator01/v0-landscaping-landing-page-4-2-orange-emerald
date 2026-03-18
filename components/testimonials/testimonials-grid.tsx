import React from 'react'

// 1. Define the TypeScript structure to stop the "any" type errors
interface AirtableReview {
  id: string;
  fields: {
    CustomerName: string;
    ReviewText: string;
    Stars: number;
    ServiceProvided?: string;
    Approved?: boolean;
  };
}

async function getTestimonials(): Promise<AirtableReview[]> {
  // Replace these with your actual Environment Variables in Vercel
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
  const token = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN;
  const tableName = 'Testimonials';

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula=({Approved}=1)`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 3600 }, // Refreshes the cache every hour
      }
    );

    if (!res.ok) throw new Error('Failed to fetch testimonials');

    const data = await res.json();
    return data.records;
  } catch (error) {
    console.error("Airtable Error:", error);
    return [];
  }
}

export default async function TestimonialsGrid() {
  const reviews = await getTestimonials();

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Customer Stories</h2>
          <p className="text-lg text-slate-600">See why homeowners trust us with their landscapes.</p>
        </div>

        {reviews.length === 0 ? (
          <p className="text-center text-slate-400">No approved reviews to show yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review: AirtableReview) => (
              <div
                key={review.id}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.fields.Stars)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed italic mb-6">
                    "{review.fields.ReviewText}"
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <p className="font-bold text-slate-900">{review.fields.CustomerName}</p>
                  {review.fields.ServiceProvided && (
                    <p className="text-sm text-green-700 font-medium">
                      {review.fields.ServiceProvided}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}