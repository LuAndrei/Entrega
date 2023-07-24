import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import CardUser from "../../components/CardUser/CardUser";

const DetailPage = () =>{
    const [char, setChar] = useState ({});

    let { id } = useParams();

    

    useEffect (() =>{
       
        axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) => setChar(json.data)
        );
    }, [id]);


    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            {char.id ? <CardUser char={char}/> : null} 
            
            </div> 
    )
};
export default DetailPage;