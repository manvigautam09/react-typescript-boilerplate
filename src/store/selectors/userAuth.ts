import { useSelector } from "react-redux";
import { StoreState } from "../types";

export const useUserAuthSelector = () => {
  const { userName, loginSpinner, accessToken, refreshToken } = useSelector(
    (state: StoreState) => ({
      userName: state.userAuth.userName,
      loginSpinner: state.userAuth.loginSpinner,
      accessToken: state.userAuth.accessToken,
      refreshToken: state.userAuth.refreshToken,
    })
  );

  return { userName, loginSpinner, accessToken, refreshToken };
};
