import { LOGIN } from "../type";

export const setLogin = infos => dispatch => {
  dispatch({
    type: LOGIN,
    payload: infos
  });
};