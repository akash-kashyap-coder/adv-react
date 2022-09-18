
import { configureStore } from "@reduxjs/toolkit";


const selectedUserReducer = (state = {selectedUserId:0}, action) => {
    if(action.type === 'changeUser'){
        return {
            selectedUserId : 1
        }
    }
    return selectedUserReducer
}; 


const store = configureStore( {
    reducer:selectedUserReducer
});

export default store;