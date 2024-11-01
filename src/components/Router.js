import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Auth";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

const Router = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
