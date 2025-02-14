const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');  

// Rota para criar tarefa
router.post('/tasks', taskController.createTask);

// Rota para listar todas as tarefas
router.get('/tasks', taskController.getAllTasks);

// Rota para atualizar tarefa
router.put('/tasks/:id', taskController.updateTask);

// Rota para excluir tarefa
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
