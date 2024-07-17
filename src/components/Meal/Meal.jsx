import { Link } from "react-router-dom";
import "./Meal.scss";
import React from "react";

function Meal({ meal }) {
  return (
    
    <div className="meal-content">
      <article className="card">
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
