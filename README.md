# 📌 Task Manager API (Node.js + Express)

## 🚀 Overview

This is a simple **Task Manager API** built using **Node.js and Express**.
It allows you to perform basic CRUD operations on tasks:

* Create a task
* Read all tasks
* Read a task by ID
* Update a task
* Delete a task

Each task has the following structure:

```json
{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "completed": false
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/airtribe-projects/task-manager-api-akashnair14.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node server.js
```

Server will start on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

---

### 🔹 1. Get All Tasks

**GET** `/tasks`

#### ✅ Response

```json
[
  {
    "id": 1,
    "title": "Learn Node",
    "description": "Practice APIs",
    "completed": false
  }
]
```

---

### 🔹 2. Get Task by ID

**GET** `/tasks/:id`

#### Example:

```
GET /tasks/1
```

#### ❌ If not found:

```json
{
  "message": "Task not found"
}
```

---

### 🔹 3. Create Task

**POST** `/tasks`

#### Body:

```json
{
  "title": "New Task",
  "description": "Task details",
  "completed": false
}
```

#### ❌ Validation Errors:

* Title required
* Description required
* Completed must be boolean

---

### 🔹 4. Update Task

**PUT** `/tasks/:id`

#### Example:

```
PUT /tasks/1
```

#### Body:

```json
{
  "title": "Updated Task",
  "completed": true
}
```

#### ❌ If not found:

```json
{
  "message": "Task not found"
}
```

---

### 🔹 5. Delete Task

**DELETE** `/tasks/:id`

#### Example:

```
DELETE /tasks/1
```

#### ✅ Response:

```json
{
  "message": "Task deleted"
}
```

---

## 🧪 How to Test the API

You can test this API using:

### 🔹 Postman

* Open Postman
* Select method (GET, POST, PUT, DELETE)
* Enter URL: `http://localhost:3000/tasks`
* Add JSON body (for POST/PUT)

---

### 🔹 cURL (Terminal)

#### Create Task:

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Test","description":"Test desc","completed":false}'
```

#### Get All Tasks:

```bash
curl http://localhost:3000/tasks
```

---

## ⚠️ Limitations

* Uses in-memory storage (data will reset on server restart)
* No authentication
* No database

---

## 🔥 Future Improvements

* Add MongoDB for persistent storage
* Add validation library (Joi / Zod)
* Add authentication (JWT)
* Implement pagination

---

## 👨‍💻 Author

Built as a learning project to understand backend fundamentals using Node.js and Express.
