import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Pulling from .env.local (This is the secure way)
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    if (!token || !baseId || !tableName) {
      console.error("Missing Environment Variables");
      return NextResponse.json({ error: "Config Error" }, { status: 500 });
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Points back to process.env.AIRTABLE_TOKEN
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      // This will print the EXACT reason in your terminal (e.g., "Unknown field name")
      console.error("AIRTABLE REJECTION:", JSON.stringify(errorData, null, 2));
      return NextResponse.json({ error: "Airtable Rejected", details: errorData }, { status: 500 });

    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server Crash" }, { status: 500 });
  }
}