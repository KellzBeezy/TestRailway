import axios from "axios";
import swal from "sweetalert";
import decode from "jwt-decode";
import { loginConfirmedAction, logout } from "../store/actions/AuthActions";

export function signUp(email, password) {
  //axios call
  const postData = {
    email,
    password,
    returnSecureToken: true,
  };
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
    postData
  );
}

export function login(email, password) {
  const postData = {
    email,
    password,
    returnSecureToken: true,
  };
  //   return axios.post(
  //     `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
  //     postData
  //   );
  return axios.post(`https://api.apivoka.com/auth/login/`, postData);
}

export function formatError(errorResponse) {
  switch (errorResponse.message) {
    case "EMAIL_EXISTS":
      //return 'Email already exists';
      swal("Oops", "Email already exists", "error");
      break;
    case "EMAIL_NOT_FOUND":
      //return 'Email not found';
      swal("Oops", "Email not found", "error", { button: "Try Agan!" });
      break;
    case "INVALID_PASSWORD":
      //return 'Invalid Password';
      swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
      break;
    case "USER_DISABLED":
      return "User Disabled";
    case "email or password is incorrect!":
      swal("Ohh no!", "Email or password is incorrect!", "error", {
        button: "Try Again!",
      });
      break;

    default:
      return "";
  }
}

export function saveTokenInLocalStorage(token, tokenDetails) {
  // tokenDetails.exp = new Date(tokenDetails.exp * 1000);
  localStorage.setItem("userDetails", JSON.stringify(token));
}

export function runLogoutTimer(dispatch, timer, history) {
  setTimeout(() => {
    dispatch(logout(history));
  }, timer);
}

export function checkAutoLogin(dispatch, history) {
  const tokenDetailsString = localStorage.getItem("userDetails");
  let tokenDetails = "";
  if (!tokenDetailsString) {
    dispatch(logout(history));
    return;
  }

  // tokenDetails = JSON.parse(tokenDetailsString);
  tokenDetails = decode(tokenDetailsString);

  let expireDate = new Date(tokenDetails.exp * 1000);
  let todaysDate = new Date();

  if (todaysDate > expireDate) {
    dispatch(logout(history));
    return;
  }
  dispatch(loginConfirmedAction(tokenDetails));

  const timer = expireDate.getTime() - todaysDate.getTime();

  runLogoutTimer(dispatch, timer, history);
}
