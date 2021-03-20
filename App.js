import React, { useState } from "react";
import LoginForm from "./components/Loginform";
import Feed from "./components/Feed";

function App() {
  const adminDetails = {
    dragon: "nighthawk",
    codesmith: "password",
    rick: "roll",
  };

  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      adminDetails[details.email] &&
      adminDetails[details.email] === details.password
    ) {
      setUser({
        email: details.email,
      });
    } else {
      setError("if you ain't first yer last");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {user.email !== "" ? (
          <Feed />
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </header>
    </div>
  );
}

export default App;
