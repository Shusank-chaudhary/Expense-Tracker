import { Outlet, useNavigate } from "react-router";
import { DashboardIcon } from "../../component/icon/LeftDashboardIcon";
import { FaHome, FaMoneyBill, FaRProject, FaTypo3, FaUser } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useEffect } from "react";
import {toast} from "sonner";
import { useAuth } from "../../hook/useAuth";

export default function UserLayout() {
    const { loggedInUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedInUser) {
            toast.warning("You need to login to access!!")
            navigate('/')
        }
    }, [])
    return (<>
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-green-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-8">User Panel</h2>
                <DashboardIcon to="/user" className="" leftIcon={<FaHome />} rightIcon={<GoArrowRight />} label="Dashboard" />
                <DashboardIcon to="/user/transaction" leftIcon={<FaMoneyBill />} rightIcon={<GoArrowRight />} label="Transactions" />
                <DashboardIcon to="/user/categories" leftIcon={<FaTypo3 />} rightIcon={<GoArrowRight />} label="Categories" />
                <DashboardIcon to="/user/reports" leftIcon={<FaRProject />} rightIcon={<GoArrowRight />} label="Reports" />
                <DashboardIcon to="/user/profile" leftIcon={<FaHome />} rightIcon={<GoArrowRight />} label="Profile" />
                <DashboardIcon to="/user/settings" leftIcon={<FaUser />} rightIcon={<GoArrowRight />} label="Settings" />
                <DashboardIcon to="/user/logout" leftIcon={<FaRProject />} rightIcon={<GoArrowRight />} label="Logout" />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 min-h-screen">
                {/* Header */}
                <header className="bg-green-800 shadow p-6 flex justify-between items-center sticky top-0 z-20">
                    <h1 className="text-3xl font-bold text-green-300">Dashboard</h1>
                    <div className="text-green-300">User</div>
                </header>

                {/* Content Area */}
                <Outlet />
            </div>
        </div>
    </>
    )
}