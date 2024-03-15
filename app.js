const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Simulação de uma base de dados
let data = [];

app.get('/', (req, res) => {
    res.send("Home");
});

// Rota para método GET
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Rota para método POST
app.post('/api/data', (req, res) => {
    const newItem = req.body;
    data.push(newItem);
    res.status(201).json(newItem);
});

// Rota para método PUT
app.put('/api/data/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    data[itemId] = updatedItem;
    res.json(updatedItem);
});

// Rota para método DELETE
app.delete('/api/data/:id', (req, res) => {
    const itemId = req.params.id;
    const deletedItem = data[itemId];
    data.splice(itemId, 1);
    res.json(deletedItem);
});

// Rota para método OPTIONS
app.options('/api/data', (req, res) => {
    res.setHeader('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    res.sendStatus(200);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
