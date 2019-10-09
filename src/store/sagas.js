import { call, put, takeEvery } from 'redux-saga/effects'


const userService = {
    login(payload) {
        console.log('payload', payload)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(payload.uname === 'Tom' && payload.pwd === '123456') {
                    resolve({id: 1, name: 'Tom', age: 20})
                } else {
                    reject('用户名或密码错误')
                }
            }, 1000)
        })
    }
};


function* login(action) {
    console.log('action', action)
    try{
        yield put({type: 'requestLogin'});
        yield call(userService.login, action.payload);
        yield put({type: 'loginSuccess'})
    } catch(message) {
        yield put({type: 'loginFailure'})
    }
}

function* mySaga() {
    yield takeEvery('login', login)
}

export default mySaga;