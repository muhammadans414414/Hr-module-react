const { createSlice } = require('@reduxjs/toolkit');

const authTokenSlice = createSlice({
    name: 'token',
    initialState: "",
    reducers: {
        setToken(state, action) {
           return state = action.payload;
        },
        deleteToken(state, action) {
           return state = action.payload;
        },
    },
});
export const { setToken, deleteToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;