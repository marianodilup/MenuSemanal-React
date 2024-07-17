import React, { useState } from "react";
import { getDataFromApi } from "../Services/LoginApi";
import "./Login.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

const initial_state = {
  username: "",
  password: "",
};

function Login({ setUserData, setRedirectPath }) {
  const [user, setUser] = useState(initial_state);
  const navigate = useNavigate();
  const location= useLocation();
  const redirectPath = location.state?.from || "/MenuDiario"; // ir a la pagina de localización o a MenuDiario.
  //Petición al servidor

  const handleInput = (ev) => {
    setUser({ ...user, [ev.target.id]: ev.target.value });
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    getDataFromApi(user).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUserData(data);
      navigate(redirectPath); // redirigir a la página que habias dado clic
    });
  };

  return (
    <>
      <Link className="button" to="/">Inicio</Link>
      <div className="login-content">
        <div className="login-card">
          <h2> Iniciar Sesión </h2>
          <form onChange={handleInput} onSubmit={handleForm}>
            <label htmlFor="username"> Nombre de usuario: </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username: emilys"
            />
            <label htmlFor="password"> Contraseña: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password: emilyspass "
            />
            <button> Log in </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
