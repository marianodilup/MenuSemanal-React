
import { apiContext, useApiContext } from "./Context/apiContext"; // importación del contexto y el hook personalizado de la API
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import "./App.scss";
import ListMenu from "./ListMenu/ListMenu";
import { useState } from "react";
import Detail from "./Detail/Detail";


function App() {
  const contextApi = useApiContext(); //Variable igualada al hook personalizado de la API
  const [day ,setday]= useState("Lunes"); 

  return (
    <>

   
    <Header />
    <h1>Menú Semanal</h1>
      <apiContext.Provider value={contextApi}>
        <Routes>
          <Route path="/" element={<ListMenu/>}/>
          <Route path="/Detail" element={<Detail/>}/>
          

        </Routes>
      </apiContext.Provider>
    </>
  );
}

export default App;
