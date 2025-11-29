import { useEffect, useState } from "react";

function LifecycleExample() {
    const [timerValue, setTimerValue] = useState(0);

    useEffect(() => {
        console.log("Mounted...");
        
        const intervalId = setInterval(() => {
            setTimerValue((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log("Unmounted...");
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (timerValue > 0) {
            console.log("Updated...");
        }
    });

    return (
        <>
            <h2>LifeCycle Example :</h2>
            <p>Timer : {timerValue}</p>
            <p>Check your browser console to see when the component mounts, updates, and unmounts.</p>
        </>
    );
}
export default LifecycleExample;