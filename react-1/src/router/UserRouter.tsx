import UserCategories from "../component/Userdashboard/UserCategories";
import UserDashboard from "../component/Userdashboard/UserDashboard";
import UserProfile from "../component/Userdashboard/UserProfile";
import UserReport from "../component/Userdashboard/UserReport";
import UserSetting from "../component/Userdashboard/UserSetting";
import UserTransaction from "../component/Userdashboard/UserTransaction";
import ErrorPage from "../page/error/ErrorPage";
import UserLayout from "../page/layout/UserLayout";

export const UserRouter = [
    {
      path: "user", element: <UserLayout />, children:[
        {index: true, element: <UserDashboard />},
        {path: "transaction", element: <UserTransaction />},
        {path: "categories", element: <UserCategories />},
        {path: "reports", element: <UserReport/>},
        {path: "profile", element: <UserProfile/>},
        {path: "settings", element: <UserSetting/>},
        {path: "*", element: <ErrorPage />},
      ]  
    },
]