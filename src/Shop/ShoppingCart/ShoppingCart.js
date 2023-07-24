import React, { useContext } from "react";
import { CartContext } from "../ShoppingCartContext/ShoppingCartContext";


import images from "../images/rick1.png";


import "./ShoppingCart.css";



export const ShoppingCart = () => {
  const [ product, setProduct] = useContext(CartContext);

  
  
  
  const deleteProduct = (id) => {
    const foundId = product.find((element) => element.id === id);

    const newCart = product.filter((element) => {
      return element !== foundId;
    });

    setProduct(newCart);
  };

 
  return product.map((product) => {
    return (
    

    <div className="cartContent" key={product.id}>
      
      <img src={images} alt="images" width={100} />
      <h3 className='name'>name:{product.id}</h3>
      <h3>price: $ {product.price }</h3>
      
      <h4 >product-quantity:  { product.quantity}</h4>
     
        <h4 >total-quantity $ :{product.price * product.quantity}</h4>
        <h3 class='cart-delete-button' onClick={() => deleteProduct(product.id)}>
          ❌
        </h3>
        
       
      
      
       
      
        </div>
      
     
        
  
  
    
  );
});
};
export default ShoppingCart;