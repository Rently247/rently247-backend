-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Student', 'Vendor');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "school" TEXT,
    "major" TEXT,
    "role" "Role" NOT NULL DEFAULT 'Student',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "frontImage" TEXT NOT NULL,
    "backImage" TEXT NOT NULL,
    "bedroomImage" TEXT NOT NULL,
    "bathroomImage" TEXT NOT NULL,
    "livingroomImage" TEXT NOT NULL,
    "bedroom1Image" TEXT NOT NULL,
    "bedroom2Image" TEXT,
    "bedroom3Image" TEXT,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
