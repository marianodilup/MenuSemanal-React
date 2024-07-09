
import { apiContext, useApiContext } from "./Context/apiContext"; // importación del contexto y el hook personalizado de la API
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

import "./App.scss";
import ListMenu from "./ListMenu/ListMenu";
import { useState } from "react";
import Detail from "./Detail/Detail";
import Select from "./Select/Select";


function App() {
  const contextApi = useApiContext(); //Variable igualada al hook personalizado de la API


  return (
    <>

   
    <Header />
    
      <apiContext.Provider value={contextApi}>
        <Routes>
        <Route path="/" element={<Select/>}/>
          <Route path="/ListMenu" element={<ListMenu/>}/>
          <Route path="/Detail" element={<Detail/>}/>
          

        </Routes>
      </apiContext.Provider>
    </>
  );
}

export default App;
