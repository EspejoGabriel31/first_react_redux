import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload)
            return { items: [...state.items, action.payload]}
        },
        removeTodo: (state, action) => {
            let itemsChange = [...state.items] //assign state items to temp array
            if(action.payload !== -1){ //check if payload is valid
                itemsChange.splice(action.payload, 1) //remove item from array at payload
                return { items: itemsChange} //return temp array as 
            }
        },
        clearTodos: () => {
            console.log('clearTodos')
            return { items: [] }
        }
    }
})

export const { addTodo, removeTodo, clearTodos } = todoSlice.actions

export default todoSlice.reducer