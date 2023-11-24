import { createSlice } from '@reduxjs/toolkit';
export const tournamentsSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'checking',
        tournaments: [],
        errorMessage: undefined
    },
    reducers: {
        pending: (state) =>{
            state.status = 'checking';
            state.tournaments = [];
            state.errorMessage = undefined
        },
        fulfilled : (state, {payload}) =>{
            state.status = 'succceded'
            state.tournaments = payload
            state.errorMessage = undefined
        },
        rejected : (state, {payload}) =>{
            state.status = 'failed'
            state.tournaments = []
            state.errorMessage = payload
        },


       
    },
});
export const { pending, fulfilled, rejected } = tournamentsSlice.actions;