import { Link } from "react-router-dom";
import "./Meal.scss";
import React from "react";

function Meal({ meal }) {
  return (
    <article className="card">
      <Link to={`/detail/${meal.id}`}>
        <h2>{meal.name}</h2>
        <img src={meal.img} alt="" />
        <h4>{meal.description}</h4>
      </Link>
    </article>
  );
}

export default Meal;
