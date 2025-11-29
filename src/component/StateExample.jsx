import { useState } from "react";

function StateExample() {
    const [value, setValue] = useState(0);

    return (
        <>
            <h2>Counter using State :</h2>
            <p>Value : {value}</p>
            <button onClick={() => { setValue(value + 1) }}>Increase</button>
            <button onClick={() => { setValue(value - 1) }}>Decrease</button>
        </>
    );
}

export default StateExample;