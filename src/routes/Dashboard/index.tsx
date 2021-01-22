import React from "react";

import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/routeConstants";

const Dashboard = () => {
  const history = useHistory();
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
