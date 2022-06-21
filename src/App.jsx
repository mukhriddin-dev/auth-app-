import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./Private/PrivateRoute";
import context from "./context/context";
import Login from "./Login";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLogged, setIsLogged] = useState(false);

  const info = {
    username,
    setUsername,
    password,
    setPassword,
    isLogged,
    setIsLogged,
  };
  console.log(isLogged);

  return (
    <>
      <context.Provider value={{ info }}>
        <BrowserRouter>
          <main className="mx-auto w-100 d-block">
            <Routes>
              <Route index path="/" element={<Login />} />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </context.Provider>
    </>
  );
};

export default App;
