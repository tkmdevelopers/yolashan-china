import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface AuthState {
  auth: boolean | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  auth: null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (state) => {
      state.auth === null ? (state.auth = true) : (state.auth = null);
    },
    signOut: (state) => {
      state.auth === null ? (state.auth = false) : (state.auth = null);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { signIn, signOut } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const authState = (state: RootState) => state.auth;

export default authSlice.reducer;
