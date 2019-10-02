import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const count= (state=0, action) => {
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

const store = createStore(count, applyMiddleware(logger, thunk));

export default store;

