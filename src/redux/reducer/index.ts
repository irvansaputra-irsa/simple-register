import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../action"

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});