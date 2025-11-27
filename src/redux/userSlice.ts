import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../services/userTypes";

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  accessToken: string | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  accessToken: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    loggedOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.accessToken = null;
      state.isLoading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    refreshToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loggedIn, loggedOut, refreshToken,setUser, finishLoading } =
  userSlice.actions;
export default userSlice.reducer;
