import React from "react";
import { useContext } from "react";
import { apiContext } from "../Context/apiContext";
import Meal from "../Meal/Meal";
import "./ListMenu.scss"

function ListMenu({ selectedDay, selectedMealType }) {
  const { apiState } = useContext(apiContext);

  const filteredMeals = apiState.filter((meal) => {
    return (
      (selectedDay === "" || meal.day === selectedDay) &&
      (selectedMealType === "" || meal.type === selectedMealType)
    );
  });
  return (
    <>
  
      <div className="full-page-listmenu">
        <section>
          {filteredMeals.map((meal) => (
            <Meal meal={meal} />
          ))}
        </section>
      </div>
    </>
  );
}

export default ListMenu;
