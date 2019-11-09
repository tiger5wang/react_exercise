import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { count } from '../pages/redux/count.redux';
import { user } from '../pages/redux/user.redux'
import  createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({count, user}),
    applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(mySaga)

export default store;

