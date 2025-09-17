# 📘 Middleware Playground

A simple **Express.js project** to explore how **custom middlewares** work.
Includes logging, authentication (dummy), and error handling — showcasing the difference between **global vs route-level middleware** and the importance of `next()` in the request–response cycle.

---

## 🚀 Features

* **Custom Logging Middleware** – Logs request method, path, and timestamp.
* **Dummy Authentication Middleware** – Protects routes with a fake token (`x-auth-token`).
* **Error Handling Middleware** – Centralized error handling across the app.
* **Global vs Route-level Middleware** – Demonstrates scope differences.
* **Organized Folder Structure** – Middleware and routes separated for clarity.

---

## 📂 Folder Structure

```
middleware-playground/
│
├── middlewares/
│   ├── logger.js          # Logs every request
│   ├── auth.js            # Dummy authentication
│   └── errorHandler.js    # Handles errors globally
│
├── routes/
│   ├── publicRoutes.js    # Public endpoints
│   ├── dashboardRoutes.js # Protected endpoints
│   └── errorRoutes.js     # Error testing route
│
├── app.js                 # Main app entry point
├── package.json
└── package-lock.json
```

---

## 🛠️ Setup & Installation

1. Clone this repo:

   ```bash
   git clone https://github.com/devlopersumit/middleware-playground.git
   cd middleware-playground
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node app.js
   ```

   Server runs at: `http://localhost:3000`

---

## 📌 API Endpoints

| Method | Endpoint       | Middleware  | Description                         |
| ------ | -------------- | ----------- | ----------------------------------- |
| GET    | `/`            | Logger      | Welcome route                       |
| GET    | `/public`      | Logger      | Public route, no auth required      |
| GET    | `/dashboard`   | Auth+Logger | Protected route, requires token     |
| GET    | `/cause-error` | Error       | Simulates error for testing handler |

---

## 🧪 Testing with Postman

1. **Public Route**

   * `GET http://localhost:3000/public`
     ✅ Returns `"This is a public route."`

2. **Dashboard (No Token)**

   * `GET http://localhost:3000/dashboard`
     ❌ Returns `401 Unauthorized`

3. **Dashboard (With Token)**

   * `GET http://localhost:3000/dashboard`
   * Add header: `x-auth-token: mysecrettoken`
     ✅ Returns `{ "msg": "Welcome to your dashboard!" }`

4. **Error Route**

   * `GET http://localhost:3000/cause-error`
     ❌ Returns `{ "error": "Something went wrong!" }`

---

## 🔑 Key Learnings

* Middleware functions sit **between request and response**.
* `next()` is critical for passing control or jumping to error handlers.
* **Global middleware** (`app.use`) affects all routes.
* **Route-level middleware** protects/controls specific routes.
* Error handling middleware must always be **last**.
* Order of middleware registration **matters**.
* Organized folder structure makes projects **scalable and reusable**.

---

## 📜 License

This project is for **learning purposes**. Feel free to fork and extend.