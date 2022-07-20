import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counterSlice'

export default function Counter(){
    console.log("HEre1>")
    const count = useSelector((state) => state?.value)  
    console.log("Here2>", count)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}