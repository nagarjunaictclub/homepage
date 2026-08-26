import bcrypt from "bcrypt";
import clientPromise from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, member } = body;

    if (!email || !password) {
      return new NextResponse("missing fields", {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB);

    const exist = await db.collection("signup").findOne({ email: email });
    console.log(exist);

    if (exist) {
      return new NextResponse("email already exists", {
        status: 400,
      });
    }

    const genSalt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, genSalt);

    const data = await db.collection("signup").insertOne({
      email,
      hashedpassword,
      member,
    });

    return NextResponse.json({ data });
  } catch (e) {
    console.log(e);
  }
}
