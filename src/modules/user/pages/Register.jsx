import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
//import Box from '@mui/material/Box';
//import { api_client } from '../../../shared/services/api-client';
import networkOperations from '../../../shared/services/networkcall';
export const Register = () => {
    const name = useRef();
    const pwd = useRef();
    const emailref = useRef();
    const phone = useRef();
    const [message, setMessage] = useState('');
    const doRegister=async()=>{
        const userInfo={
            'email':emailref.current.value,
            'password':pwd.current.value,
            'name':name.current.value,
            'phone':phone.current.value
        }
        try{
        const response = await networkOperations.postData(process.env.REACT_APP_REGISTER,userInfo);
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
        <TextField inputRef = {name} id="outlined-basic" label="Name" variant="outlined" />
        <TextField inputRef ={pwd} id="outlined-basic" label="Password" type = "password" variant="outlined" />
        <TextField inputRef = {emailref} id="outlined-basic" label="email" variant="outlined" />
        <TextField inputRef={phone} id="outlined-basic" label="Phone no"  variant="outlined" />
        <Button onClick={doRegister}>Register</Button>
        </Container>
  )
}
