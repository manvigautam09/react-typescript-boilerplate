import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logoutUser, userLoginRequest } from "../actions/userActions";

export const useLoginHook = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLoginRequestHandler = useCallback(
    (payload: { userName: string; password: string }) => {
      dispatch(userLoginRequest({ ...payload, history }));
    },
    [dispatch, history]
  );

  const logoutUserHandler = useCallback(() => {
    dispatch(logoutUser({ history }));
  }, [dispatch, history]);

  return { userLoginRequestHandler, logoutUserHandler };
};
