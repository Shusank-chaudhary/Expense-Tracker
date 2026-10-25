import { createBrowserRouter, RouterProvider } from "react-router"
import ErrorPage from "../page/error/ErrorPage"
import { AuthRouter } from "./AuthRouter"
import { AdminRouter } from "./AdminRouter"
import { UserRouter } from "./UserRouter"

const router = createBrowserRouter([
  ...AuthRouter,
  ...AdminRouter,
  ...UserRouter,

  { path: "*", element: <ErrorPage /> }
])

export default function RouterConfig() {
  return (<>
    <RouterProvider router={router} />
  </>
  )
}