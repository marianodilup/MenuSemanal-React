//Componente de validación

import React from "react";
import { Navigate } from "react-router-dom";

function AuthRout({ user, component }) {
  if (user) {
    return component;
  } else {
    return <Navigate to="/Login" />;
  }
}

export default AuthRout;
