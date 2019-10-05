import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { count } from '../redux/count.redux';
import { user } from '../redux/user.redux'

const store = createStore(
    combineReducers({count, user}),
    applyMiddleware(logger, thunk));

export default store;

