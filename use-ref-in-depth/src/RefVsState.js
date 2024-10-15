import { useState, useRef } from "react";

function RefVsState() {

    const [count, setCount] = useState(0);
    // let renderCount = 0;
    // renderCount++;

    const renderCount = useRef(0);
    renderCount.current++;

    const increment = () => {
        setCount(count + 1);
    }

    return <div>
        <button className="large" onClick={increment}>Increment</button>

        <div className="mt30">
            Count: {count}
        </div>

        <div className="mt30">
            {/* Render Count: {renderCount} */}
            Render Count: {renderCount.current}
        </div>
    </div>
}

export default RefVsState;