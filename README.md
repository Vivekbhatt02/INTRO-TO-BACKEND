# Node.js & Express Backend Learning Project

This repo is for learning backend development with Node.js and Express.
Following the freeCodeCamp YouTube tutorial: https://youtu.be/KOutPbKc9UM?si=vmFcTFG-M5ffLbc8

## Tech Stack
- Node.js
- Express
- MongoDB with Mongoose
- bcrypt (password hashing)

## Setup

```bash
npm install
```

Create a `.env` file in the root and add 2 keys:
PORT=4000
MONGODB_URI=your_mongodb_connection_string


Run the dev server:

```bash
npm run dev
```

## API Endpoints
| Method | Endpoint                    | Description         |
|--------|------------------------------|----------------------|
| POST   | `/api/v1/users/register`     | Register a new user |
| POST   | `/api/v1/users/login`        | Log in a user        |
| POST   | `/api/v1/users/logout`       | Log out a user       |

## Key Points to Remember

1. Use bcrypt to hash passwords before storing them in the database. Hashing is one-way, so even if the database leaks, the original passwords aren't recoverable, only verifiable via comparison.