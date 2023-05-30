import { useParams } from "react-router-dom";

const Name = ({ id }) => {
    return (
        <>
            <h2>New Article id is: {id}</h2>
        </>
    );
};

export default () => {
    const { id } = useParams();
    return (
        <>
            {/* {Name()} */}
            <Name id={id} />
            {/* <h2>Article new page</h2> */}
        </>
    );
};
