import { pathOr } from "ramda";
import actionsTypes from "../../actionTypes";
import { Actions, UserAuthState } from "./type";

const initialState: UserAuthState = {
  userName: "",
  accessToken: "",
  refreshToken: "",
  loginSpinner: false,
};

function userAuth(state = initialState, action: Actions) {
  switch (action.type) {
    case actionsTypes.USER_LOGIN_REQUEST: {
      return { ...state, loginSpinner: true };
    }

    case actionsTypes.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        userName: pathOr("", ["payload", "userName"], action),
        accessToken: pathOr("", ["payload", "accessToken"], action),
        refreshToken: pathOr("", ["payload", "refreshToken"], action),
        loginSpinner: false,
      };
    }

    case actionsTypes.USER_LOGIN_FAILURE: {
      return { ...state, loginSpinner: false };
    }

    default: {
      return { ...state };
    }
  }
}
export default userAuth;
