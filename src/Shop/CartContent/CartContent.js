import { useContext } from "react";

import { CartContext } from "../ShoppingCartContext/ShoppingCartContext";

import Navbar from "../../components/NavBar/Navbar";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { CartTotal } from "../CartTotal/CartTotal";

import "./CartContent.css";


import ShopPage from "../ShopPage/ShopPage";



const CartContent = () => {
 
  const [cart] = useContext(CartContext);
  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <ShoppingCart></ShoppingCart>
          <CartTotal></CartTotal>
        <button> <ShopPage/></button>
          
        </>
      ) : (
        <h2 className='cart-message-center'>Your cart is empty</h2>
      )}
    </>
  );
};

export default CartContent;
