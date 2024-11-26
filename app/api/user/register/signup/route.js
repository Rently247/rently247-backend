import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import crypto from "crypto";
import { passwordEncryptor } from "@/util/passwordEncryptor";

const prisma = new PrismaClient();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

export async function POST(request) {
  try {
    const { firstName, lastName, email, password } = await request.json();
    const hashedPassword = await passwordEncryptor(password);

    if (!email || !firstName || !lastName || !password) {
      return NextResponse.json(
        { message: "Please, fill all fields on the form" },
        { status: 400 }
      );
    }

    // const verificationToken = crypto.randomBytes(32).toString("hex");
    // const verificationLink = `${process.env.BASE_URL}/api/user/register/verify?token=${verificationToken}`;

    // await transporter.sendMail({
    //   to: email,
    //   from: process.env.AUTH_EMAIL,
    //   subject: "Verify your email rently247 account",
    //   html: `<p>Hello ${name}</p>
    //                 <p>Please verify your email through this link:</p>
    //                 <a href="${verificationLink}">Confirm email</a>`,
    // });

    await prisma.$connect();

    const userData = {
      firstName,
      lastName,
      email,
      hashedPassword,
      properties: [],
      verificationToken,
    };

    const user = await prisma.user.create({
      data: userData,
    });

    console.log(" user------------->", user);

    // return NextResponse.json(
    //   { message: `Email verification sent to ${user.email}` },
    //   { status: 200 }
    // );

    return NextResponse.json(
      { message: `User created successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
