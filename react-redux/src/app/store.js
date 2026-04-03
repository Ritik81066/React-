import { configureStore } from "@reduxjs/toolkit";
import todoReducers from '../features/todo/todoslice'

export const store=configureStore({
    reducer:todoReducers
})

