import * as types from "./actionTypes";
import axios from "axios";
import { BASE_URL } from "../../url";
const login = (creds) => async (dispatch) => {
  dispatch(types.Login_Request);
  try {
    let response = await axios.post(`${BASE_URL}/login`, creds);
    dispatch({ type: types.Login_Success, payload: response.data });
    return response.data;
  } catch (e) {
    dispatch(types.Login_Error);
  }
};

export const logout = () => ({ type: types.Logout_Request });
