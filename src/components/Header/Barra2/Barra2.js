import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import CardUser from "../../CardUser/CardUser";
import Sppiner from "../Barra2/Sppiner";
import * as React from 'react';
import Box from '@mui/material/Box';


import Modal from '@mui/material/Modal';



import "./Barra2.css";







const Barra2 = () =>{
    

    const [value, setValue] = useState ("");
    const [char, setchar ] = useState ({});
    const [isLoading, setIsloading] = useState (false);

   
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        const style = {
            position: 'absolute' ,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };

    
    
    
    const handleOnChange = (e) =>{
        setValue(e.target.value);

    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        const char = value.toLowerCase().replace (/ /g, "");
        if (char) {
            setIsloading(true);
            axios (`https://rickandmortyapi.com/api/character/${char}`).then((res) => setchar(res.data)
            );
        };

        setValue("");
        setTimeout(() => {setIsloading(false);
        }, 1500)
        

    };

    return (
   

        <div className="Barra2">




            
            <form className="Form1" onSubmit={handleOnSubmit}>
           
                <TextField
                    placeholder="Buscar "
                    variant="outlined"
                    className="TextField"
                    value={value}
                    onChange={handleOnChange}
                />
                <Button className="boton-neon" variant="contained" sx={{marginLeft: 1}} type="submit" onClick={handleOpen}  >
                    Buscar
                </Button>
              <Modal
                 open={open}
                 onClose={handleClose}
        
      >
                <Box sx={style}>
                {isLoading ?  <Sppiner></Sppiner>:char.id ? (<CardUser char = {char}   />) : null }
                </Box>
           </Modal>
               
            </form>
          
           
           
        </div>
        
    )
}

export default Barra2;