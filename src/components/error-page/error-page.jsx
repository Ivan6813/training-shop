import "./error-page.scss";

const ErrorPage = () => (
    <div className = "error-page">
        <div className = "error-code">404</div>
        <div className = "error-message">Not Found</div>
        <p className = "error-text">The resource requested could not be found on this server!</p>
    </div>
);

export default ErrorPage;