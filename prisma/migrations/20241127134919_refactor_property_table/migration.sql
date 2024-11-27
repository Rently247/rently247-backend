/*
  Warnings:

  - You are about to drop the column `backImage` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `bathroomImage` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `bedroom1Image` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `bedroom2Image` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `bedroom3Image` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `bedroomImage` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `frontImage` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `livingroomImage` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Property` table. All the data in the column will be lost.
  - Added the required column `apartmentType` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bathrooms` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedrooms` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guests` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseAddress` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `period` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sector` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toilets` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "backImage",
DROP COLUMN "bathroomImage",
DROP COLUMN "bedroom1Image",
DROP COLUMN "bedroom2Image",
DROP COLUMN "bedroom3Image",
DROP COLUMN "bedroomImage",
DROP COLUMN "frontImage",
DROP COLUMN "livingroomImage",
DROP COLUMN "location",
ADD COLUMN     "apartmentType" TEXT NOT NULL,
ADD COLUMN     "bathrooms" INTEGER NOT NULL,
ADD COLUMN     "bedrooms" INTEGER NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "estateName" TEXT,
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "guests" INTEGER NOT NULL,
ADD COLUMN     "houseAddress" TEXT NOT NULL,
ADD COLUMN     "landmark" TEXT,
ADD COLUMN     "period" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "propertyImages" TEXT[],
ADD COLUMN     "province" TEXT NOT NULL,
ADD COLUMN     "sector" TEXT NOT NULL,
ADD COLUMN     "toilets" INTEGER NOT NULL;
