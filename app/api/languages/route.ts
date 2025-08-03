import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import supabase from "@/src/lib/supabase";

export async function GET(req: NextRequest): Promise<Response> {
  const url = new URL(req.url);
  const limit = parseInt(url.searchParams.get("limit") ?? "10", 10);
  const offset = parseInt(url.searchParams.get("offset") ?? "0", 10);

  const { data, error, count } = await supabase
    .from("languages")
    .select(`
      id,
      name,
      created_at,
      updated_at
    `, { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);
  
  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    data,
    count,
    limit,
    offset
  });
};
