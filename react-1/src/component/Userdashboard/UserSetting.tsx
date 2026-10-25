export default function UserSetting() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <header className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Account</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight">User settings</h1>
                    <p className="mt-2 text-slate-500">Manage your profile and expense tracking preferences.</p>
                </header>

                <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                    <nav aria-label="Settings navigation" className="h-fit rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                        <a href="#profile" className="block rounded-lg bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700">Profile</a>
                        <a href="#preferences" className="mt-1 block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">Preferences</a>
                        <a href="#notifications" className="mt-1 block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">Notifications</a>
                    </nav>

                    <div className="space-y-6">
                        <section id="profile" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div className="border-b border-slate-100 pb-5">
                                <h2 className="text-lg font-semibold">Personal information</h2>
                                <p className="mt-1 text-sm text-slate-500">Update the information associated with your account.</p>
                            </div>
                            <div className="flex items-center gap-4 py-6">
                                <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-700">JD</div>
                                <div>
                                    <p className="text-sm font-semibold">Profile photo</p>
                                    <button type="button" className="mt-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">Change photo</button>
                                </div>
                            </div>
                            <form className="grid gap-5 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
                                <label className="text-sm font-medium text-slate-700">
                                    Full name
                                    <input type="text" defaultValue="Jamie Doe" className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Email address
                                    <input type="email" defaultValue="jamie@example.com" className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
                                </label>
                                <label className="text-sm font-medium text-slate-700 sm:col-span-2">
                                    Monthly budget
                                    <div className="mt-2 flex rounded-lg border border-slate-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                                        <span className="border-r border-slate-200 px-3 py-2.5 text-slate-500">$</span>
                                        <input type="number" min="0" defaultValue="2500" className="w-full rounded-r-lg px-3 py-2.5 font-normal text-slate-900 outline-none" />
                                    </div>
                                </label>
                                <div className="flex justify-end border-t border-slate-100 pt-5 sm:col-span-2">
                                    <button type="submit" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save changes</button>
                                </div>
                            </form>
                        </section>

                        <section id="preferences" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <h2 className="text-lg font-semibold">Preferences</h2>
                            <p className="mt-1 text-sm text-slate-500">Customize how your expenses are displayed.</p>
                            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                <label className="text-sm font-medium text-slate-700">
                                    Currency
                                    <select defaultValue="USD" className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                                        <option value="USD">USD — US Dollar ($)</option>
                                        <option value="EUR">EUR — Euro (€)</option>
                                        <option value="GBP">GBP — British Pound (£)</option>
                                        <option value="INR">INR — Indian Rupee (₹)</option>
                                    </select>
                                </label>
                                <label className="text-sm font-medium text-slate-700">
                                    Date format
                                    <select defaultValue="MM/DD/YYYY" className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
                                        <option>MM/DD/YYYY</option>
                                        <option>DD/MM/YYYY</option>
                                        <option>YYYY-MM-DD</option>
                                    </select>
                                </label>
                            </div>
                        </section>

                        <section id="notifications" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <h2 className="text-lg font-semibold">Notifications</h2>
                            <p className="mt-1 text-sm text-slate-500">Choose which account updates you receive.</p>
                            <div className="mt-4 divide-y divide-slate-100">
                                <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
                                    <span><span className="block text-sm font-medium">Budget alerts</span><span className="mt-1 block text-sm text-slate-500">Know when your spending is close to your monthly budget.</span></span>
                                    <input type="checkbox" defaultChecked className="h-5 w-5 shrink-0 accent-indigo-600" />
                                </label>
                                <label className="flex cursor-pointer items-center justify-between gap-4 py-4">
                                    <span><span className="block text-sm font-medium">Weekly summary</span><span className="mt-1 block text-sm text-slate-500">Get a weekly overview of your spending.</span></span>
                                    <input type="checkbox" defaultChecked className="h-5 w-5 shrink-0 accent-indigo-600" />
                                </label>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}