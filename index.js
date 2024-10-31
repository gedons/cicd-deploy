// index.js
const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// Toggle todo completion
app.patch('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
