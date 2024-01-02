import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Create(){
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/aluno', values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
}

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Adicionar aluno</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Insira o nome" className="form-control" onChange={e => setValues({...values, name: e.target.value})} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">E-mail</label>
                        <input type="email" placeholder="Insira o email" className="form-control" onChange={e => setValues({...values, email: e.target.value})} />
                    </div>
                    <button className="btn btn-success">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default Create;