import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: "Please provide all values",
      alertType: "danger",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: "User registered successfully, Redirecting...",
      alertType: "success",
      user: action.payload.user,
      token: action.payload.token,
      location: action.payload.location,
    };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
