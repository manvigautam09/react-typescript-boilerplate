import { Redirect } from "react-router-dom";

import { isTokensPresentLocalStorage } from "../../utils/tokenHelpers";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "../../utils/routeConstants";

const Root = () => {
  const isUserPresent = isTokensPresentLocalStorage();
  return isUserPresent ? (
    <Redirect to={DASHBOARD_ROUTE} />
  ) : (
    <Redirect to={LOGIN_ROUTE} />
  );
};

export default Root;
