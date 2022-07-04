import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        setLogout: state => {
            state.email = null;
            state.password = null;
        }
    }
})

export const { setUserLogin, setSignUp } = userSlice.actions;

export const selectUserEmail = state => state.user.email;
export const selectUserPassword = state => state.user.password;

export default userSlice.reducer;