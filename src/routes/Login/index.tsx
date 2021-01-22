import React, { useCallback, useState } from "react";

import { useHistory } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../../utils/routeConstants";

const Login = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");

  const handleSubmit = useCallback(() => {
    localStorage.setItem("userName", userName);
    history.push(DASHBOARD_ROUTE);
  }, [history, userName]);

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
