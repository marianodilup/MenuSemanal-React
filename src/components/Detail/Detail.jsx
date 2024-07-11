import React from "react";

import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { apiContext } from "../Context/apiContext";
import "./Detail.scss";

function Detail() {
  const { apiState } = useContext(apiContext);

  const { idMeal } = useParams();

  const findMeal = apiState.find((meal) => meal.id === idMeal);

  return (
    <div>
      {findMeal ? (
        <>
          {" "}
          <article className="card">
            <h2>{findMeal.name}</h2>
            <h3>
              Tipo de comida:{" "}
              {findMeal.type === "Desayuno" ? "☕ Desayuno" : "🍴" + findMeal.type}
            </h3>
            <img src={findMeal.img} alt="" />
            <h3>{findMeal.description}</h3>
          </article>
          <Link to={"/"}>Volver al Home</Link>
        </>
      ) : null}
    </div>
  );
}

export default Detail;
