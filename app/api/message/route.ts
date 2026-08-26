import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongo";
import sendmail from "@/lib/SendMail/sendmail";

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db.collection("movies").find({}).limit(10).toArray();
    return NextResponse.json({ movies });
  } catch (e) {
    console.error(e);
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB);

    const body = request.body;
    let text = await new Response(body).json();
    const messages = await db.collection("messages").insertOne(text);
    await sendmail(text.message.email,text.message.name,"message");
    return NextResponse.json({ messages });
  } catch (e) {
    console.error(e);
  }
}
