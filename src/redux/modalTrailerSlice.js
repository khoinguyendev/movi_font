import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        isOpen: false,
        item: null
    },
};

const modalTrailerSlice = createSlice({
    name: "modaltrailer",
    initialState,
    reducers: {
        setModalTrailer: (state, action) => {
            // Merge the existing filter with the new properties from action.payload
            state.data = action.payload
        },
    },
});

// Export actions
export const { setModalTrailer } = modalTrailerSlice.actions;

// Export the reducer
export default modalTrailerSlice.reducer;
