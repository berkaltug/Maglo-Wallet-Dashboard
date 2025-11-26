import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    isAuthenticated:false,
    accessToken:null
}
export const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        loggedIn:(state,action)=>{
            const {user,accessToken}=action.payload
            state.user=user
            state.accessToken=accessToken
            state.isAuthenticated=true
        },
        loggedOut:(state)=>{
            state.user=null
            state.isAuthenticated=false
            state.accessToken=null
        },
        refreshToken:(state,action)=>{
            state.accessToken=action.payload
        }
    }
})

export const {loggedIn,loggedOut,refreshToken}=userSlice.actions
export default userSlice.reducer;