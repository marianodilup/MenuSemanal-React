import { createContext, useEffect, useState } from "react";

//Creación de contexto, que es una variable de estado

export const apiContext = createContext();

//Creación de hook personalizado, para modificar, es decir, darle datos y acceder al contexto.

export const useApiContext = () => {
  const [apiState, setApiState] = useState([]); //variable de estado de la API

  const getMeal = () => {
    fetch("https://6685d15f83c983911b0018fa.mockapi.io/menu")
      .then((response) => response.json())
      .then((data) => {
        setApiState(data);
      });
  };

  useEffect(() => {
    getMeal();
  }, []); // va a ejecutar una sola vez, cuando cargue la página.

  
  return { apiState, setApiState , getMeal}; // aqui se ponen todas las variables que quieres pasar a otros componentes.
};
