import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user || null,
  isAuthenticated: !!user,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("user");
    },

    loadUser: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
    },
  },
});

export const {
  loginSuccess,
  logout,
  loadUser,
} = authSlice.actions;

export default authSlice.reducer;