import React, {useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function Read(){
    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:5000/read/'+id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, []);
    
    return(
        <h1>Read</h1>
    )
};

export default Read;