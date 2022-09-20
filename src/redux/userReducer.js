

import { createReducer } from "@reduxjs/toolkit";


const initialState ={
    selectedUser:0
}


/*
export default (state=initialState, action) => {
  if (action.type == "UPDATE_SELECTED_USER") {
    return {
      selectedUser: action.payload,
    };
  }
  return state;
};
*/

export default createReducer(initialState,(builder)=>{
    builder.addCase('UPDATE_SELECTED_USER',(state,action)=>{
        state.selectedUser = action.payload
    })
})