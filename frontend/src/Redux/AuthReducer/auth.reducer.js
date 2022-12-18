import * as types from "./auth.types";

const initialState = {
    isLoading: false,
    isError: false,
    token: "",
    isAuth: false,
    isAdmin: false,
}

const AuthReducer = (state=initialState, { type, payload}) => {
    switch(type){
        case types.Login_Request:
            return{
                ...state,
                isLoading: true,

            }
        
        case types.Login_Success:
            localStorage.setItem("userInfo", payload);
            if(payload.isAdmin){
                return {
                    ...state,
                    isLoading: false,
                    token: payload.token,
                    isAuth: true,
                    isAdmin: true
                }
            }else{
                return {
                    ...state,
                    isLoading: false,
                    token: payload.token,
                    isAuth: true
                }
            }

        case types.Login_Failure:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case types.Logout_Request:{
            localStorage.removeItem('userInfo');
            return initialState
        }

        default :return state;
    }
}

export { AuthReducer }