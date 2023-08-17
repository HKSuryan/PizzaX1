import React from 'react'
import networkOperations from '../../../shared/services/networkcall'

const PizzaCarrd = () => {
/*     const getPizzas = async()=>{
        const allPizzas = await networkOperations.getData();
        console.log(allPizzas);
    }
    getPizzas(); */
  return (
    <>
    <div className='col-4'>
    <div className="card" style={{float : 'left', paddingRight : '5px'}}>
    <img src="" class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div></>
  )
}

export default PizzaCarrd