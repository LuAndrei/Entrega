import React, { useContext } from "react";
import { CartContext } from "../ShoppingCartContext/ShoppingCartContext";

export const CartTotal = () => {
    const [product] = useContext(CartContext);

    
    
      const totalPrice = product.reduce(
        (acc, curr) => acc + curr.quantity * curr.price,
        0
       
      );

      return (
    

       
          
            <h3>Total: ${totalPrice}</h3>
            
           
          
         
            
      
      
        
      );
    
    };
    