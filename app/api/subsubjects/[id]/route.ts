import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import supabase from "@/src/lib/supabase";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const { id } = params;

  const { data, error } = await supabase
    .from("subsubjects")
    .select(`
      id,
      name,
      subjects (id, name),
      created_at,
      updated_at
    `)
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  if (!data) {
    return NextResponse.json(
      { success: false, error: "Книгу не знайдено" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data,
  });
};
