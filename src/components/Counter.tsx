import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(state => state + 1);
    }

    return (
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={increment}>incr</button>
        </div>
    );
};
