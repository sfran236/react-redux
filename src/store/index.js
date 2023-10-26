
import counterSlice from "./counter";
import authSlice from "./auth";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth:authSlice.reducer}
});



export default store;