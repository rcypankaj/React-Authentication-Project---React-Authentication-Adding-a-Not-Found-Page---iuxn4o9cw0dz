import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  //   console.log(children);
  //   console.log(rest);
  const isAuthenticated = () => {
    const username = window.localStorage.getItem("username");
    const password = window.localStorage.getItem("password");
    const abc = username && password;
    console.log(abc);
    return username && password;
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
