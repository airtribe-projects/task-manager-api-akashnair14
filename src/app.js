const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let id = 1;

// ================= VALIDATION =================
function validateTaskInput(body, isUpdate = false) {
  const { title, description, completed } = body;

  // for create
  if (!isUpdate) {
    if (!title || title.trim() === "") return "Title is required";
    if (!description || description.trim() === "")
      return "Description is required";
  }

  // for update
  if (title !== undefined && title.trim() === "") return "Invalid title";
  if (description !== undefined && description.trim() === "")
    return "Invalid description";

  if (completed !== undefined && typeof completed !== "boolean") {
    return "Completed must be true or false";
  }

  return null;
}

// ================= GET ALL TASKS =================
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ================= GET TASK BY ID =================
app.get("/tasks/:id", (req, res) => {
  let task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// ================= CREATE TASK =================
app.post("/tasks", (req, res) => {
  const error = validateTaskInput(req.body);
  if (error) return res.status(400).json({ message: error });

  const { title, description, completed } = req.body;

  let newTask = {
    id: id++,
    title: title.trim(),
    description: description.trim(),
    completed: completed ?? false,
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// ================= UPDATE TASK =================
app.put("/tasks/:id", (req, res) => {
  let task = tasks.find((t) => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const error = validateTaskInput(req.body, true);
  if (error) return res.status(400).json({ message: error });

  if (req.body.title !== undefined) task.title = req.body.title.trim();
  if (req.body.description !== undefined)
    task.description = req.body.description.trim();
  if (req.body.completed !== undefined) task.completed = req.body.completed;

  res.json(task);
});

// ================= DELETE TASK =================
app.delete("/tasks/:id", (req, res) => {
  let index = tasks.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  let deleted = tasks.splice(index, 1);

  res.json({
    message: "Task deleted",
    data: deleted[0],
  });
});

module.exports = app;
