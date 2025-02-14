const express = require('express');
const promClient = require('prom-client');
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Simulação de banco de dados
let tasks = [
  { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1', isCompleted: false },
  { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2', isCompleted: false },
];

// Criando a métrica para contagem de tarefas
const taskCounter = new promClient.Counter({
  name: 'task_count',
  help: 'Contagem de tarefas criadas',
  labelNames: ['status'],  // Status da tarefa
});

// Expondo o endpoint de métricas
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', promClient.register.contentType);
  res.end(await promClient.register.metrics());
});

// Rota POST para criar uma nova tarefa
app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  const task = { id: Date.now(), title, description, isCompleted: false };
  tasks.push(task);
  taskCounter.inc({ status: 'created' });  
  res.status(201).json(task);
});

// Rota GET para listar todas as tarefas
app.get('/api/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// Rota PUT para atualizar uma tarefa existente
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  let updatedTask = tasks.find(task => task.id == id);
  if (updatedTask) {
    updatedTask.title = title;
    updatedTask.description = description;
    res.status(200).json(updatedTask);
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
});

// Rota PATCH para marcar tarefa como concluída
app.patch('/api/tasks/:id/complete', (req, res) => {
  const { id } = req.params;
  let task = tasks.find(task => task.id == id);
  if (task) {
    task.isCompleted = true;
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
});

// Rota DELETE para remover uma tarefa
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.status(204).send();
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}
