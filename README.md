# Product CRUD Application

This is a **simple full-stack CRUD application** that I built to practice and understand how frontend and backend communicate with each other.

The project allows users to **Add, View, Edit, and Delete products** from a database using a clean React UI and a Node.js backend.

---

## 🛠 Tech Stack Used

### Frontend

* React (Vite)
* TypeScript
* Axios
* Simple CSS (no UI libraries)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## ✨ Features

* Add new products
* Edit existing products
* Delete products
* View all products
* REST API integration
* MongoDB data persistence

---

## 📂 Project Structure

```
product-crud/
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.tsx
    │   ├── ProductForm.tsx
    │   ├── api.ts
    │   ├── style.css
    │   └── main.tsx
    └── package.json
```

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/products     | Get all products |
| POST   | /api/products     | Add new product  |
| PUT    | /api/products/:id | Update product   |
| DELETE | /api/products/:id | Delete product   |

---

## 🧠 What I Learned From This Project

* How React frontend communicates with backend APIs
* CRUD operations using Express and MongoDB
* State management using React hooks
* API integration using Axios
* Handling forms and user inputs
* Project structure for full-stack apps

---

## 🚀 Future Improvements

* Add authentication (JWT)
* Add form validations
* Improve UI design
* Deploy project online

---
