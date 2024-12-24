import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice";
import modalTrailerReducer from "./modalTrailerSlice";



const store = configureStore({
    reducer: {
        user: userReducer,
        search: searchReducer,
        modaltrailer: modalTrailerReducer
    },
});


export default store;
