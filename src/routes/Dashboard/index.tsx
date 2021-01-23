import React from "react";

import { useLoginHook } from "../../store/hooks/userAuth";

const Dashboard = () => {
  const { logoutUserHandler } = useLoginHook();

  return (
    <div>
      <button onClick={logoutUserHandler}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
