import React from "react";


import "./Banner.css";
import Barra2 from "./Barra2/Barra2";




const Banner = () =>{
    return(
        <div className="Banner">
            <div className='Banner-container'>
            
        <h1>Rick and Morty</h1> 
        <p>Soy un científico; porque invento, transformo, creo y destruyo para vivir, y cuando algo del mundo no me gusta, lo cambio.</p>
        <Barra2></Barra2>
      </div>

    </div>


    );
};
export default Banner;