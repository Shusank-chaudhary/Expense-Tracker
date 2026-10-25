import AdminLayout from "../page/layout/AdminLayout"
import AdminDashboard from "../page/dashboard/AdminDashboard"
import ErrorPage from "../page/error/ErrorPage"
import User from "../component/Admindashboard/User"
import Transaction from "../component/Admindashboard/Transaction"
import Categories from "../component/Admindashboard/Categories"
import Report from "../component/Admindashboard/Report"
import Activity from "../component/Admindashboard/Activity"
import Setting from "../component/Admindashboard/Setting"

export const AdminRouter = [
    {
        path: "admin", element: <AdminLayout />, children: [
            { index: true, element: <AdminDashboard /> },
            { path: "all-users", element: <User /> },
            { path: "transaction", element: <Transaction /> },
            { path: "categories", element: <Categories /> },
            { path: "reports", element: <Report /> },
            { path: "activity", element: <Activity /> },
            { path: "settings", element: <Setting /> },
            { path: "*", element: <ErrorPage /> }
        ]
    },
]