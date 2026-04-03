import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[]
}

export const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            if (!action.payload || action.payload.trim() === "") {
                return;
            }
            state.todos.push({
                id: nanoid(),
                todo: action.payload
            })
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateToDo: (state, action) => {
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload ? {...todo, todo: action.payload.text} : todo
            )
        }
    }
})

export const { addToDo, updateToDo, removeToDo } = todoslice.actions

export default todoslice.reducer
