import { useRouteError } from "react-router";
const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
            <h1>Oops!</h1>
            <h2>Something went wrong!</h2>
            {/* <h3>{err.status}:{err.statusText}</h3>
            <h4>{err.error.message}</h4>
            <p>{err.error.stack}</p> */}
        </div>
    );
};
export default Error;