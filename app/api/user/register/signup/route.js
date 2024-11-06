import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import crypto from "crypto";

const prisma = new PrismaClient();
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
});

export async function POST(request) {
    try {
        const { email, name, phone, password, school, major, role } = await request.json();

        if (!email || !name || !phone || !password) {
            return NextResponse.json({ message: "Missing credentials" }, { status: 400 });
        }

        const verificationToken = crypto.randomBytes(32).toString("hex");
        const verificationLink = `${process.env.BASE_URL}/api/user/register/verify?token=${verificationToken}`;
        
        await transporter.sendMail({
            to: email,
            from: process.env.AUTH_EMAIL,
            subject: "Verify your email rently247 account",
            html: `<p>Hello ${name}</p>
                    <p>Please verify your email through this link:</p>
                    <a href="${verificationLink}">Confirm email</a>`
        });

        await prisma.$connect();

        const userData = { 
            name, 
            email, 
            phone, 
            password, 
            verificationToken 
        };
        if (school) userData.school = school;
        if (major) userData.major = major;
        if (role) userData.role = role;

        const user = await prisma.user.create({
            data: userData
        });

        return NextResponse.json({ message: `Email verification sent to ${user.email}` }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error}, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
