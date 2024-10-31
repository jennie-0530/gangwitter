import Router from "./Router";
import { useState, useEffect } from "react";
import { authService } from "../fbase";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
    });
  });
  return (
    <>
      <div className="App">
        <Router isLoggedIn={isLoggedIn} />
      </div>
      <footer>&copy; {new Date().getFullYear()} Gangwitter</footer>
    </>
  );
}

export default App;
