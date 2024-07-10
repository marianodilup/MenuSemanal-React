import React, { useState } from "react";
import {getDataFromApi }from "../Services/LoginApi";


const initial_state = {
  username: "",
  password: "",
};

function Login({setUserData}) {

    const [user, setUser]= useState(initial_state);
//Petición al servidor
  const handleInput = (ev) => {
    setUser({...user,[ev.target.id]: ev.target.value});
  };

  const handleForm=(ev)=>{
    ev.preventDefault();
getDataFromApi(user).then((data)=> {
    localStorage.setItem("user",JSON.stringify(data));
    setUserData(data);
});
  }

 
  return (
    <div>
      <form onChange={handleInput} onSubmit={handleForm}>
        <label htmlFor="username"> Nombre de usuario: </label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password"> Contraseña: </label>
        <input type="password" name="password" id="password" />
        <button> Log in </button>
      </form>
    </div>
  );
}

export default Login;
