const express = require('express');
const cors = require('cors');
const pool = require('./config/db');
require('dotenv').config();

const app = express();
const port =  3500;

app.use(cors());
app.use(express.json());




app.get('/questions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM questions');
    res.json(result.rows);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Server xatosi');
  }
});

app.get('/questions/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query('SELECT answer FROM questions WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Server xatosi');
  }
});

app.post('/questions', async (req, res) => {
  const { question, answer } = req.body;
  if (!question || !answer) {
    return res.status(400).send('Savol va javob kiritilishi shart');
  }
  try {
    const result = await pool.query(
      'INSERT INTO questions (question, answer) VALUES ($1, $2) RETURNING *',
      [question, answer]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.stack);
    res.status(500).send('Server xatosi');
  }
});


app.listen(port, () => {
  console.log(`Server ${port}-portda ishlamoqda`);
});