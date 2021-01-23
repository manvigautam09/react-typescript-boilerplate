import actionsTypes from "../actionTypes";

export const userLoginRequest = (payload: {
  userName: string;
  password: string;
  history: any;
}) => {
  return {
    type: actionsTypes.USER_LOGIN_REQUEST,
    payload,
  };
};

export const userLoginSuccess = (payload: {
  userName: string;
  accessToken: string;
  refreshToken: string;
}) => {
  return {
    type: actionsTypes.USER_LOGIN_SUCCESS,
    payload,
  };
};

export const userLoginFailure = () => {
  return {
    type: actionsTypes.USER_LOGIN_FAILURE,
  };
};

export const logoutUser = (payload: { history: any }) => {
  return {
    type: actionsTypes.LOGOUT,
    payload,
  };
};
