import React from "react";

import history from "../../history";
import { LOGIN_ROUTE } from "../../utils/routeConstants";

const Dashboard = () => {
  const handleSignOut = () => {
    localStorage.clear();
    history.push(LOGIN_ROUTE);
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
