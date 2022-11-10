import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Home, Tips, AdminSignUp } from "../Pages";
import MyRoutes from "../Components/RoutesPage/Routes";
import Login from "../Components/Login/Login";
const Routers = () => {
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [scrollY]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/routes" element={<MyRoutes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-signup" element={<AdminSignUp />} />
      </Routes>
    </Router>
  );
};

export default Routers;
