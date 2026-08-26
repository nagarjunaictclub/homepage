import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";
import sendmail from "@/lib/SendMail/sendmail";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB);

    const body = request.body;
    let text = await new Response(body).json();
    console.log(text);
    await sendmail(text.newsletter.email, text.newsletter.name, "newsletter");
    const newsletter = await db.collection("newsletter").insertOne(text);

    return NextResponse.json({ newsletter });
  } catch (e) {
    console.log(e);
  }
}
