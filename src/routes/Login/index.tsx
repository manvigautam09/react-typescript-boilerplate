import React, { useCallback, useState } from "react";
import { DASHBOARD_ROUTE } from "../../utils/routeConstants";
import history from "../../history";

const Login = () => {
  const [userName, setUserName] = useState("");

  const handleSubmit = useCallback(() => {
    console.log("userName", userName);
    localStorage.setItem("userName", userName);
    history.push(DASHBOARD_ROUTE);
  }, [userName]);

  return (
    <div>
      <div>Enter your name</div>
      <input
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
