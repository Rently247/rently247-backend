import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(request) {
try {
    const {email, password } = await request.json();

    if(!email || !password) {
        return NextResponse.json({message: "Missing credentials"}, {status: 400})
    }

    await prisma.$connect()

    const user = await prisma.user.findUnique({
        where: {
            email,
            password,
            isVerified: true
        }
    })

    if(!user) {
        return NextResponse.json({message: "Invalid credentials"}, {status:401})
    }

    const token = jwt.sign(
        {userId: user.id, username: user.name},
        process.env.SECRET_KEY,
        {expiresIn: "2h"}
    )

    return NextResponse.json({message: "successfully logged in", data:user, token}, {status: 200})

}catch(error){
    return NextResponse.json({message: error.message}, {status: 500})
}finally{
    await prisma.$disconnect()
}

}