export default function Categories() {
    return (<>
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Categories
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage income and expense categories.
                    </p>
                </div>

                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-lg">
                    + Add Category
                </button>

            </div>


            {/* Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">
                        Total Categories
                    </p>

                    <h2 className="text-2xl font-bold text-gray-800 mt-2">
                        18
                    </h2>
                </div>


                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">
                        Expense Categories
                    </p>

                    <h2 className="text-2xl font-bold text-red-600 mt-2">
                        13
                    </h2>
                </div>


                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500">
                        Income Categories
                    </p>

                    <h2 className="text-2xl font-bold text-green-700 mt-2">
                        5
                    </h2>
                </div>

            </div>


            {/* Categories Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="px-6 py-4 border-b border-gray-100">

                    <h2 className="text-lg font-semibold text-gray-800">
                        All Categories
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage categories used by your users.
                    </p>

                </div>


                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-gray-50 border-b border-gray-200">

                            <tr>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Category
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Type
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Transactions
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                                    Status
                                </th>

                                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {/* Food */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                                            🍔
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Food
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                Food and restaurants
                                            </p>
                                        </div>

                                    </div>

                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs">
                                        Expense
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-600">
                                    2,845
                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                        Active
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-right">

                                    <button className="text-green-600 hover:underline mr-4 text-sm">
                                        Edit
                                    </button>

                                    <button className="text-red-600 hover:underline text-sm">
                                        Delete
                                    </button>

                                </td>

                            </tr>


                            {/* Transport */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            🚌
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Transport
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                Bus, taxi and fuel
                                            </p>
                                        </div>

                                    </div>

                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs">
                                        Expense
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-600">
                                    1,524
                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                        Active
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-right">

                                    <button className="text-green-600 hover:underline mr-4 text-sm">
                                        Edit
                                    </button>

                                    <button className="text-red-600 hover:underline text-sm">
                                        Delete
                                    </button>

                                </td>

                            </tr>


                            {/* Salary */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                            💰
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Salary
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                Monthly salary
                                            </p>
                                        </div>

                                    </div>

                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                        Income
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-600">
                                    856
                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                        Active
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-right">

                                    <button className="text-green-600 hover:underline mr-4 text-sm">
                                        Edit
                                    </button>

                                    <button className="text-red-600 hover:underline text-sm">
                                        Delete
                                    </button>

                                </td>

                            </tr>


                            {/* Shopping */}
                            <tr className="hover:bg-gray-50">

                                <td className="px-6 py-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                                            🛍️
                                        </div>

                                        <div>
                                            <p className="font-medium text-gray-800">
                                                Shopping
                                            </p>

                                            <p className="text-xs text-gray-500">
                                                Clothes and other purchases
                                            </p>
                                        </div>

                                    </div>

                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs">
                                        Expense
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-sm text-gray-600">
                                    1,248
                                </td>

                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                        Active
                                    </span>
                                </td>

                                <td className="px-6 py-4 text-right">

                                    <button className="text-green-600 hover:underline mr-4 text-sm">
                                        Edit
                                    </button>

                                    <button className="text-red-600 hover:underline text-sm">
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    </>
    )
}