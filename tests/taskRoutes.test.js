const request = require('supertest');
const app = require('../index.js'); 
describe('API Task Manager', () => {
  let taskId;

  // Teste para criar uma nova tarefa
  it('deve criar uma nova tarefa', async () => {
    const res = await request(app)
      .post('/api/tasks') 
      .send({
        title: 'Estudar Node.js',
        description: 'Aprender sobre Express e rotas',
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Estudar Node.js');
    expect(res.body.description).toBe('Aprender sobre Express e rotas');

    taskId = res.body.id; 
  });

  // Teste para listar todas as tarefas
  it('deve listar todas as tarefas', async () => {
    const res = await request(app).get('/api/tasks'); 

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0); 
  });

  // Teste para atualizar uma tarefa existente
  it('deve atualizar uma tarefa existente', async () => {
    const res = await request(app)
      .put(`/api/tasks/${taskId}`)  
      .send({
        title: 'Estudar Node.js e Express',
        description: 'Aprender sobre middlewares e rotas',
      });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Estudar Node.js e Express');
    expect(res.body.description).toBe('Aprender sobre middlewares e rotas');
  });

  // Teste para remover uma tarefa
  it('deve remover uma tarefa', async () => {
    const res = await request(app).delete(`/api/tasks/${taskId}`); 

    expect(res.status).toBe(204); 
  });
});
