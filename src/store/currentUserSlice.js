const { createSlice } = require('@reduxjs/toolkit');

const currentUserSlice = createSlice({
    name: 'current_user',
    initialState: {},
    reducers: {
        setCurrentUser(state, action) {
           return state = action.payload;
        },
        deleteCurrentUser(state,action){
            return state = {}
        }
    },
});
export const { setCurrentUser, deleteCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;