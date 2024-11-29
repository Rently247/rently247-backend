# Rently247

## Overview

Rently247 is a streamlined, user-friendly platform designed to simplify the housing search process for students, providing an efficient solution to the time-consuming challenge of finding suitable rental properties

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Prisma ORM
- **Database**: Neon PostgreSQL
- **Image Storage**: Cloudinary
- **Additional key technologies**
- Nodemailer
- JSONWEBTOKEN

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or Yarn
- PostgreSQL client
- Cloudinary account

## Environment Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rently247/rently247-backend.git
   cd rently247-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```
    DATABASE_URL=""
    BASE_URL="http://localhost:3000"
    AUTH_EMAIL=
    AUTH_PASS=
    SECRET_KEY=
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
   ```

4. **Database Migration**
   ```bash
   npx prisma migrate dev
   # or
   yarn prisma migrate dev
   ```

## Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```

### Production Build
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Deployment

### Deployment Platforms
- Vercel

### Deployment Steps
1. Set up environment variables in your deployment platform
2. Connect your GitHub repository
3. Configure build settings

## Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- ESLint
- Prettier configuration
- Any specific coding guidelines



## Contact

- Rently247 Dev Team at ALU
- Project Link: [https://github.com/Rently247/rently247-backend](https://github.com/Rently247/rently247-backend)
