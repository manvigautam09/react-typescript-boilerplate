import { Redirect } from "react-router-dom";

import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "../../utils/routeConstants";

const Root = () => {
  const isUserPresent = localStorage.getItem("accessToken");
  return isUserPresent ? (
    <Redirect to={DASHBOARD_ROUTE} />
  ) : (
    <Redirect to={LOGIN_ROUTE} />
  );
};

export default Root;
