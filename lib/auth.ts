import bcrypt from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "./mongo";
import { NextResponse, NextRequest } from "next/server";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, request: Request) => {
        try {
          const client = await clientPromise;
          const db = client.db(process.env.MONGODB);

          const body = request.body;
          console.log(body);
          // const res = await new Response(body).json();
          // console.log(res);
          const { email } = JSON.parse(JSON.stringify(body));

          if (!credentials.email || !credentials.password) {
            return NextResponse.json("please enter email and password", {
              status: 400,
            });
          }

          const user = await db.collection("signup").findOne({
            email: email,
          });

          if (!user) {
            return NextResponse.json("user not found", {
              status: 400,
            });
            // throw new Error("no user found");
          }

          const matchedPassword = await bcrypt.compare(
            credentials.password,
            user.hashedpassword
          );

          if (!matchedPassword) {
            return NextResponse.json("incorrect Password", {
              status: 400,
            });
            // throw new Error("Incorrect Password");
          }

          if (user) {
            return NextResponse.json(user) as any;
          }

          return null;
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
};
