const express = require("express");
const {Sequelize, DataTypes} = require("sequelize");
const TaskModel = require('./models/tasks');
const app = express();
const PORT = process.env.PORT || 5000;

const Connection = new Sequelize({
    dialect: 'sqlite',
    storage: './task-list.db'
});

const Task = TaskModel(Connection, DataTypes);

app.use(express.json());

// List tasks Lista de tarefas
app.get('/tasks', async (req, res) => {
    //recebe todas as tarefas da tabela tarefas
    const AllTasks=await Task.findAll();
    //enviamos as tarefas para o usuario dentro de data
    res.json({ action: 'Listing tasks', data : AllTasks});
})

// Create task Criar Tarefa
app.post('/tasks', async (req, res) => {
    //recebendo os dados da tarefa
    const form = req.body;
    //criando novas tarefas no banco de dados na tabela tarefas
    const resposta = await Task.create({description:form.description, done:form.done});
    //ennviando para o cliente a resposta de sequelize
    res.json({action: 'Create task', message: resposta});
})

// Show task Mostrar Tarefas Por ID
app.get('/tasks/:id', async (req, res) => {
    //recebendo o id da tarefa pela url
    const taskId = req.params.id;
    //consultar as tarefas da tabela pelo id
    const Tarefa =  await Task.findByPk(taskId);
    //devolvemos como resposta apenas a tarefa
    res.send({ action: 'Showing task', taskId: taskId , data: Tarefa});
})

// Update task Atualizar Tarefas
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Updating task', taskId: taskId });
})

// Delete task Apagar Tarefas
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Deleting task', taskId: taskId });
})



app.listen(PORT,()=>{
    console.log(`        
        http://localhost:${PORT}
    `);
});