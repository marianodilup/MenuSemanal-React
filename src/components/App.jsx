import { useContext } from "react";
import { apiContext, useApiContext } from "./Context/apiContext"; // importación del contexto y el hook personalizado de la API
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import ListMenu from "./ListMenu/ListMenu";
import "./App.scss";



function App() {
  const contextApi = useApiContext(); //Variable igualada al hook personalizado de la API
  console.log(contextApi);

  return (
    <>
    <Header />
      <apiContext.Provider value={contextApi}>
        <Routes>
          <Route path="/" element={<h1>Home</h1> }></Route>
          <Route path="/List" element={<ListMenu />}></Route>
        </Routes>
      </apiContext.Provider>
    </>
  );
}

export default App;
