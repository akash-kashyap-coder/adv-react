import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from '../userReducer';
import todoStatusReducer from '../todoStatusReducer';


export const  store = configureStore({
    reducer:combineReducers({userReducer:userReducer,todoStatusReducer:todoStatusReducer})
});