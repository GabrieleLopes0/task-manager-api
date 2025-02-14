// Importa a biblioteca supertest
const request = require('supertest');

// Importa o app (Express) para poder fazer requisições para ele
const app = require('../index.js'); // Importa o Express app sem inicializar o servidor


describe('API Task Manager', () => {
  let taskId;

  it('deve criar uma nova tarefa', async () => {
    const res = await request(app)
      .post('/api/tasks')  // A rota que você deseja testar
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

  // Outros testes podem continuar aqui
});
