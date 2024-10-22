import { useRouteError, Link } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();

    if(error.status === 404) {
        return (
            <div>
                <h1>404 - Not found</h1>
                <p>Oh no!</p>
                <p style={{color: "#3D405B"}}>Sorry to say but there is nothing here. You must be lost.</p>
                <Link to={"/"}>Go back to main page</Link>
            </div>
        )
    }
}

export default ErrorPage