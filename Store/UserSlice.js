import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'DemoRN',
    initialState:{
        name: 'Sy Duc',
        pass: '123456'
    },
    reducers:{
        setCurrentUser:(state, action)=>{
            state.name = action.payload.name,
            state.pass = action.payload.pass
        }
    }
})

export default userSlice.reducer;
export const {setCurrentUser} = userSlice.actions