import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useUserAuthSelector } from "../selectors/userAuth";
import { logoutUser, userLoginRequest } from "../actions/userActions";

export const useLoginHook = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { userName, loginSpinner } = useUserAuthSelector();

  const userLoginRequestHandler = useCallback(
    (payload: { userName: string; password: string }) => {
      dispatch(userLoginRequest({ ...payload, history }));
    },
    [dispatch, history]
  );

  const logoutUserHandler = useCallback(() => {
    dispatch(logoutUser({ history }));
  }, [dispatch, history]);

  return { userLoginRequestHandler, logoutUserHandler, userName, loginSpinner };
};
