import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";

import Dashboard from "./Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/About" component={About} />
    </Router>
  );
};
export default AppRoutes;
