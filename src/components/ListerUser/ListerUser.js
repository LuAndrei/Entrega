import React, {useState, useEffect} from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";

import "./ListerUser.css";

import { Link } from "react-router-dom";


const ListerUser = () => {
    const[chars, setChars ] = useState ([]);

    

  

    useEffect (() =>{
        
        axios("https://rickandmortyapi.com/api/character").then((json) => setChars(json.data.results)
        );
    }, []);
    
    return (
        
        <div className="Card-List"> 
        
       
        {chars.map((char) => {
            return ( 
            <div style={{margin: 10}} key={char.id}>

           <Link to={`detail/${char.id}`}>     
        <CardUser char={char}/>

        </Link>
            </div>
           )
        })}
      
      </div>
    );
};
export default ListerUser;