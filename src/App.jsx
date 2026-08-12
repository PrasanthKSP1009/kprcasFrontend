import { useState } from "react";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import StateComp from "./Components/StateComp"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UseEffect from "./Components/UseEffect";
import UseEffectAPI from "./Components/UseEffectAPI";
import UseRef from "./Components/UseRef";
import UseMemo from "./Components/UseMemo";

var App = () => {
  var [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true",
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/about"
            element={isLoggedIn ? <About /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/use-state"
            element={isLoggedIn ? <StateComp /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/use-effect"
            element={isLoggedIn ? <UseEffect /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/use-effect-api"
            element={isLoggedIn ? <UseEffectAPI /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/use-ref"
            element={isLoggedIn ? <UseRef /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/use-memo"
            element={isLoggedIn ? <UseMemo /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" replace />}
          ></Route>
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          ></Route>
          <Route path = "/signup" element = {<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
