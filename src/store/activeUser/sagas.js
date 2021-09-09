import {takeLatest,call,put,select} from "redux-saga/effects";
import {login,logout,setActiveUser,setToken,setLoginError} from "./slice";
import {selectActiveUser} from "./selectors";
import authService from "../../services/AuthService";
import {getActiveUser} from ".";


function* loginHandler(action){
    try{
        const {token,user} = yield call(authService.login, action.payload);

        yield put(setActiveUser(user));
        yield put(setToken(token));
    }catch(err){
        yield put(setLoginError(true));
    }
}

function* logoutHandler(action){
    yield call(authService.logout);

    yield put(setToken(null));
    yield put(setActiveUser(null));
}

function* getActiveUserHandler(){
    const activeUser = yield call(authService.getActiveUser);
    yield put(setActiveUser(activeUser));
}
function* watchLogin(){
    yield takeLatest(login.type, loginHandler);
}

function* watchLogout(){
    yield takeLatest(login.type,logoutHandler);
}

function* watchGetActiveUser(){
    yield takeLatest(getActiveUser.type,getActiveUserHandler);
}

export {watchLogin, watchLogout,watchGetActiveUser};