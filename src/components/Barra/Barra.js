import React from "react";
import { useState } from "react";
import "./Barra.css";

const Barra = ()=>{
    const [search, setSearch] = useState("");

    if (search === "reset") setSearch ("Desarrollo util");

    return(
        <form>
            <input type="text" name="search" className="barra" autoComplete="off" onChange={ev => setSearch(ev.target.value)}>
            </input>
            <button type="submit" className="boton-neon">Buscar</button>
            <p>Resultado para: {search} </p>
        </form>
    )
}
export default Barra;