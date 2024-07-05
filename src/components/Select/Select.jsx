import { apiContext } from "../Context/apiContext"
import { useContext } from "react"

function Select() {

 //tengo que hacer un filtro de la info de la API
  return (
    <form action="">
    <label htmlFor=""> Selecciona el día para ver el menú: </label>
    <select name="" id="">
    <option value="Lunes">Lunes</option>
    <option value="Martes">Martes</option>
    <option value="Miércoles">Miércoles</option>
    <option value="Jueves">Jueves</option>
    <option value="Viernes">Viernes</option>
    <option value="Sábado">Sábado</option>
    <option value="Domingo">Domingo</option>

    </select>
    </form>
  

  )
}

export default Select



