import React, { useState } from "react";
const Counter = () => {
    //hook which connect with vertual DOM
    const [count, setCount] = useState(1)
// hig
    const incrementCount = () => {

        setCount(count + 1)

    }
    const decrementCount = () => {
        setCount(count - 1)
    }
    const doubleCount = () => {
        setCount(count * 2)
    }

    return (
        <div>
            <h1>Counter App </h1>
            {count % 2 == 0 ? (<h1 style={{ color: "green" }}>{count}</h1>) : (<h1 style={{ color: "red" }}>{count}</h1>)}
            <div className="Btndiv">
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
                <button onClick={doubleCount}>Double</button>
            </div>
        </div>
    )
}
export default Counter 