import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "../routes/Home";
import Login from "../routes/Login";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
