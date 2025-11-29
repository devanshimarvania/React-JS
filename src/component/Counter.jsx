import React, { useState, useEffect } from "react";

function Counter() {
    const [value, setValue] = useState(0);

    function handleIncrease() {
        setValue(value + 1);
    }

    function handleDecrease() {
        setValue(value - 1);
    }

    const [timerCount, setTimerCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimerCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h2 style={{ marginBottom: '5px' }}>Counter : {value}</h2>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>

            <br />

            <h2>Timer : {timerCount}</h2>
        </div>
    );
}

export default Counter;
