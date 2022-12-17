import * as types from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    token: "",
    isAuth: !!token
}

const authReducer = (state=initialState, { type, payload}) => {
    switch(type){
        case types.Login_Request:
            return{
                ...state,
                isLoading: true,

            }
        
        case types.Login_Success:
            return {
                ...state,
                isLoading: false,
                token: payload.token
            }

        case types.Login_Failure:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case types.Logout_Request:{
            localStorage.removeItem('token');
            return initialState
        }

        default :return state;
    }
}

export { authReducer }