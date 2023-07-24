import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../ShoppingCartContext/ShoppingCartContext";



export const NavBarShop = () => {
  const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/shop"} style={navStyles}>
        <h2>Store</h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
          🛒 
         
          <span className="cart-count"><div>Items in cart: {quantity}</div></span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
