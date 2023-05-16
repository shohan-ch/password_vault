import { useEffect, useState } from "react";

export default () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // alert("Call after mounted");
        return () => {
            alert("Exit");
        };
    }, []);

    return (
        <>
            <h2>Article {count}</h2>
            <button onClick={() => setCount(count - 1)}>count</button>
        </>
    );
};
