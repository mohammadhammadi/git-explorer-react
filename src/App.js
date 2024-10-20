import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React, { useState, lazy, Suspense } from "react";
import Home from "./components/home";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./routes";

function App() {
  const [username, setUsername] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes location={location}>
              {appRoutes.map((route) => {
                if (route.requireAuth && !isLogged) {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={<Navigate replace to="/login" />}
                    />
                  );
                } else {
                  return (
                    <Route
                      key={route.path}
                      exact
                      path={route.path}
                      element={
                        <route.component
                          setUsername={setUsername}
                          username={username}
                          setIsLogged={setIsLogged}
                        />
                      }
                    />
                  );
                }
              })}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
