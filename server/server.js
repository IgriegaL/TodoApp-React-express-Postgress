const PORT = process.env.PORT ?? 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());

// get all todos
app.get("/todos/:userEmail", async (req, res) => {
  try {
    console.log(req.params);
    const { userEmail } = req.params;

    /**Todos los Todo
     * const todos = await pool.query("select * from todos");
     */
    /**
     *  todos con $1 email
     */
    const todos = await pool.query(
      "select * from todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server corriendo en ${PORT}`));
