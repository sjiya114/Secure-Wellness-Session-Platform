# Secure Wellness Session Platform

A full-stack web application for managing and participating in wellness sessions, such as yoga, meditation, fitness, and more. The platform allows users to register, log in, create, draft, publish, and browse wellness sessions securely.

## Features

- User registration and secure login (JWT-based authentication)
- Create, draft, edit, and publish wellness sessions
- Browse all sessions, published sessions, and drafts
- Upload session images (Cloudinary integration)
- Responsive React frontend with Tailwind CSS
- RESTful API backend using Express and MongoDB (Mongoose)
- Session search and filtering (by title, tag, or host)
- Secure password storage (bcrypt)
- Environment-based configuration

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, Cloudinary, Multer, JWT, bcrypt
- **Other:** dotenv, cors

## Folder Structure

```
backend/
  config/
  controller/
  middleware/
  models/
  routes/
  .env
  package.json
  server.js

frontend/
  public/
  src/
    assets/
    components/
    context/
    pages/
    App.jsx
    main.jsx
    index.css
  .env
  package.json
  vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas account or local MongoDB
- Cloudinary account (for image uploads)

### Backend Setup

1. Go to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file (see `.env` in the repo for required variables).
4. Start the backend server:
   ```sh
   node server.js
   ```
   The backend runs on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Go to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with:
   ```
   VITE_BACKEND_URL=http://localhost:5000
   ```
4. Start the frontend dev server:
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:5173](http://localhost:5173) by default.

## Usage

- Register a new user or log in.
- Create, edit, draft, and publish wellness sessions.
- Browse all available sessions or filter by published/draft status.
- Manage your sessions from the dashboard.

## Environment Variables

**Backend (`backend/.env`):**
```
MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
```

**Frontend (`frontend/.env`):**
```
VITE_BACKEND_URL=http://localhost:5000
```

## License

This project is licensed under the ISC License.

---

**Author:** Jiya Sharma
 