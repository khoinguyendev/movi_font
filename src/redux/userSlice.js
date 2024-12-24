import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: null,
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            // Mutate the draft state directly (no reassignment)
            state.items = action.payload;
        },
        setFieldUser: (state, action) => {

            // Merge the existing filter with the new properties from action.payload
            state.items = {
                ...state.items,
                ...action.payload,
            };
        },
    },
});



// Export actions
export const { setUser, setFieldUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
