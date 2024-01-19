
import React, { useState ,useContext} from 'react'
import PizzaContext from '../../../context/PizzaContext'
import { Toolbar } from '@mui/material'
import PizzaCard from '../components/PizzaCard'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Payment from './Payment'
import TotalContext from '../../../context/TotalContext';

export const Cart = () => {
  const {piz} = useContext(PizzaContext);
  const {total,setTotal} = useContext(TotalContext);
  
  console.log(piz);
  return (
    <div className='col-4'>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "green" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" >
            CART 
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <br></br>
          
          {piz.map(pizza=>{

            return(<>
            <PizzaCard key = {pizza.id} pizzas = {pizza}/>
            <br></br>
            </>)
          })}
          <Card variant='outlined'>
          <CardContent>
      <Typography variant="h5" component="div">
      <h1>Total = {total.toFixed(2)}</h1>
      </Typography>
    </CardContent> </Card>
    <Button onClick = {()=><><Payment/></>}variant = "contained">Pay Now</Button>
    
        </div>
  )
}
