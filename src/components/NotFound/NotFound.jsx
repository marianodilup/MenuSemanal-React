import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss"

function NotFound() {
  return (
    <div  className="div-container">
      
      <h2 className="h2-title">¡Hola!La página que buscas no existe</h2>
      <Link  className="button" to="/">Volver al Home</Link>
     
      <img className="img-notfound" src="https://img.freepik.com/vector-gratis/fondo-error-404-estilo-plano_23-2147769559.jpg?t=st=1720548109~exp=1720551709~hmac=9e24f20b5f53e5a59bf923855678c81cc9cd61c94d8315e64bf16411971a0cfe&w=1380" alt="" />
      
    </div>
  );
}

export default NotFound;
