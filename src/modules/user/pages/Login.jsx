import React, { useEffect,  useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import networkOperations from '../../../shared/services/networkcall';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState('');

    useEffect(()=>{
    setTimeout(()=>{
        console.log(user);
        if(user){
        navigate(`/logg/${user}`)}
    },1000)},[user])//eslint-disable-line react-hooks/exhaustive-deps

    const [message, setMessage] = useState('');
    const pwd = useRef();
    const emailref = useRef();
    const doLogin =async()=>{
        const userInfo = {
            'email':emailref.current.value,
            'password':pwd.current.value
        }
        try{
            const response = await networkOperations.postData(process.env.REACT_APP_LOGIN,userInfo);
            console.log("Response is",response);
            setMessage(response.data.message);
            setUser(response.data.name);
            console.log(user);
            
        }
        catch(err){
            setMessage('Invalid User id or password');
            console.log("Error is ",err)
        }
        
    }
  return (
    <Container>
        <p>{message}</p>
        <TextField inputRef = {emailref} id="outlined-basic" label="email" variant="outlined" />
        <TextField inputRef ={pwd} id="outlined-basic" label="Password" type = "password" variant="outlined" />
        <Button onClick={doLogin} varaint = "contained">Login</Button>
    </Container>
  )
}

export default Login