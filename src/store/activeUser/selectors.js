function selectActiveUser(state){
    return state.activeUser.user;
}

function selectIsAuthenticated(state){
    return !!state.activeUser.token;
}

export {selectIsAuthenticated,selectActiveUser};