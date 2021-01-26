import { put, takeLatest, delay } from "redux-saga/effects";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "../../utils/routeConstants";

import {
  logoutUser,
  userLoginFailure,
  userLoginRequest,
  userLoginSuccess,
} from "../actions/userActions";
import actionsTypes from "../actionTypes";
import {
  clearLocalStorage,
  setLocalStorageTokens,
} from "../../utils/tokenHelpers";

function* fetchUser(action: ReturnType<typeof userLoginRequest>) {
  try {
    const {
      payload: { userName, password, history },
    } = action;

    const refreshToken = `${userName}+${password}`;
    const accessToken = `${userName}+${password}`;
    setLocalStorageTokens({ userName, accessToken, refreshToken });

    history.push(DASHBOARD_ROUTE);
    yield put(userLoginSuccess({ userName, accessToken, refreshToken }));
  } catch (error) {
    console.log("error", error);
    yield put(userLoginFailure());
  }
}

function* logoutUserSaga(action: ReturnType<typeof logoutUser>) {
  const {
    payload: { history },
  } = action;
  try {
    yield delay(1000); // This is to save multiple requests as saga offers debounce functionality out of the box

    // To understand debounce functionality Hit logout button multiple times withing 1 second and this console will be only printed once
    console.log("Logout Request");

    clearLocalStorage();
    history.push(LOGIN_ROUTE);
  } catch (error) {
    console.log("error", error);
  }
}

const userAuthSagas = [
  takeLatest(actionsTypes.USER_LOGIN_REQUEST, fetchUser),
  takeLatest(actionsTypes.LOGOUT, logoutUserSaga),
];
export default userAuthSagas;
