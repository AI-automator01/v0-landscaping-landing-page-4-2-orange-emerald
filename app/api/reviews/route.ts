import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;

  // Gracefully return empty list when env vars aren't configured yet
  if (!token || !baseId) {
    return NextResponse.json({ records: [] });
  }

  try {
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
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ records: [] });
    }

    const data = await res.json();
    return NextResponse.json({ records: data.records || [] });
  } catch {
    return NextResponse.json({ records: [] });
  }
}
