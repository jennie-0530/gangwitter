import Router from "./Router";
import { useState } from "react";
import { authService } from "../fbase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
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
