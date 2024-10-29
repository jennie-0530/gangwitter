import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";

const Router = ({ isLoggedIn }) => {
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
