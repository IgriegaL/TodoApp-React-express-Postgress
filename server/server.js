const PORT = process.env.PORT ?? 8000;
const express = require("express");
const {v4: uuidv4 } = require('uuid')
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());

// get all todos
app.get("/todos/:userEmail", async (req, res) => {
  try {
    console.log(req.params);
    const { userEmail } = req.params;
    const todos = await pool.query(
      "select * from todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    console.log(error);
  }
});

// Create one toDO
app.post('/todos', (req,res) => {

  const {user_email,title,progress,date} = req.body
  console.log(' *** user_email,title,progress,date ->' + user_email,title,progress,date)
  // Hacer un nuevo id
  const id = uuidv4()
  try {
    pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1,$2,$3,$4,$5)`,
    // Front 
    [id,user_email,title,progress, date]
    )
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => console.log(`Server corriendo en ${PORT}`));
