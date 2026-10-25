export default function Setting() {
    return (<>
        <div className="min-h-screen bg-gray-100 p-6">

            {/* Header */}
            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-800">
                    Settings
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Manage your expense tracker system settings.
                </p>

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                {/* Settings Navigation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 h-fit">

                    <button className="w-full text-left px-4 py-3 rounded-lg bg-green-100 text-green-700 font-medium">
                        General
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-600">
                        System
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-600">
                        Security
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-600">
                        Notifications
                    </button>

                    <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-600">
                        Backup
                    </button>

                </div>


                {/* Settings Form */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">

                    <h2 className="text-lg font-semibold text-gray-800">
                        General Settings
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 mb-6">
                        Basic information about your expense tracker.
                    </p>


                    {/* Application Name */}
                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Application Name
                        </label>

                        <input
                            type="text"
                            value="Expense Tracker"
                            readOnly
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none"
                        />

                    </div>


                    {/* Currency */}
                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Default Currency
                        </label>

                        <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5">
                            <option>Nepalese Rupee (NPR)</option>
                            <option>US Dollar (USD)</option>
                            <option>Indian Rupee (INR)</option>
                        </select>

                    </div>


                    {/* Timezone */}
                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timezone
                        </label>

                        <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5">
                            <option>Asia/Kathmandu</option>
                            <option>Asia/Kolkata</option>
                            <option>UTC</option>
                        </select>

                    </div>


                    {/* Registration */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-5">

                        <div>

                            <h3 className="font-medium text-gray-800">
                                Allow New Registrations
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Allow new users to create accounts.
                            </p>

                        </div>

                        <div className="w-11 h-6 bg-green-600 rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow" />
                        </div>

                    </div>


                    {/* Email Notifications */}
                    <div className="flex items-center justify-between border-t border-gray-100 mt-5 pt-5">

                        <div>

                            <h3 className="font-medium text-gray-800">
                                Email Notifications
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                                Send system notifications to administrators.
                            </p>

                        </div>

                        <div className="w-11 h-6 bg-gray-300 rounded-full relative">
                            <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow" />
                        </div>

                    </div>


                    {/* Save */}
                    <div className="border-t border-gray-100 mt-6 pt-5 flex justify-end">

                        <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-lg">
                            Save Changes
                        </button>

                    </div>

                </div>

            </div>

        </div>
    </>
    )
}