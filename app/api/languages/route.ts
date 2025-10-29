import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { supabase, /*supabaseAdmin*/ } from "@/src/common/services";

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
    return NextResponse.json({
      success: false,
      error: error.message
    }, {
      status: 500
    });
  }

  return NextResponse.json({
    success: true,
    data,
    count,
    limit,
    offset
  });
};

// export async function POST(req: NextRequest): Promise<Response> {
//   const body = await req.json();
//   const { data, error } = await supabaseAdmin
//     .from("languages")
//     .insert([body])
//     .select()
//     .single();

//   if (error) {
//     return NextResponse.json({
//       success: false,
//       error: error.message
//     }, {
//       status: 500
//     });
//   }
//   return NextResponse.json({
//     success: true,
//     data
//   }, {
//     status: 201
//   });
// };
