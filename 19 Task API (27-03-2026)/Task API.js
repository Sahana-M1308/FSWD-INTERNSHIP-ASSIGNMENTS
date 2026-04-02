                                                                  Assignment-19(Create CRUD APIs for a task manager and test using Postman)

server.js

const express = require("express");
const app = express();

app.use(express.json());

// Simple data
let tasks = [
    { id: 1, name: "Study", status: "pending" },
    { id: 2, name: "Workout", status: "done" }
];

// Home
app.get("/", (req, res) => {
    res.send("Task API Running");
});

// CREATE task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        status: req.body.status
    };
    tasks.push(newTask);
    res.send("Task added");
});

// READ all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// READ one task
app.get("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.send("Task not found");
    res.json(task);
});

// UPDATE task
app.put("/tasks/:id", (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.send("Task not found");

    task.name = req.body.name || task.name;
    task.status = req.body.status || task.status;

    res.send("Task updated");
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.send("Task deleted");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});