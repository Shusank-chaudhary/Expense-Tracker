export default function AdminDashboard() {
    return (<>
        <main className="flex-1 p-8 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* KPI Widget 1 */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-green-500 text-sm font-semibold">Total Revenue</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">$45,231</p>
                    <p className="text-green-600 text-sm mt-2">+12% from last month</p>
                </div>

                {/* KPI Widget 2 */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-green-500 text-sm font-semibold">Total Users</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">1,234</p>
                    <p className="text-green-600 text-sm mt-2">+8% from last month</p>
                </div>

                {/* KPI Widget 3 */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-green-500 text-sm font-semibold">Active Orders</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">562</p>
                    <p className="text-red-600 text-sm mt-2">-3% from last month</p>
                </div>

                {/* KPI Widget 4 */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-green-500 text-sm font-semibold">Conversion Rate</h3>
                    <p className="text-3xl font-bold text-gray-800 mt-2">3.42%</p>
                    <p className="text-green-600 text-sm mt-2">+0.5% from last month</p>
                </div>
            </div>
        </main>
    </>
    )
}