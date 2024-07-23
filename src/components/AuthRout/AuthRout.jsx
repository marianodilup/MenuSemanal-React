//Componente de validación

import React from "react";
import { Navigate } from "react-router-dom";

function AuthRout({ user, component, redirectPath}) {
  console.log(user);
  if (user) {
    return component;
  } else {
    return <Navigate to="/Login" state={{from: redirectPath}}/>; // redirectPath para ir a otras rutas privadas
  }
}

export default AuthRout;
