const { createSlice } = require('@reduxjs/toolkit');

const loginSlice = createSlice({
    name: 'auth',
    initialState: "false",
    reducers: {
        login(state, action) {
           return state = action.payload;
        },
        logout(state, action) {
           return state = action.payload;
        },
    },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;