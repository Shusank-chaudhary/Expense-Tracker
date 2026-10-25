export default function Transaction() {
    return (<>
        <div className="min-h-screen bg-gray-100 p-6">

            {/* ================= HEADER ================= */}
            <div className="flex items-center justify-between mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Transactions
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Monitor and manage all transactions made by users.
                    </p>
                </div>

                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-lg">
                    Export Transactions
                </button>

            </div>


            {/* ================= SUMMARY CARDS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">

                {/* Total Transactions */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">
                        Total Transactions
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-2">
                        8,542
                    </h2>

                    <p className="text-sm text-green-600 mt-2">
                        +12.5% this month
                    </p>
                </div>


                {/* Income */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">
                        Total Income
                    </p>

                    <h2 className="text-2xl font-bold text-green-700 mt-2">
                        Rs. 845,200
                    </h2>

                    <p className="text-sm text-green-600 mt-2">
                        +8.4% this month
                    </p>
                </div>


                {/* Expenses */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">
                        Total Expenses
                    </p>

                    <h2 className="text-2xl font-bold text-red-600 mt-2">
                        Rs. 524,850
                    </h2>

                    <p className="text-sm text-red-500 mt-2">
                        +5.2% this month
                    </p>
                </div>


                {/* Net Balance */}
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">
                        Net Balance
                    </p>

                    <h2 className="text-2xl font-bold text-blue-700 mt-2">
                        Rs. 320,350
                    </h2>

                    <p className="text-sm text-gray-500 mt-2">
                        Current balance
                    </p>
                </div>

            </div>


            {/* ================= FILTER ================= */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">

                <div className="flex flex-col lg:flex-row gap-4 justify-between">

                    {/* Search */}
                    <div className="relative w-full lg:w-96">

                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            🔍
                        </span>

                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600"
                        />

                    </div>


                    {/* Filters */}
                    <div className="flex flex-wrap gap-3">

                        {/* Type */}
                        <select className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600">
                            <option>All Types</option>
                            <option>Income</option>
                            <option>Expense</option>
                        </select>


                        {/* Category */}
                        <select className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600">
                            <option>All Categories</option>
                            <option>Food</option>
                            <option>Transport</option>
                            <option>Shopping</option>
                            <option>Bills</option>
                            <option>Entertainment</option>
                        </select>


                        {/* Date */}
                        <select className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600">
                            <option>All Dates</option>
                            <option>Today</option>
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>

                    </div>

                </div>

            </div>


            {/* ================= TRANSACTION TABLE ================= */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Table Header */}
                <div className="px-6 py-4 border-b border-gray-100">

                    <h2 className="text-lg font-semibold text-gray-800">
                        All Transactions
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        8,542 transactions recorded
                    </p>

                </div>


                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        {/* Table Heading */}
                        <thead className="bg-gray-50 border-b border-gray-200">

                            <tr>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    User
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Description
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Category
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Type
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Amount
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Date
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-100">


                            {/* Transaction 1 */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-9 h-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold">
                                            RS
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Ram Sharma
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                ram@gmail.com
                                            </p>
                                        </div>

                                    </div>

                                </td>


                                <td className="px-6 py-4 text-sm text-gray-700">
                                    Grocery Shopping
                                </td>


                                <td className="px-6 py-4">

                                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs">
                                        Food
                                    </span>

                                </td>


                                <td className="px-6 py-4">

                                    <span className="text-red-600 text-sm font-medium">
                                        Expense
                                    </span>

                                </td>


                                <td className="px-6 py-4 font-semibold text-red-600">
                                    - Rs. 2,500
                                </td>


                                <td className="px-6 py-4 text-sm text-gray-500">
                                    Aug 10, 2026
                                </td>


                                <td className="px-6 py-4 text-right">

                                    <button className="text-blue-600 hover:underline text-sm">
                                        View
                                    </button>

                                </td>

                            </tr>


                            {/* Transaction 2 */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                                            HT
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Hari Thapa
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                hari@gmail.com
                                            </p>
                                        </div>

                                    </div>

                                </td>


                                <td className="px-6 py-4 text-sm text-gray-700">
                                    Monthly Salary
                                </td>


                                <td className="px-6 py-4">

                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                        Salary
                                    </span>

                                </td>


                                <td className="px-6 py-4">

                                    <span className="text-green-600 text-sm font-medium">
                                        Income
                                    </span>

                                </td>


                                <td className="px-6 py-4 font-semibold text-green-600">
                                    + Rs. 45,000
                                </td>


                                <td className="px-6 py-4 text-sm text-gray-500">
                                    Aug 10, 2026
                                </td>


                                <td className="px-6 py-4 text-right">

                                    <button className="text-blue-600 hover:underline text-sm">
                                        View
                                    </button>

                                </td>

                            </tr>


                            {/* Transaction 3 */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-semibold">
                                            SR
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Sita Rai
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                sita@gmail.com
                                            </p>
                                        </div>

                                    </div>

                                </td>


                                <td className="px-6 py-4 text-sm text-gray-700">
                                    Bus Ticket
                                </td>


                                <td className="px-6 py-4">

                                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                                        Transport
                                    </span>

                                </td>


                                <td className="px-6 py-4">

                                    <span className="text-red-600 text-sm font-medium">
                                        Expense
                                    </span>

                                </td>


                                <td className="px-6 py-4 font-semibold text-red-600">
                                    - Rs. 500
                                </td>


                                <td className="px-6 py-4 text-sm text-gray-500">
                                    Aug 09, 2026
                                </td>


                                <td className="px-6 py-4 text-right">

                                    <button className="text-blue-600 hover:underline text-sm">
                                        View
                                    </button>

                                </td>

                            </tr>


                            {/* Transaction 4 */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-semibold">
                                            AG
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Anil Gurung
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                anil@gmail.com
                                            </p>
                                        </div>

                                    </div>

                                </td>


                                <td className="px-6 py-4 text-sm text-gray-700">
                                    Electricity Bill
                                </td>


                                <td className="px-6 py-4">

                                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                                        Bills
                                    </span>

                                </td>


                                <td className="px-6 py-4">

                                    <span className="text-red-600 text-sm font-medium">
                                        Expense
                                    </span>

                                </td>


                                <td className="px-6 py-4 font-semibold text-red-600">
                                    - Rs. 3,200
                                </td>


                                <td className="px-6 py-4 text-sm text-gray-500">
                                    Aug 08, 2026
                                </td>


                                <td className="px-6 py-4 text-right">

                                    <button className="text-blue-600 hover:underline text-sm">
                                        View
                                    </button>

                                </td>

                            </tr>


                            {/* Transaction 5 */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-9 h-9 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-semibold">
                                            BK
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Bikash Karki
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                bikash@gmail.com
                                            </p>
                                        </div>

                                    </div>

                                </td>


                                <td className="px-6 py-4 text-sm text-gray-700">
                                    Freelance Payment
                                </td>


                                <td className="px-6 py-4">

                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                        Freelance
                                    </span>

                                </td>


                                <td className="px-6 py-4">

                                    <span className="text-green-600 text-sm font-medium">
                                        Income
                                    </span>

                                </td>


                                <td className="px-6 py-4 font-semibold text-green-600">
                                    + Rs. 18,000
                                </td>


                                <td className="px-6 py-4 text-sm text-gray-500">
                                    Aug 07, 2026
                                </td>


                                <td className="px-6 py-4 text-right">

                                    <button className="text-blue-600 hover:underline text-sm">
                                        View
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>


                {/* ================= PAGINATION ================= */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">

                    <p className="text-sm text-gray-500">
                        Showing 1–5 of 8,542 transactions
                    </p>

                    <div className="flex items-center gap-2">

                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50">
                            Previous
                        </button>

                        <button className="px-3 py-1.5 bg-green-700 text-white rounded-lg text-sm">
                            1
                        </button>

                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                            2
                        </button>

                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
                            3
                        </button>

                        <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-50">
                            Next
                        </button>

                    </div>

                </div>

            </div>

        </div>
    </>
    )
}