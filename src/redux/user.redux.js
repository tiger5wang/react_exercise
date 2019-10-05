const loginStatus = {
    isLogin: false,
    loading: false
};

export const user = (state=loginStatus, action) => {
    switch (action.type) {
        case 'requestLogin' :
            return {
                isLogin: false,
                loading: true
            };
        case 'login':
            return {
                isLogin: true,
                loading: false
            };
        default:
            return state
    }
};


export const login = () => dispatch => {
    dispatch({type: 'requestLogin'});
    setTimeout(() => {
        dispatch({type: 'login'})
    }, 2000)
}

