import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Opps!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && 
                <div>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            }
            <p></p>
        </div>
    );
};

export default ErrorPage;