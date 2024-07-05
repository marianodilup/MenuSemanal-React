import { useContext, useState } from "react";
import { apiContext } from "../Context/apiContext";
import "./ListMenu.scss"

function ListMenu() {
  const { apiState } = useContext(apiContext);

  /* const meals = apiState.map((meal)=>{
   return meal.id, meal.name, meal.description
  }); */

  return (
    <>
      <div className="card-div">
        <ul>
          {apiState.map((meal) => (
            <li key={meal.id} className="li-div">
              <h2 className="title-div">{meal.name}</h2>
              <img className="img-div" src={meal.img} alt="" />
              <p className="p-div">{meal.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListMenu;
