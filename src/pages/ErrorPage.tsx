import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <div className="p-4 md:p-8 xl:px-20">
        <h1 className="text-4xl font-bold">Opps...</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exists."
            : "An unexpected error occured."}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
