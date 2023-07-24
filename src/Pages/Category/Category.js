import { useState, useEffect } from "react";
import axios from "axios";
import{useParams} from "react-router-dom";

import CardUser from "../../components/CardUser/CardUser";

const Category = () =>{
    const[chars, setChars ] = useState ([]);

    let { CategoryId } = useParams();

    console.log("CategoryId", CategoryId );
    console.log("chars", chars);


    let filteredCharacters = chars.filter ((char) =>{
        return char.gender === CategoryId;
            
        
    });

    useEffect (() =>{
        
        axios("https://rickandmortyapi.com/api/character").then((json) => setChars(json.data.results)
        );
    }, []);
    return(
        
        <div className="Card-List"> 
        
       
        {filteredCharacters.map((char) => {
            return ( 
            <div style={{margin: 10}} key={char.id}>

                
        <CardUser char={char}/>

        
            </div>
            
          
           );
        })}
        </div>

    )
}
export default Category;