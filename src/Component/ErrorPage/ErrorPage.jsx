import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2>Sorry...</h2>

      <h3>{error.statusText || error.message}.</h3>
      {error.status === 404 && (
        <div>
          <p> Go back to previous page.</p>
          <Link to="/">
            <button>Go back to home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
