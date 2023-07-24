import {Link} from "react-router-dom";
import {  CartContext } from "../../Shop/ShoppingCartContext/ShoppingCartContext";
import React, { useContext } from "react";
import HomeIcon from "../../Pages/Home/HomeIcon";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



import "./Style.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';






const NavBar = () =>{

    const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
   
  );

   
 
    return(
        <nav className="nav-container">
            
            <ul className="nav-ul">
           
            
                <Link className="li" to="/ " ><HomeIcon></HomeIcon></Link>
                <Link className="li" to="/Contact">Contact</Link>
                <Link className="li" to="/About">About</Link>

                <PopupState variant="popover" popupId="demo-popup-menu">
               {(popupState) => (
                <React.Fragment>
             <Button variant="contained" className="boton-neon" {...bindTrigger(popupState)}>
            Gender
             </Button>
             <Menu className="Gender" {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}><Link className="li" to="/Category/Male">Male</Link></MenuItem>
               <MenuItem onClick={popupState.close}> <Link className="li" to="/Category/Female">Female</Link></MenuItem>
                
               </Menu>
        </React.Fragment>
      )}
    </PopupState> 

   
               <button className="boton-shop"><Link className="li" to="/books" >Books </Link></button>
                <button className="boton-shop"><Link className="li" to="/shop" >Shop: ${totalPrice} </Link></button>
              

            <nav className="nav__logo">    
            <button className="boton-shop"><Link className="li" to="/cart" >  <ShoppingCartIcon  color="secondary"/>{quantity }  </Link></button> 
           
            
   
            </nav>
                
                

                

                
               
                
                
                
               

                

                
                
                
            </ul>
        </nav>
    )
}
export default NavBar;