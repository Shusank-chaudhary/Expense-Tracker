export default function User() {
  return (<>
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Users
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage registered users of your expense tracker.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2.5 rounded-lg">
          + Add User
        </button>
      </div>


      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Total Users
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            1,245
          </h2>

          <p className="text-sm text-green-600 mt-2">
            +8.2% this month
          </p>
        </div>


        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Active Users
          </p>

          <h2 className="text-2xl font-bold text-green-700 mt-2">
            1,120
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            89.9% of total users
          </p>
        </div>


        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm text-gray-500">
            Blocked Users
          </p>

          <h2 className="text-2xl font-bold text-red-600 mt-2">
            125
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            10.1% of total users
          </p>
        </div>

      </div>


      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">

        <div className="flex flex-col md:flex-row gap-4 justify-between">

          {/* Search */}
          <div className="relative w-full md:w-96">

            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search users..."
              className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600"
            />

          </div>


          {/* Filters */}
          <div className="flex gap-3">

            <select className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600">
              <option>All Users</option>
              <option>Active</option>
              <option>Blocked</option>
            </select>

            <select className="border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-600">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
            </select>

          </div>

        </div>

      </div>


      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              All Users
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              1,245 registered users
            </p>
          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-left">

            {/* Table Header */}
            <thead className="bg-gray-50 border-b border-gray-200">

              <tr>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  User
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Joined
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Expenses
                </th>

                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                  Actions
                </th>

              </tr>

            </thead>


            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">


              {/* User 1 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold">
                      RS
                    </div>

                    <div>

                      <p className="font-medium text-gray-800">
                        Ram Sharma
                      </p>

                      <p className="text-sm text-gray-500">
                        ram@gmail.com
                      </p>

                    </div>

                  </div>

                </td>


                <td className="px-6 py-4">

                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Active
                  </span>

                </td>


                <td className="px-6 py-4 text-sm text-gray-600">
                  Aug 08, 2026
                </td>


                <td className="px-6 py-4 font-medium text-gray-800">
                  Rs. 12,500
                </td>


                <td className="px-6 py-4">

                  <div className="flex justify-end gap-2">

                    <button className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                      View
                    </button>

                    <button className="px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded-lg">
                      Edit
                    </button>

                    <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                      Delete
                    </button>

                  </div>

                </td>

              </tr>


              {/* User 2 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                      HT
                    </div>

                    <div>

                      <p className="font-medium text-gray-800">
                        Hari Thapa
                      </p>

                      <p className="text-sm text-gray-500">
                        hari@gmail.com
                      </p>

                    </div>

                  </div>

                </td>


                <td className="px-6 py-4">

                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Active
                  </span>

                </td>


                <td className="px-6 py-4 text-sm text-gray-600">
                  Aug 07, 2026
                </td>


                <td className="px-6 py-4 font-medium text-gray-800">
                  Rs. 8,200
                </td>


                <td className="px-6 py-4">

                  <div className="flex justify-end gap-2">

                    <button className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                      View
                    </button>

                    <button className="px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded-lg">
                      Edit
                    </button>

                    <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                      Delete
                    </button>

                  </div>

                </td>

              </tr>


              {/* User 3 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-semibold">
                      SR
                    </div>

                    <div>

                      <p className="font-medium text-gray-800">
                        Sita Rai
                      </p>

                      <p className="text-sm text-gray-500">
                        sita@gmail.com
                      </p>

                    </div>

                  </div>

                </td>


                <td className="px-6 py-4">

                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600">
                    Blocked
                  </span>

                </td>


                <td className="px-6 py-4 text-sm text-gray-600">
                  Aug 05, 2026
                </td>


                <td className="px-6 py-4 font-medium text-gray-800">
                  Rs. 15,300
                </td>


                <td className="px-6 py-4">

                  <div className="flex justify-end gap-2">

                    <button className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                      View
                    </button>

                    <button className="px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded-lg">
                      Edit
                    </button>

                    <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                      Delete
                    </button>

                  </div>

                </td>

              </tr>


              {/* User 4 */}
              <tr className="hover:bg-gray-50">

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-semibold">
                      AG
                    </div>

                    <div>

                      <p className="font-medium text-gray-800">
                        Anil Gurung
                      </p>

                      <p className="text-sm text-gray-500">
                        anil@gmail.com
                      </p>

                    </div>

                  </div>

                </td>


                <td className="px-6 py-4">

                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    Active
                  </span>

                </td>


                <td className="px-6 py-4 text-sm text-gray-600">
                  Aug 03, 2026
                </td>


                <td className="px-6 py-4 font-medium text-gray-800">
                  Rs. 6,700
                </td>


                <td className="px-6 py-4">

                  <div className="flex justify-end gap-2">

                    <button className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                      View
                    </button>

                    <button className="px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 rounded-lg">
                      Edit
                    </button>

                    <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>


        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">

          <p className="text-sm text-gray-500">
            Showing 1–4 of 1,245 users
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
  </>)
}