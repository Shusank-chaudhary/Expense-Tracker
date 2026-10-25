export default function Report() {
    return (<>
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Reports
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Analyze financial activity across the platform.
                    </p>
                </div>

                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-lg">
                    Export Report
                </button>

            </div>


            {/* Filter */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">

                <div className="flex flex-wrap gap-4 items-center">

                    <select className="border border-gray-200 rounded-lg px-4 py-2.5">
                        <option>This Month</option>
                        <option>Last Month</option>
                        <option>Last 3 Months</option>
                        <option>This Year</option>
                    </select>

                    <select className="border border-gray-200 rounded-lg px-4 py-2.5">
                        <option>All Users</option>
                        <option>Active Users</option>
                        <option>Blocked Users</option>
                    </select>

                    <button className="bg-gray-800 text-white px-5 py-2.5 rounded-lg">
                        Generate Report
                    </button>

                </div>

            </div>


            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">

                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Total Income
                    </p>

                    <h2 className="text-2xl font-bold text-green-600 mt-2">
                        Rs. 845,200
                    </h2>
                </div>


                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Total Expenses
                    </p>

                    <h2 className="text-2xl font-bold text-red-600 mt-2">
                        Rs. 524,850
                    </h2>
                </div>


                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Average Expense
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-2">
                        Rs. 3,240
                    </h2>
                </div>


                <div className="bg-white rounded-xl p-5 shadow-sm">
                    <p className="text-sm text-gray-500">
                        Total Transactions
                    </p>

                    <h2 className="text-2xl font-bold text-blue-600 mt-2">
                        8,542
                    </h2>
                </div>

            </div>


            {/* Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                {/* Income vs Expense */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">

                    <h2 className="font-semibold text-gray-800">
                        Income vs Expenses
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Monthly financial comparison
                    </p>

                    <div className="h-64 flex items-center justify-center mt-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-400">
                            Chart will be displayed here
                        </p>
                    </div>

                </div>


                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">

                    <h2 className="font-semibold text-gray-800">
                        Expenses by Category
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Where users spend their money
                    </p>

                    <div className="h-64 flex items-center justify-center mt-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-400">
                            Chart will be displayed here
                        </p>
                    </div>

                </div>

            </div>


            {/* Top Spending Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="px-6 py-4 border-b border-gray-100">

                    <h2 className="font-semibold text-gray-800">
                        Top Spending Categories
                    </h2>

                </div>


                <table className="w-full text-left">

                    <thead className="bg-gray-50">

                        <tr>

                            <th className="px-6 py-4 text-xs text-gray-500 uppercase">
                                Category
                            </th>

                            <th className="px-6 py-4 text-xs text-gray-500 uppercase">
                                Transactions
                            </th>

                            <th className="px-6 py-4 text-xs text-gray-500 uppercase">
                                Total Amount
                            </th>

                            <th className="px-6 py-4 text-xs text-gray-500 uppercase">
                                Percentage
                            </th>

                        </tr>

                    </thead>


                    <tbody className="divide-y divide-gray-100">

                        <tr>
                            <td className="px-6 py-4 font-medium">
                                Food
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                2,845
                            </td>

                            <td className="px-6 py-4 font-medium">
                                Rs. 125,400
                            </td>

                            <td className="px-6 py-4 text-green-600">
                                24%
                            </td>
                        </tr>


                        <tr>
                            <td className="px-6 py-4 font-medium">
                                Transport
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                1,524
                            </td>

                            <td className="px-6 py-4 font-medium">
                                Rs. 82,300
                            </td>

                            <td className="px-6 py-4 text-green-600">
                                16%
                            </td>
                        </tr>


                        <tr>
                            <td className="px-6 py-4 font-medium">
                                Shopping
                            </td>

                            <td className="px-6 py-4 text-gray-600">
                                1,248
                            </td>

                            <td className="px-6 py-4 font-medium">
                                Rs. 68,500
                            </td>

                            <td className="px-6 py-4 text-green-600">
                                13%
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </div>
    </>
    )
}