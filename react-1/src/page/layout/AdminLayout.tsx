import { Outlet, useNavigate } from "react-router";
import { DashboardIcon } from "../../component/icon/LeftDashboardIcon";
import { FaHome, FaMoneyBill, FaRProject, FaTypo3, FaUser, FaSignOutAlt, FaUserCircle, FaChevronDown } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import {toast} from "sonner";
import { useAuth } from "../../hook/useAuth";

export default function AdminLayout() {
    const { loggedInUser, logout } = useAuth();
    const navigate = useNavigate();
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        if (!loggedInUser) {
            toast.warning("You need to login to access!!")
            navigate('/')
        }
    }, [loggedInUser, navigate]);
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
                {/* <DashboardIcon to="/admin/logout" leftIcon={<FaSignOutAlt />} rightIcon={<GoArrowRight />} label="Logout" /> */}
                <button
                    type="button"
                    onClick={() => {
                        logout();
                        toast.success("Logged out successfully");
                        navigate("/", { replace: true });
                    }}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-white hover:bg-green-700"
                >
                    <span className="flex items-center gap-3">
                        <FaSignOutAlt />
                        Logout
                    </span>
                    <GoArrowRight />
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col ml-64 min-h-screen">
                {/* Header */}
 
                <header className="bg-green-800 shadow p-4 md:px-6 flex justify-between items-center sticky top-0 z-20">
                    <h1 className="text-2xl md:text-3xl font-bold text-green-300">
                        Dashboard
                    </h1>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsProfileOpen((prev) => !prev)}
                            aria-expanded={isProfileOpen}
                            className="flex items-center gap-3 rounded-lg p-2 hover:bg-green-700 transition-colors text-white"
                        >
                            <FaUserCircle className="text-3xl text-green-300" />

                            <div className="hidden sm:block text-left">
                                <p className="font-semibold">
                                    {loggedInUser?.name ?? "Admin"}
                                </p>
                                <p className="text-xs text-green-200">
                                    Administrator
                                </p>
                            </div>

                            <FaChevronDown className="text-sm" />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-white shadow-xl border border-gray-200 overflow-hidden z-50 text-gray-800">
                                <div className="p-4 border-b border-gray-200">
                                    <p className="font-semibold text-gray-900 break-words">
                                        {loggedInUser?.name}
                                    </p>
                                    <p className="text-sm text-gray-500 break-all mt-1">
                                        {loggedInUser?.email}
                                    </p>
                                    <span className="inline-block mt-3 rounded-full bg-green-100 text-green-800 text-xs px-3 py-1">
                                        Administrator
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsProfileOpen(false);
                                        logout();
                                        toast.success("Logged out successfully");
                                        navigate("/", { replace: true });
                                    }}
                                    className="flex items-center gap-3 w-full p-4 text-left text-red-600 hover:bg-red-50 transition-colors"
                                >
                                    <FaSignOutAlt />
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                {/* Content Area */}
                <Outlet />
            </div>
        </div>
    </>
    )
}