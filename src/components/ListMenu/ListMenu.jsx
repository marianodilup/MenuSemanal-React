import React from "react";
import { useContext, useState } from "react";
import { apiContext } from "../Context/apiContext";
import Meal from "../Meal/Meal";

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
      <section>
        {filteredMeals.map((meal) => (
          <Meal meal={meal} />
        ))}
      </section>
    </>
  );
}

export default ListMenu;
