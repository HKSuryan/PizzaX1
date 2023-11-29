import React, { useState } from 'react'
import PizzaCard1 from '../components/PizzaCard1'
//import HideAppBar from '../../../shared/components/HideAppBar'
import { Toolbar } from '@mui/material'
import productOperations from '../services/product-operations'
import { useEffect } from 'react'
import PizzaCard from '../components/PizzaCard'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Payment from './Payment'



const Show = () => {
  const[pizza,setPizza] = useState([]);
  const[dbpizza,setdbPizza] = useState([]);
  const[cartPizza,setCartPizza] = useState([]);
  const[total,setTotal] = useState(0);
  //let total = 0;

  const loadPizzas=async()=>{
  const pizzas = await productOperations.loadProducts();
  const dbpizzas = await productOperations.loaddbProducts();
  console.log('Pizzas are ', dbpizza);
  setPizza(pizzas);
  setdbPizza(dbpizzas);
}
useEffect(()=>{
  loadPizzas();
},[]);//eslint-disable-line react-hooks/exhaustive-deps


  return (
    <>
    <br></br>
    <div className='row'>
    <div className = "col-8">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div" >
            MENU
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        <div className = "row">
        {pizza.map(pizzas=>{
          return (<><PizzaCard1 key = {pizza.id} pizzas = {pizzas} setCartPizza={setCartPizza} setTotal= {setTotal} total ={total}/></>)}
      )}
      
        {dbpizza.map(pizzas=>{
          return (<><PizzaCard1 key = {pizza.id} pizzas = {pizzas} setCartPizza={setCartPizza} setTotal= {setTotal} total ={total}/></>)}
      )}

        </div>
        </div>
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
          
          {/* {total = 0} */}
          {cartPizza.map(pizza=>{
/*             total += pizza.price*pizza.quantity;
            setTotal(total); */
            return(<>
            <PizzaCard key = {pizza.id} pizzas = {pizza} setCartPizza={setCartPizza} setTotal={setTotal} total = {total}/>
            <br></br>
            </>)
          })}
          {/* <h1>Total is {total}</h1> */}
          <Card variant='outlined'>
          <CardContent>
      <Typography variant="h5" component="div">
      <h1>Total = {total.toFixed(2)}</h1>
      </Typography>
    </CardContent> </Card>
    <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_MLsiTDhBpU7q9E" async> </script> </form>
    <Button onClick = {()=><><Payment/></>}variant = "contained">Pay Now</Button>
    
        </div>
    </div>

    </>
  )
}

export default Show