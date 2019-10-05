
export const count= (state=0, action) => {
    switch (action.type) {
        case 'add':
            console.log(state + 1)
            return state + 1;
        case 'minus':
            console.log(state - 1)
            return state - 1;
        default:
            return state;
    }
};


export const add = () => ({type: 'add'});
export const minus = () => ({type: 'minus'});
export const asyncAdd = () => dispatch => {
    setTimeout(() => {
        dispatch({type: 'add'})
    }, 1000)
};

