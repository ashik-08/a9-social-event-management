import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../../public/event-data.json'),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch('../../public/event-data.json'),
      },
    ],
  },
]);

export default router;
