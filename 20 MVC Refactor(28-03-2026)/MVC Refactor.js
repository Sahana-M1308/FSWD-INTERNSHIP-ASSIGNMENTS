                                                             Assignment-20(Refactor the task API into MVC structure)


models.js

let tasks = [
    { id: 1, name: "Study", status: "pending" },
    { id: 2, name: "Workout", status: "done" }
];

module.exports = tasks;


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Controllers.js

let tasks = require("../models/taskModel");

// CREATE
exports.addTask = (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        name: req.body.name,
        status: req.body.status
    };
    tasks.push(newTask);
    res.send("Task added");
};

// READ ALL
exports.getTasks = (req, res) => {
    res.json(tasks);
};

// READ ONE
exports.getTaskById = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.send("Task not found");
    res.json(task);
};

// UPDATE
exports.updateTask = (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);
    if (!task) return res.send("Task not found");

    task.name = req.body.name || task.name;
    task.status = req.body.status || task.status;

    res.send("Task updated");
};

// DELETE
exports.deleteTask = (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.send("Task deleted");
};

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Routes.js

const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.post("/tasks", taskController.addTask);
router.get("/tasks", taskController.getTasks);
router.get("/tasks/:id", taskController.getTaskById);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Server.js

const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

// use routes
app.use("/", taskRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});