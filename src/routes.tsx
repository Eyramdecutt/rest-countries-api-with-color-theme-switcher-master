import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/country/:country", element: <CountryDetailPage /> },
    ],
  },
]);

export default router;
