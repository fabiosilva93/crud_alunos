import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Home(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h2>Lista de alunos</h2>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className='btn btn-sucess'>Criar +</Link>
                </div>
                <tabe className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((alunos, index) => {
                            return <tr key={index} >
                                <td>{alunos.id_aluno}</td>
                                <td>{alunos.nome}</td>
                                <td>{alunos.email}</td>
                                <td>
                                    <Link to={`/read/${alunos.id_aluno}`} className='btn btn-sm btn-info'>Visualizar</Link>
                                    <button className='btn btn-sm btn-primary mx-2'>Editar</button>
                                    <button className='btn btn-sm btn-danger'>Apagar</button>
                                </td>
                            </tr>    
                        })}
                    </tbody>
                </tabe>
            </div>
        </div>
    );
};

export default Home;