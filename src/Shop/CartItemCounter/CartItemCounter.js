import { useContext } from "react";
import { CartContext } from "../ShoppingCartContext/ShoppingCartContext";

import "./CartItemCounter.css";


const CartItemCounter = ({  price, id, product }) => {
  const {  setData } = useContext(CartContext);

  const addToCart = () => {
    setData((currItems) => {
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
    setData((currItems) => {
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
  
  return (
    <>
      <p className='counter-button' onClick={addToCart}>
        -
      </p>
      <p>{product.quantity}</p>
      
      <p className='counter-button' onClick={() =>  removeItem(product.price)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;