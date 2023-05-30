import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // alert("Call after mounted");
        // return () => {
        //     alert("Exit");
        // };
    }, []);

    return (
        <>
            <Link to="/article/view/120">Article View</Link>
            <h2>Article {count}</h2>
            <button onClick={() => setCount(count - 1)}>count</button>
        </>
    );
};
