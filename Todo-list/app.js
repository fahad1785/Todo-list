const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json()); // Parse JSON data
app.use(express.static("public")); // Serve static files from the public folder

// In-memory tasks array
let tasks = [];

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const newTask = { id: tasks.length + 1, title, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task (mark as complete/incomplete)
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { completed } = req.body;

  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.completed = completed !== undefined ? completed : task.completed;
  res.json(task);
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== taskId);
  res.json({ message: "Task deleted successfully" });
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`To-Do list app running at http://localhost:${port}`);
});

