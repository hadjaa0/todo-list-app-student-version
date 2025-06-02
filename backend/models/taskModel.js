const db = require("../db");

/**
 * Retrieves all tasks from the database, ordered by creation date descending.
 * @returns {Promise<Array>} An array of task objects.
 */
const getTasks = async () => {
  const res = await db.query(
    // Corrected SQL query to select all columns from the tasks table
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
}

/**
 * Inserts a new task into the database with the given title and description.
 * Sets is_complete to false and created_at to the current timestamp.
 * @param {string} title - The title of the task.
 * @param {string} description - The description of the task.
 * @returns {Promise<Object>} The newly created task object.
 */
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
