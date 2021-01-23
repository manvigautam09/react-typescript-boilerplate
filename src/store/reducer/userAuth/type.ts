import {
  userLoginFailure,
  userLoginRequest,
  userLoginSuccess,
} from "../../actions/userActions";

export interface UserAuthState {
  userName: string;
  accessToken: string;
  refreshToken: string;
  loginSpinner: boolean;
}

export type Actions = ReturnType<
  typeof userLoginRequest | typeof userLoginSuccess | typeof userLoginFailure
>;
