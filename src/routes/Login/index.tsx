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
      <button
        onClick={() => userLoginRequestHandler({ userName, password })}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        {loginSpinner ? "Logging in" : "Submit"}
      </button>
    </div>
  );
};

export default Login;
