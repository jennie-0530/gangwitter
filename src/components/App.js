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
      setInit(true);
    });
  });
  return (
    <>
      <div className="App">
        {init ? <Router isLoggedIn={isLoggedIn} /> : "initializing..."}{" "}
      </div>
      <footer>&copy; {new Date().getFullYear()} Gangwitter</footer>
    </>
  );
}

export default App;
