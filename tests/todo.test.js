// tests/todo.test.js
const { test, expect } = require('@playwright/test');

test.describe('Todo API', () => {
  test('should create a new todo', async ({ request }) => {
    const newTodo = { text: 'CI/CD with Playwright' };
    const response = await request.post('/todos', { data: newTodo });
    expect(response.status()).toBe(201);
    const todo = await response.json();
    expect(todo.text).toBe(newTodo.text);
    expect(todo.completed).toBe(false);
  });

  test('should fetch all todos', async ({ request }) => {
    const response = await request.get('/todos');
    expect(response.status()).toBe(200);
    const todos = await response.json();
    expect(Array.isArray(todos)).toBe(true);
  });
});
