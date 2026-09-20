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

## Key Points to Remember

Use bcrypt to hash passwords before storing them in the database. Hashing is one-way, so even if the database leaks, the original passwords aren't recoverable, only verifiable via comparison.

## API Endpoints
| Method | Endpoint                    | Description         |
|--------|------------------------------|----------------------|
| POST   | `/api/v1/users/register`     | Register a new user |
| POST   | `/api/v1/users/login`        | Log in a user        |
| POST   | `/api/v1/users/logout`       | Log out a user       |

## HTTP Methods

| Method | Meaning | Example |
|---|---|---|
| `GET` | Get / read data | Get a user |
| `POST` | Create new data | Register a user |
| `PUT` | Replace the entire resource | Replace a user's profile |
| `PATCH` | Update part of a resource | Update a user's email |
| `DELETE` | Delete data | Delete a user |

## HTTP Status Codes

| Code | Name | Meaning |
|---|---|---|
| `200` | OK | Request was successful |
| `201` | Created | A new resource was created |
| `204` | No Content | Request succeeded, but there is no response body |
| `400` | Bad Request | Invalid request or input |
| `401` | Unauthorized | Authentication is required |
| `403` | Forbidden | You are authenticated but not allowed to perform this action |
| `404` | Not Found | The requested resource does not exist |
| `409` | Conflict | Data already exists or conflicts with the request |
| `500` | Internal Server Error | Something went wrong on the server |