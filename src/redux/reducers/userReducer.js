import { LOGIN } from "../type";

const initialState = {
    infos:{
        username:undefined,
        token : undefined,
        image : undefined,
        isLogin : false,
        userId : undefined,
        fullName : undefined,
        email: undefined,
        phone: undefined,
        gender: undefined
    }
};

function userReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        return { ...state, infos: action.payload };
      default:
        return state;
    }
  }
  
  export default userReducer;