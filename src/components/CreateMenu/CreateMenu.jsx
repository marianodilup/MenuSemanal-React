import React from "react";
import "./CreateMenu.scss";
import { useContext, useState } from "react";
import { apiContext } from "../Context/apiContext";
import { addMeal } from "../Services/Crud";
import { Link } from "react-router-dom";

function CreateMenu() {
  const { getMeal} = useContext(apiContext);
  const [meal, setMeal] = useState({
    name: "",
    day: "",
    type: "",
    img: "",
    description: "",
  });
  const handleInput = (ev) => {
    ev.preventDefault();
    const id = ev.target.id; //obtengo el id del input que cambia
    const value = ev.target.value; // obtengo el valor que el usuario escribe
    setMeal({ ...meal, [id]: value }); //setMeal recibe el nuevo valor de la variable de estado
  };
  const handleSubmit = (ev) => { //función del botón
    ev.preventDefault(); 
    addMeal(meal,getMeal);// agregar la nueva comida
    setMeal({ //Reset Formulario
      name: "",
      day: "",
      type: "",
      img: "",
      description: "",
    });
  };

  return (
    <>
    <div>
    <Link to="/" className="button" >Inicio</Link>
      <Link to="/MenuDiario" className="button"  > Menú Diario</Link>
    </div>
   

    <div className="content">
      <fieldset className="form-card">
      
        <form action="" className="form" onSubmit={handleSubmit}>
        <h2>Crea tu nueva comida:</h2>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            placeholder="Ensalada"
            onChange={handleInput}
          />
          <label htmlFor="day">Día de la semana: </label>
          <input
            type="text"
            id="day"
            placeholder="Lunes"
            onChange={handleInput}
          />
          <label htmlFor="type">Tipo de Comida: </label>
          <input
            type="text"
            id="type"
            placeholder="Cena"
            onChange={handleInput}
          />
          <label htmlFor="img">Imágen: </label>
          <input
            type="text"
            id="img"
            placeholder="url"
            onChange={handleInput}
          />
          <label htmlFor="description">Descripción: </label>
          <input
            type="text"
            id="description"
            placeholder="Ensalada con tomates cherry"
            onChange={handleInput}
          />
          <button type="submit"> Añadir </button>
        </form>
      </fieldset>
    </div>


    </>
  );
}

export default CreateMenu;
