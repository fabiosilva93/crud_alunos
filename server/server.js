import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crud_alunos"
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM alunos";
    db.query(sql, (err, result) => {
        if(err){
            return res.json({Message: "Algo inesperado aconteceu " + err});
        }else{
            return res.json(result);
        }
    })
});

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM alunos WHERE id_aluno = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if(err){
            return res.json({Message: "Algo inesperado aconteceu " + err});
        }else{
            return res.json(result);
        }
    })
});

app.post('/aluno', (req, res) => {
    const sql = "INSERT INTO alunos (`nome`, `email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, result) => {
        if(err){
            return res.json(err);
        }else{
            return res.json(result);
        };
    });
});

const port = 5000;

app.listen(port, ()=> {
    console.log("server rodando em http://localhost:" + port);
});