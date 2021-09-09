import {createSlice} from "@reduxjs/toolkit";

const middlewareActions = {
    login(){},
    logout(){},
    getActiveUser(){},
};

const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState: {
        token: localStorage.getItem("token"),
        user: null,
        loginError: false
    },
    reducers: {
        setActiveUser(state,action){
            state.user = action.payload;
        },
        setToken(state,action){
            state.token = action.payload;
        },
        setLoginError(state,action){
            state.loginError = action.payload;
        },
        ...middlewareActions,
    },
});

export const {login, logout, setActiveUser,setToken,setLoginError, getActiveUser}=activeUserSlice.actions;
export default activeUserSlice.reducer; 