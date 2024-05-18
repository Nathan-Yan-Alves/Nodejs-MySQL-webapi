const db = require('./db.js');
require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get("/", (req,res) => {
    res.json({message: "Funcionando..."});
})

app.get("/alunos", async(req,res) => {
    await db.selectStudents().then(result => {
        res.json({
            aluno1: result[0][0],
            aluno2: result[0][1],
            aluno3: result[0][2],
            aluno4: result[0][3],
            aluno5: result[0][4],
            aluno6: result[0][5],
            aluno7: result[0][6],
        })
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})