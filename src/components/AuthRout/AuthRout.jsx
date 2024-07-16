//Componente de validación

import React from "react";
import { Navigate } from "react-router-dom";

function AuthRout({ user, component, redirectPath}) {
  if (user) {
    return component;
  } else {
    return <Navigate to="/Login" state={{from: redirectPath}}/>;
  }
}

export default AuthRout;
