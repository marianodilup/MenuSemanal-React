import { apiContext, useApiContext } from "./Context/apiContext"; // importación del contexto y el hook personalizado de la API
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import "./App.scss";
import { useState } from "react";
import Detail from "./Detail/Detail";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login";
import AuthRout from "./AuthRout/AuthRout";
import ListMenu from "./ListMenu/ListMenu";
import SelectDay from "./SelectDay/SelectDay";
import CreateMenu from "./CreateMenu/CreateMenu";

function App() {
  const contextApi = useApiContext(); //Variable igualada al hook personalizado de la API
  const [day, setDay] = useState("");
  const [mealType, setMealType] = useState("");
  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);

  return (
    <>
      <apiContext.Provider value={contextApi}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route
            path="/MenuDiario"
            element={
              <AuthRout
                user={userData}
                component={
                  <main>
                    <SelectDay setDay={setDay} setMealType={setMealType} />
                    <ListMenu selectedDay={day} selectedMealType={mealType} />
                  </main>
                }
              />
            }
          />
          <Route
            path="/CreateMenu"
            element={
              <AuthRout
                user={userData}
                component={<CreateMenu />}
                redirectPath="/CreateMenu"
              />
            }
          />
          <Route path="/Detail/:idMeal" element={<Detail />} />
          
          <Route path="/Login" element={<Login setUserData={setUserData} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </apiContext.Provider>
    </>
  );
}

export default App;
