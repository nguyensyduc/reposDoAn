import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
export const store = configureStore({
    reducer:{
        demo: UserSlice
    }
}) 
export default store;