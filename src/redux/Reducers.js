import { createReducer } from '@reduxjs/toolkit';

const InitialState = {
    c : 100 ,
}

export const customReducer  = createReducer( InitialState , {
    increment : (state , action) =>{
        state.c = state.c+1  ;
    } ,

    incrementByValue : ( state , action ) =>{
        state.c = state.c + action.payload  ;
    } , 

    decrement : ( state , action ) =>{
        state.c = state.c - 1 ; 
    }
})