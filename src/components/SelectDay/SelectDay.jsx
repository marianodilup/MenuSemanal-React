import React from "react";

function SelectDay({ setDay, setMealType }) {
  const handleSelectDay = (ev) => {
    setDay(ev.target.value);
  };

  const handleType = (ev) => {
    setMealType(ev.target.value);
  };

  return (
    <>
      <div className="div-day">
        <form action="">
          <label htmlFor=""> Selecciona el día: </label>
          <select onChange={handleSelectDay}>
            <option value="">Todos los días</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </form>
      </div>
      <div className=" div-type">
        <form action="">
          <label htmlFor=""> Filtra por tipo de comida: </label>
          <select onChange={handleType}>
            <option value="">Todos los tipos</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Comida">Comida</option>
            <option value="Cena">Cena</option>
          </select>
        </form>
      </div>
    </>
  );
}

export default SelectDay;
