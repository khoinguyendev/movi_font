import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: {
        date: new Date().toISOString(),
        location: 1,
        brandId: 0,
        near: false,
        currentLocation: {
            latitude: 10.83034725,
            longitude: 106.77077958333336,
        }
    },
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {

            // Merge the existing filter with the new properties from action.payload
            state.filter = {
                ...state.filter,
                ...action.payload,
            };
        },
        resetSearch: (state, action) => {
            state.filter = action.payload;
        },
    },
});

// Export actions
export const { setSearch, resetSearch } = searchSlice.actions;

// Export the reducer
export default searchSlice.reducer;
