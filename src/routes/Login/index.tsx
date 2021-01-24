import { useState } from "react";

import { useLoginHook } from "../../store/hooks/userAuth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { userLoginRequestHandler, loginSpinner } = useLoginHook();

  return (
    <div>
      <div>Enter your name</div>
      <input
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={() => userLoginRequestHandler({ userName, password })}>
        {loginSpinner ? "Logging in" : "Submit"}
      </button>
    </div>
  );
};

export default Login;
