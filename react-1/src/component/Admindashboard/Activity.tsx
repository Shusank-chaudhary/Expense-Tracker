export default function Activity() {
    return (<>
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}
            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-800">
                    Activity Logs
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Monitor important activities performed on the platform.
                </p>

            </div>


            {/* Filters */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">

                <div className="flex flex-wrap gap-4">

                    <input
                        type="text"
                        placeholder="Search activity..."
                        className="border border-gray-200 rounded-lg px-4 py-2.5 w-80 outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <select className="border border-gray-200 rounded-lg px-4 py-2.5">
                        <option>All Activities</option>
                        <option>Login</option>
                        <option>Logout</option>
                        <option>Created</option>
                        <option>Updated</option>
                        <option>Deleted</option>
                    </select>

                    <select className="border border-gray-200 rounded-lg px-4 py-2.5">
                        <option>All Users</option>
                        <option>Admin</option>
                        <option>Users</option>
                    </select>

                </div>

            </div>


            {/* Activity List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">

                <div className="px-6 py-4 border-b border-gray-100">

                    <h2 className="font-semibold text-gray-800">
                        Recent Activities
                    </h2>

                </div>


                <div className="divide-y divide-gray-100">


                    {/* Activity 1 */}
                    <div className="px-6 py-5 flex items-start gap-4">

                        <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                            ✓
                        </div>

                        <div className="flex-1">

                            <p className="text-gray-800">
                                <span className="font-semibold">
                                    Ram Sharma
                                </span>{" "}
                                added a new expense.
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Food · Rs. 2,500
                            </p>

                        </div>

                        <span className="text-xs text-gray-400">
                            5 minutes ago
                        </span>

                    </div>


                    {/* Activity 2 */}
                    <div className="px-6 py-5 flex items-start gap-4">

                        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                            +
                        </div>

                        <div className="flex-1">

                            <p className="text-gray-800">
                                <span className="font-semibold">
                                    Hari Thapa
                                </span>{" "}
                                created a new account.
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                New user registration
                            </p>

                        </div>

                        <span className="text-xs text-gray-400">
                            25 minutes ago
                        </span>

                    </div>


                    {/* Activity 3 */}
                    <div className="px-6 py-5 flex items-start gap-4">

                        <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center">
                            ✎
                        </div>

                        <div className="flex-1">

                            <p className="text-gray-800">
                                <span className="font-semibold">
                                    Admin User
                                </span>{" "}
                                updated a category.
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Category: Food
                            </p>

                        </div>

                        <span className="text-xs text-gray-400">
                            1 hour ago
                        </span>

                    </div>


                    {/* Activity 4 */}
                    <div className="px-6 py-5 flex items-start gap-4">

                        <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                            !
                        </div>

                        <div className="flex-1">

                            <p className="text-gray-800">
                                <span className="font-semibold">
                                    Admin User
                                </span>{" "}
                                blocked a user.
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                User: Sita Rai
                            </p>

                        </div>

                        <span className="text-xs text-gray-400">
                            2 hours ago
                        </span>

                    </div>


                    {/* Activity 5 */}
                    <div className="px-6 py-5 flex items-start gap-4">

                        <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                            ↪
                        </div>

                        <div className="flex-1">

                            <p className="text-gray-800">
                                <span className="font-semibold">
                                    Anil Gurung
                                </span>{" "}
                                logged into the system.
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Login successful
                            </p>

                        </div>

                        <span className="text-xs text-gray-400">
                            3 hours ago
                        </span>

                    </div>

                </div>

            </div>

        </div>
    </>
    )
}