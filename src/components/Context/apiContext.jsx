import { createContext, useEffect, useState } from "react";

//Creación de contexto, que es una variable de estado

export const apiContext = createContext();

//Creación de hook personalizado, para modificar, es decir, darle datos y acceder al contexto.

export const useApiContext = () => {
  const [apiState, setApiState] = useState([]); //variable de estado de la API

  useEffect(() => {
    fetch("https://6685d15f83c983911b0018fa.mockapi.io/menu")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiState(data);
      });
  }, []); // va a ejecutar una sola vez, cuando cargue la página.

  const addMeal = (newMeal) => {
    fetch("https://6685d15f83c983911b0018fa.mockapi.io/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeal),
   
   
    /* setApiState([...apiState, newMeal]); */
  })

  .then((response) => response.json())
  .then((data) => setApiState([...apiState, newMeal]));
};


  return { apiState, addMeal }; // aqui se ponen todas las variables que quieres pasar a otros componentes.
};
