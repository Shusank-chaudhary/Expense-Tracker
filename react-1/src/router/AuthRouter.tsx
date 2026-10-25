import AuthLayout from "../page/layout/AuthLayout"
import RegisterPage from "../page/auth/RegisterPage"
import LoginPage from "../page/auth/LoginPage"

export const AuthRouter = [
    {
        path: "/", element: <AuthLayout />, children: [
            { index: true, element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
        ]
    },
]