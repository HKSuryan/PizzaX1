import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
//import { api_client } from '../../../shared/services/api-client';
import networkOperations from '../../../shared/services/networkcall';
export const AddPizza = () => {
    const desc = useRef();
    const name = useRef();
    const idRef = useRef();
    const src = useRef();
    const price = useRef();
    const [message, setMessage] = useState('');
    const doRegister=async()=>{
        const userInfo={
            'pizzaId':idRef.current.value,
            'pizzaName':name.current.value,
            'pizzaDesc':desc.current.value,
            'pizzaSrc':src.current.value,
            'pizzaPrice':price.current.value
        }
        try{
        const response = await networkOperations.postData("https://jmd-kwob.onrender.com/addpizza",userInfo);
        setMessage(response.data.message);
        console.log("Response is ",response);
    }
        catch(err){
            setMessage('Register Fail...');
            console.log("Error is ",err);
        }

    }
  return (
    <Container>
        <p>{message}</p>
        <TextField inputRef = {name} id="outlined-basic" label="Pizza Name" variant="outlined" />
        <TextField inputRef ={desc} id="outlined-basic" label="Pizza Description"variant="outlined" />
        <TextField inputRef = {idRef} id="outlined-basic" label="Pizza id" variant="outlined" />
        <TextField inputRef={price} id="outlined-basic" label="Price"  variant="outlined" />
        <TextField inputRef={src} id="outlined-basic" label="Image"  variant="outlined" />
        <Button onClick={doRegister}>Add</Button>
        </Container>
  )
}
