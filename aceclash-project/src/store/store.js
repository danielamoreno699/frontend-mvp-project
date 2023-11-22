import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { usersSlice } from './user/userSlice'

export const store = configureStore({

    reducer: {
        auth: authSlice.reducer,
        users: usersSlice.reducer
    }

})