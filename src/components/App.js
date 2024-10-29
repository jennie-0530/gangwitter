import Router from "./Router";
import { useState } from "react";
// import { authService } from "../fbase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("hello");
  console.log("API Key:", process.env.REACT_APP_AUTH_DOMAIN);

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
