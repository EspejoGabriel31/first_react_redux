import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addTodo, clearTodos, removeTodo } from "./features/todoSlice";

export default function Todo(){

    const items = useSelector((state) => state.todo.items)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0)

    const renderItems = items.map((item, index) => 
        <li key={index}>
            {item}
        <button onClick={() => dispatch(removeTodo(index))}>x</button>
        </li>
    )

    const todoSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }
    return ( 
        <div>
            <form onSubmit={(e) => todoSubmit(e)}>
                <input type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => dispatch(clearTodos())}>Clear</button>
            <ul>
                {renderItems}
            </ul>
        </div>
    )
    
}