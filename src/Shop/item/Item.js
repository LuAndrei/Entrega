import React, { useContext } from "react";
import { CartContext } from "../ShoppingCartContext/ShoppingCartContext";

import "./Item.css";
import { Link } from "react-router-dom";



export const Item = ({ Name, price, id, imgUrl }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = () => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById();

 
    return (
 
    <div className="item-box" >
     
     <h1>Products</h1>
     <Link to={imgUrl}> <img className="imagen" alt="Rick"  src={imgUrl} width="300" height="200" /></Link>
     <h3>{Name}</h3>
      <h3 className="item-price">${price}</h3>
      <h3>Number : {id}</h3>
     
     <p>
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      
      {quantityPerItem === 0 ? (
        <button className="boton-neon" onClick={() => addToCart()}>
         Buy
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          subtract item
        </button>
       
      )}
      </p>
     </div>
    
  );

};