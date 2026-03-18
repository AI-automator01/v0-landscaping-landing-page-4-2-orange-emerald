import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = "Testimonials";

    const query = encodeURIComponent("{Approved}=1");
    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}?filterByFormula=${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 0 } // Ensures fresh data
      }
    );

    if (!res.ok) throw new Error("Airtable fetch failed");

    const data = await res.json();
    return NextResponse.json({ count: data.records?.length || 0 });
  } catch (error) {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}