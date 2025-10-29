import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { supabase, /*supabaseAdmin*/ } from "@/src/common/services";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await params;

  const { data, error } = await supabase
    .from("locations")
    .select(`
      id,
      city,
      country,
      created_at,
      updated_at
    `)
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, {
      status: 500
    });
  }

  if (!data) {
    return NextResponse.json({
      success: false,
      error: "Location not found"
    }, {
      status: 404
    });
  }

  return NextResponse.json({
    success: true,
    data,
  });
};

// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ): Promise<Response> {
//   const { id } = await params;
//   const updates = await req.json();
//   const { data, error } = await supabaseAdmin
//     .from("locations")
//     .update(updates)
//     .eq("id", id)
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
//   });
// };

// export async function DELETE(
//   _: NextRequest,
//   { params }: { params: Promise<{ id: string }> }
// ): Promise<Response> {
//   const { id } = await params;
//   const { error } = await supabaseAdmin
//     .from("locations")
//     .delete()
//     .eq("id", id);

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
//     message: "Location removed"
//   });
// };
