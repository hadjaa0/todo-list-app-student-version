const express = require("express");
const router = express.Router();

// Ensure the correct path to your task model
const taskModel = require("../models/taskModel");

// Route to get all tasks
// This route retrieves all tasks from the database
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// Route to create a new task
// This route adds a new task with provided name and description
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const task = await taskModel.addTask(name, description);
  res.status(201).json(task);
});

module.exports = router;
