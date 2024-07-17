import { Link } from "react-router-dom";
import "./Meal.scss";
import React from "react";
import { deleteMeal } from "../Services/Crud";
import { apiContext } from "../Context/apiContext";
import { useContext } from "react";



function Meal({ meal }) {
const {getMeal} =useContext(apiContext);

const handleClick= (ev)=>{
const id= ev.target.id;
deleteMeal(id).then((data) => {
  getMeal()  });;
};

  return (
    
    <div className="meal-content">
      
      <article className="card">
      <button className="button-meal" key={meal.id} onClick={handleClick} id={meal.id}>Eliminar</button>
        <Link className="link" to={`/detail/${meal.id}`}>
          <h2 className="h">{meal.name}</h2>
          <img src={meal.img} alt="" />
          <h4 className="h">{meal.description}</h4>
        </Link>
      </article>
    </div>
  );
}

export default Meal;
