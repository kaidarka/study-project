import React, {useState} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(state => state + 1);
    }

    return (
        <div className={styles.counter}>
            <h1>{count}</h1>
            <button onClick={increment}>incr</button>
        </div>
    );
};
