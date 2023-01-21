import { createBrowserRouter } from "react-router-dom";
import FormBody from "../FormBody/FormBody";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/form/:id",
    element: <FormBody></FormBody>,
  },
]);
