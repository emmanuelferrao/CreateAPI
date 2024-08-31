const express = require('express');
const router = express.Router();
const Filme = require('../models/Filme');

// Criar uma nova reclamação
router.post('/', async (req, res) => {
    const { title, message } = req.body;
    const newFilme = new Filme({ title, message });
    await newFilme.save();
    res.json(newFilme);
});

// Listar todas as reclamações
router.get('/', async (req, res) => {
    const filmes = await Filme.find();
    res.json(filmes);
});

// Atualizar uma reclamação
router.put('/:id', async (req, res) => {
    const { title, message } = req.body;
    const updatedFilme = await Filme.findByIdAndUpdate(req.params.id, { title, message }, { new: true });
    res.json(updatedFilme);
});

// Deletar uma reclamação
router.delete('/:id', async (req, res) => {
    await Filme.findByIdAndDelete(req.params.id);
    res.json({ message: 'Filme deletado com sucesso!' });
});

module.exports = router;
