import { apiContext } from "../Context/apiContext";
import { useContext, useEffect, useState } from "react";

function Select() {
  //tengo que hacer un filtro de la info de la API
  const { apiState } = useContext(apiContext);
  const [selectedDay, setSelectedDay] = useState("Lunes"); //variable de estado para el día seleccionado
  const [selectedType, setSelectedType] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    let meals = apiState;
    if (selectedDay !== "") {
      meals = meals.filter((meal) => meal.day === selectedDay);
    }
    if (selectedType !== "") {
      meals = meals.filter((meal) => meal.type === selectedType);
    }

    setFilteredMenu(meals);
  }, [selectedDay, selectedType, apiState]);

  // Actualizar el estado de la función según el día seleccionado.
  const handleSelect = (ev) => {
    setSelectedDay(ev.target.value);
  };

  // Actualizar el estado según la función
  const handleType = (ev) => {
    setSelectedType(ev.target.value);
  };


  return (
    <>
      <div>
        <form action="">
          <label htmlFor=""> Selecciona el día: </label>
          <select name="" id="" value={selectedDay} onChange={handleSelect}>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </form>

        <form action="">
          <label htmlFor=""> Filtra por tipo de comida: </label>
          <select name="" id="" value={selectedType} onChange={handleType}>
            <option value="">Todos los tipos</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Comida">Comida</option>
            <option value="Cena">Cena</option>
          </select>
        </form>

        {selectedDay && (
          <div>
            <h2>Menú día {selectedDay}: </h2>
            <ul>
              {filteredMenu.map((meal) => (
                <li key={meal.id}>
                  <h3>
                    {meal.type}: {meal.name}
                  </h3>

                  <img src={meal.img} alt="" />
                  <p>{meal.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Select;
