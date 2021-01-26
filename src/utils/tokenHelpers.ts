import { pathOr } from "ramda";
import { isNilOrEmpty } from "./helpers";

export const MY_WEB_APP_TOKENS = "my-web-app-tokens"; // Change name according to your project
const TOKENS = ["userName", "accessToken", "refreshToken"];

export interface LocalStorageTokensProps {
  userName: string;
  accessToken: string;
  refreshToken: string;
}

export const getLocalStorageTokens = () => {
  const currentTokensObject = localStorage.getItem(MY_WEB_APP_TOKENS);
  let returnTokens: LocalStorageTokensProps = {
    userName: "",
    accessToken: "",
    refreshToken: "",
  };

  if (currentTokensObject !== null) {
    TOKENS.forEach((token) => {
      returnTokens[`${token}`] = pathOr(
        "",
        [`${token}`],
        JSON.parse(currentTokensObject)
      );
    });
  }

  return returnTokens;
};

export const setLocalStorageTokens = (tokens: LocalStorageTokensProps) => {
  const currentTokens = getLocalStorageTokens();
  const newTokensValues = { ...currentTokens, ...tokens };
  const tokensToSet = {};

  TOKENS.forEach((token) => {
    tokensToSet[`${token}`] = newTokensValues[`${token}`];
  });

  localStorage.setItem(MY_WEB_APP_TOKENS, JSON.stringify(tokensToSet));
};

export const clearLocalStorage = () => {
  localStorage.removeItem(MY_WEB_APP_TOKENS);
};

export const isTokensPresentLocalStorage = () => {
  const currentTokens = getLocalStorageTokens();
  let isAllTokensPresent = true;

  TOKENS.forEach((tokenName) => {
    const tokenValue = currentTokens[`${tokenName}`];
    if (isNilOrEmpty(tokenValue)) {
      isAllTokensPresent = false;
    }
  });
  return isAllTokensPresent;
};
