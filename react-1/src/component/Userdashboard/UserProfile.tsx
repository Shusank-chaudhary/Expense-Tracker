export default function UserProfile() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                    <p className="text-sm font-medium text-indigo-600">Account</p>
                    <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">Your profile</h1>
                    <p className="mt-2 text-slate-500">Manage your personal information and account preferences.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-1">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100 text-3xl font-semibold text-indigo-700 ring-4 ring-indigo-50">
                                JD
                            </div>
                            <h2 className="mt-4 text-xl font-semibold text-slate-900">Jamie Doe</h2>
                            <p className="mt-1 text-sm text-slate-500">Personal account</p>
                            <span className="mt-4 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                Account active
                            </span>
                            <button className="mt-6 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Edit profile
                            </button>
                        </div>

                        <div className="mt-8 border-t border-slate-100 pt-6">
                            <h3 className="text-sm font-semibold text-slate-900">Quick overview</h3>
                            <dl className="mt-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-slate-500">Member since</dt>
                                    <dd className="text-sm font-medium text-slate-800">January 2024</dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-slate-500">Profile status</dt>
                                    <dd className="text-sm font-medium text-slate-800">Complete</dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    <div className="space-y-6 lg:col-span-2">
                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-900">Personal information</h2>
                                    <p className="mt-1 text-sm text-slate-500">Your basic details and contact information.</p>
                                </div>
                                <button aria-label="Edit personal information" className="rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    Edit
                                </button>
                            </div>

                            <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Full name</dt>
                                    <dd className="mt-1 text-sm font-medium text-slate-800">Jamie Doe</dd>
                                </div>
                                <div>
                                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Email address</dt>
                                    <dd className="mt-1 text-sm font-medium text-slate-800">jamie@example.com</dd>
                                </div>
                                <div>
                                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Phone number</dt>
                                    <dd className="mt-1 text-sm font-medium text-slate-800">+1 (555) 012-3456</dd>
                                </div>
                                <div>
                                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">Location</dt>
                                    <dd className="mt-1 text-sm font-medium text-slate-800">San Francisco, CA</dd>
                                </div>
                            </dl>
                        </section>

                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-900">Preferences</h2>
                                <p className="mt-1 text-sm text-slate-500">Customize how your account works for you.</p>
                            </div>
                            <div className="mt-6 divide-y divide-slate-100">
                                <div className="flex items-center justify-between gap-4 py-4 first:pt-0">
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">Email notifications</p>
                                        <p className="mt-1 text-sm text-slate-500">Receive updates about your account.</p>
                                    </div>
                                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Enabled</span>
                                </div>
                                <div className="flex items-center justify-between gap-4 py-4 last:pb-0">
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">Default currency</p>
                                        <p className="mt-1 text-sm text-slate-500">Used to display your expenses.</p>
                                    </div>
                                    <span className="text-sm font-medium text-slate-700">USD ($)</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}