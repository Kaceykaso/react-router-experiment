import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                Apologies, something has happened and even <em>we</em> don't know what it is!<br />
                Check this out:
            </p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}