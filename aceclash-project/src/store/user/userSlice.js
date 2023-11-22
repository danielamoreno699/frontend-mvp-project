import { createSlice } from '@reduxjs/toolkit';
export const usersSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'checking',
        users: [],
        errorMessage: undefined
    },
    reducers: {
        pending: (state) =>{
            state.status = 'checking';
            state.users = [];
            state.errorMessage = undefined
        },
        fullfilled : (state, {payload}) =>{
            state.status = 'succceded'
            state.users = payload
            state.errorMessage = undefined
        },
        rejected : (state, {payload}) =>{
            state.status = 'failed'
            state.users = []
            state.errorMessage = payload
        },


       
    },
});
export const { pending, fullfilled, rejected } = usersSlice.actions;