import { configureStore } from "@reduxjs/toolkit"
import TaskReducer from "./slices/TaskSlice"

export const store = configureStore({
    reducer: {
        taskReducer: TaskReducer,
        // auth: AuthReducer,
    },
})