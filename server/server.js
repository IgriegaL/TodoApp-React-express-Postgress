const PORT = process.env.PORT ?? 8000;
const express = require("express");
const {v4: uuidv4 } = require('uuid')
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json()); // Agregando el middleware body-parser

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

app.post('/todos', async (req, res) => {
  const { user_email, title, progress, date } = req.body;

  // Validar que los datos obligatorios estén presentes
  if (!user_email || !title || !progress || !date) {
    return res.status(400).send('Faltan datos obligatorios' + user_email);
  }

  // Validar el formato de los datos
  if (typeof user_email !== 'string' || typeof title !== 'string' || typeof progress !== 'number' || isNaN(Date.parse(date))) {
    return res.status(400).send('Los datos no tienen el formato adecuado');
  }

  const id = uuidv4();

  try {
    await pool.query(
      `INSERT INTO todos(id, user_email, title, progress, date) VALUES($1,$2,$3,$4,$5)`,
      [id, user_email, title, progress, date]
    );
    res.send('El todo se ha creado correctamente');
  } catch (error) {
    console.log(error);
    res.status(500).send('Ha ocurrido un error al crear el todo');
  }
});

app.listen(PORT, () => console.log(`Server corriendo en ${PORT}`));


