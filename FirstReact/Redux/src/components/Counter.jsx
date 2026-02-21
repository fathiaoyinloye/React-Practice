import React from "react";
import { increment, decrement, reset} from "../slices/counterSlice";
import {useSelector, useDispatch} from "react-redux"

const Counter = () =>{
    const value = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    return(
        <div>
            <span >{value}</span>
            <button onClick={()=>dispatch(increment()) }>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <button onClick={()=> dispatch(reset())}>reset</button>

        </div>
    )

}

export default Counter