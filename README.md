# task-manager-api
API para gerenciamento de tarefas em Node.js com SQL Server

# Task Manager API

A Task Manager API é uma API RESTful desenvolvida com Node.js e Express para gerenciar tarefas. Esta aplicação permite criar, listar, atualizar, excluir e marcar tarefas como concluídas.

## Requisitos

### 1. Estrutura do Projeto

- **Node.js**: A aplicação foi desenvolvida utilizando Node.js e Express.
- **Banco de Dados**: A aplicação usa armazenamento em memória (não usa banco de dados real). Para produção, um banco de dados relacional como SQL Server pode ser integrado futuramente.

### 2. Funcionalidades da API

- **Criar Tarefa**: Cria uma nova tarefa com título e descrição.
- **Atualizar Tarefa**: Permite atualizar o título e a descrição de uma tarefa existente.
- **Remover Tarefa**: Permite remover uma tarefa pelo ID.
- **Listar Tarefas**: Lista todas as tarefas cadastradas.
- **Marcar Tarefa como Concluída**: Marca uma tarefa como concluída.

### 3. Testes Automatizados

A aplicação inclui testes unitários e de integração para garantir o funcionamento correto da API. 

### 4. Monitoramento

A aplicação expõe métricas através do endpoint `/metrics` que podem ser usadas por sistemas de monitoramento como Prometheus.

## Instruções

### 1. Configuração do Ambiente

#### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

#### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/task-manager-api.git
   cd task-manager-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente (se necessário):

   ```bash
   touch .env
   ```

   Exemplo de configuração do `.env` (se necessário):

   ```ini
   PORT=3000
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

### 2. Endpoints da API

A API possui os seguintes endpoints:

- **POST /api/tasks**: Cria uma nova tarefa.
  
  Exemplo de body:
  
  ```json
  {
    "title": "Estudar Node.js",
    "description": "Estudar sobre Express e rotas"
  }
  ```

- **GET /api/tasks**: Lista todas as tarefas.

- **PUT /api/tasks/:id**: Atualiza uma tarefa existente pelo ID.

  Exemplo de body:
  
  ```json
  {
    "title": "Estudar Node.js e Express",
    "description": "Estudar sobre middlewares e rotas"
  }
  ```

- **PATCH /api/tasks/:id/complete**: Marca uma tarefa como concluída.

- **DELETE /api/tasks/:id**: Remove uma tarefa pelo ID.

### 3. Testes

A API inclui testes unitários e de integração utilizando Jest. Para rodar os testes:

1. Instale as dependências de desenvolvimento (se não instaladas):

   ```bash
   npm install --save-dev jest supertest
   ```

2. Execute os testes:

   ```bash
   npm test
   ```

   Isso executará todos os testes do projeto e mostrará a cobertura de testes.

### 4. Monitoramento

A aplicação expõe métricas no endpoint `/metrics`, que pode ser acessado por sistemas como o **Prometheus**. Para visualizar as métricas, acesse:

- **GET /metrics**: Exibe as métricas da aplicação.

A aplicação registra o número de tarefas criadas usando o `prom-client`.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
task-manager-api/
│
├── index.js            # Arquivo principal que configura as rotas e o servidor
├── package.json        # Dependências e scripts
├── .env                # Arquivo de configuração de variáveis de ambiente
├── README.md           # Documentação do projeto
└── tests/              # Diretório com os testes automatizados
    ├── taskController.test.js  # Testes para o controller
    └── taskRoutes.test.js      # Testes para as rotas
```

## Observações

- **Monitoramento**: Para monitorar as métricas expostas, configure o Prometheus para buscar dados do endpoint `/metrics` e use o Grafana para visualizar as métricas.
- **Banco de Dados**: O armazenamento de dados atualmente é em memória, mas você pode facilmente integrar um banco de dados como o SQL Server para persistência real dos dados.