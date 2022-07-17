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


// List tasks Lista de tarefas
app.get('/tasks', async (req, res) => {
    const AllTasks=await Task.findAll();
    res.json({ action: 'Listing tasks', data : AllTasks})
})

// Create task Criar Tarefa
app.post('/tasks', (req, res) => {
    const body = req.body

    res.json(body)
})

// Show task Mostrar Tarefas Por ID
app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Showing task', taskId: taskId })
})

// Update task Atualizar Tarefas
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Updating task', taskId: taskId })
})

// Delete task Apagar Tarefas
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    res.send({ action: 'Deleting task', taskId: taskId })
})



app.listen(PORT,()=>{
    console.log(`        
        http://localhost:${PORT}
    `);
});