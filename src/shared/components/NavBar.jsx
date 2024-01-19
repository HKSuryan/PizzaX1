import React, { useContext } from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';
import TotalContext from '../../context/TotalContext';

export const NavBar = ({state=false}) => {
  var{quantity} = useContext(TotalContext);
  const admin_addPizza=(state)=>{
    if(state === true) {
       return <li><a href="/addpizza">AddPizza</a></li>;
    }
    return 
 }
  return (
    
    <nav class="container-1">
    <div class="inner-container"><ul>
        <li><Link id="lin"to="/">PizzaX</Link></li>
        {/* <li><a href="/addpizza">AddPizza</a></li> */}
        {admin_addPizza(false)}
        <div class = "bod">
        <li><Link id="lin" to="/menu">Menu</Link></li>
        <li><Link id="lin" to="/register">Register</Link></li>
        <li><Link id="lin" to="/login">Login</Link></li>
        <li><Link id="lin" to="/cart"><i className="fa badge" style={{fontsize:"24px"}} value={quantity}>&#xf07a;</i> </Link></li>
        </div>

      </ul>
    </div>
</nav>
  )
}
