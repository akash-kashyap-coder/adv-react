import { createReducer } from "@reduxjs/toolkit";

const initialState ={
    completedSelected:false,
    inProgressSelected:false
}


export default createReducer(initialState,(builder)=>{
    builder.addCase('UPDATE_TODO_STATUS_FILTER',(state,action)=>{
        state.completedSelected = action.payload.completedSelected
        state.inProgressSelected = action.payload.inProgressSelected
       
    })
})