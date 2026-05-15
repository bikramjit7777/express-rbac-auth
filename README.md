# express-rbac-auth

A Node.js + Express RBAC (Role-Based Access Control) authentication service using JWT, bcrypt, and MongoDB.

## Project Overview

This repository implements a simple authentication and authorization API with role-based access control. Users can register and log in, and protected routes are restricted by role: `admin`, `manager`, or `user`.

## Features

- User registration with hashed passwords using `bcryptjs`
- User login with JWT token issuance via `jsonwebtoken`
- Token verification middleware for protected routes
- Role-based authorization middleware for `admin`, `manager`, and `user` access
- Express route structure for authentication and user role endpoints
- MongoDB connection managed with Mongoose

## Repository Name Suggestion

`express-rbac-auth`

This name reflects the core stack and functionality: Express, RBAC, and authentication.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-rbac-auth.git
cd express-rbac-auth
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root with the required environment variables:

```env
PORT=7002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:7002` by default.

## Environment Variables

The app expects the following environment variables:

- `PORT` - the port the server listens on (default: `7002`)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - secret key used to sign JWT tokens

## API Endpoints

### Authentication

- `POST /api/auth/register`
  - Registers a new user
  - Expected payload example:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securePassword",
  "role": "user"
}
```

- `POST /api/auth/login`
  - Logs in a user and returns a JWT token
  - Expected payload example:

```json
{
  "email": "jane@example.com",
  "password": "securePassword"
}
```

### Protected User Routes

All protected routes require an `Authorization` header with a bearer token:

```http
Authorization: Bearer <token>
```

- `GET /api/users/admin`
  - Accessible only by users with the `admin` role

- `GET /api/users/manager`
  - Accessible by users with `admin` or `manager` roles

- `GET /api/users/user`
  - Accessible by users with `admin`, `manager`, or `user` roles

## Project Structure

- `src/index.js` - entry point and route registration
- `src/config/dbConnect.js` - MongoDB connection logic
- `src/controllers/authController.js` - authentication handlers
- `src/middlewares/authMiddleware.js` - JWT verification middleware
- `src/middlewares/roleMiddleware.js` - role authorization middleware
- `src/routes/authRoutes.js` - auth-related routes
- `src/routes/userRoutes.js` - role-protected user routes
- `src/models/userModel.js` - user schema and model

## Dependencies

- `express`
- `mongoose`
- `jsonwebtoken`
- `bcryptjs`
- `dotenv`
- `nodemon` (development)
