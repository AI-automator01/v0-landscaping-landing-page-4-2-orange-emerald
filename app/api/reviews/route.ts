import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = "Testimonials";

    const query = new URLSearchParams({
      filterByFormula: "({Approved}=1)",
      "sort[0][field]": "Date",
      "sort[0][direction]": "desc",
    }).toString();

    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}?${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 0 }
      }
    );

    if (!res.ok) throw new Error("Airtable fetch failed");

    const data = await res.json();
    return NextResponse.json({ records: data.records || [] });
  } catch (error) {
    return NextResponse.json({ records: [] }, { status: 500 });
  }
}