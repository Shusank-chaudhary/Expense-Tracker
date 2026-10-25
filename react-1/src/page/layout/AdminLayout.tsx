import { Outlet, useNavigate } from "react-router";
import { DashboardIcon } from "../../component/icon/LeftDashboardIcon";
import { FaHome, FaMoneyBill, FaRProject, FaTypo3, FaUser } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useEffect } from "react";
import {toast} from "sonner";
import { useAuth } from "../../hook/useAuth";

export default function AdminLayout() {
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
                <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
                <DashboardIcon to="/admin" className="" leftIcon={<FaHome />} rightIcon={<GoArrowRight />} label="Dasboard" />
                <DashboardIcon to="/admin/all-users" leftIcon={<FaUser />} rightIcon={<GoArrowRight />} label="Users" />
                <DashboardIcon to="/admin/transaction" leftIcon={<FaMoneyBill />} rightIcon={<GoArrowRight />} label="Transactions" />
                <DashboardIcon to="/admin/categories" leftIcon={<FaTypo3 />} rightIcon={<GoArrowRight />} label="Categories" />
                <DashboardIcon to="/admin/reports" leftIcon={<FaRProject />} rightIcon={<GoArrowRight />} label="Reports" />
                <DashboardIcon to="/admin/activity" leftIcon={<FaHome />} rightIcon={<GoArrowRight />} label="Activity Logs" />
                <DashboardIcon to="/admin/settings" leftIcon={<FaUser />} rightIcon={<GoArrowRight />} label="Setting" />
                <DashboardIcon to="/admin/logout" leftIcon={<FaRProject />} rightIcon={<GoArrowRight />} label="Logout" />
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 min-h-screen">
                {/* Header */}
                <header className="bg-green-800 shadow p-6 flex justify-between items-center sticky top-0 z-20">
                    <h1 className="text-3xl font-bold text-green-300">Dashboard</h1>
                    <div className="text-green-300">Admin User</div>
                </header>

                {/* Content Area */}
                <Outlet />
            </div>
        </div>
    </>
    )
}