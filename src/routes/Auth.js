import React from "react";
import { useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        ></input>

        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        ></input>

        <input type="submit" value="Log in"></input>
      </form>
      <div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
}
