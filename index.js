const express = require('express');

const server = express;

server.use(express.json());

const cursos = ['English 101', 'Spanish 101', 'Portuguese for foreigners'];

//Para retornar um curso com get

server.get('/cursos/:index', (req,res)=>{
    const { index } = req.params;

    return res.json(cursos[index]);

});


// Para retornar todos los cursos com get
server.get('/cursos', (req,res)=>{
     return res.json(cursos);

});

//Para criar um novo curso com post
server.post('/cursos', (req,res)=>{
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);

});

//Para atualizar com put

server.put('/cursos/:index', (req,res)=>{
    const { index } = req.params;
    const { name }  = req.body;

    cursos [index] = name;

    return res.json(cursos);

});

//Deletar um curso com delete

server.delete('/cursos/:index', (req,res)=>{
    const { index } = req.params;

    cursos.splice(index, 1);

    return res.json({message:'Curso delteado com sucesso'});
});

server.listen(3000);
