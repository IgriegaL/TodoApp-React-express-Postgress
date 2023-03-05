const PORT = process.env.PORT ?? 8000;
const express = require('express');
const app = express();
const pool = require('./db');

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query("select * from todos;");
    res.json(todos.rows)
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server corriendo en ${PORT}`));
