export default function UserTransaction() {
    const transactions = [
        { name: "Whole Foods Market", category: "Groceries", date: "Today, 10:42 AM", amount: "−$86.40", initials: "W", color: "bg-emerald-100 text-emerald-700", status: "Completed" },
        { name: "Uber Technologies", category: "Transport", date: "Today, 8:15 AM", amount: "−$24.50", initials: "U", color: "bg-slate-100 text-slate-700", status: "Completed" },
        { name: "Salary deposit", category: "Income", date: "May 22, 2024", amount: "+$4,250.00", initials: "S", color: "bg-violet-100 text-violet-700", status: "Completed", income: true },
        { name: "Netflix Subscription", category: "Entertainment", date: "May 21, 2024", amount: "−$15.99", initials: "N", color: "bg-red-100 text-red-700", status: "Pending" },
        { name: "Blue Bottle Coffee", category: "Food & drink", date: "May 20, 2024", amount: "−$8.75", initials: "B", color: "bg-amber-100 text-amber-700", status: "Completed" },
    ];

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <header className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="mb-1 text-sm font-medium text-slate-500">Overview / Activity</p>
                        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
                        <p className="mt-2 text-sm text-slate-500">Keep track of where your money goes.</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span aria-hidden="true" className="text-lg leading-none">+</span> Add transaction
                    </button>
                </header>

                <section className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Transaction summary">
                    {[
                        { label: "Total balance", value: "$12,840.50", change: "+8.2%", tone: "text-emerald-700 bg-emerald-50" },
                        { label: "Income this month", value: "$5,240.00", change: "+4.5%", tone: "text-emerald-700 bg-emerald-50" },
                        { label: "Expenses this month", value: "$2,186.32", change: "+2.1%", tone: "text-rose-700 bg-rose-50" },
                    ].map((summary) => (
                        <article key={summary.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <p className="text-sm font-medium text-slate-500">{summary.label}</p>
                            <div className="mt-3 flex items-end justify-between">
                                <p className="text-2xl font-bold tracking-tight">{summary.value}</p>
                                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${summary.tone}`}>{summary.change}</span>
                            </div>
                            <p className="mt-2 text-xs text-slate-400">Compared to last month</p>
                        </article>
                    ))}
                </section>

                <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" aria-labelledby="transactions-heading">
                    <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 id="transactions-heading" className="text-lg font-semibold">All transactions</h2>
                            <p className="mt-1 text-sm text-slate-500">A complete history of your activity</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <label className="relative">
                                <span className="sr-only">Search transactions</span>
                                <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
                                <input type="search" placeholder="Search transactions" className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 sm:w-56" />
                            </label>
                            <select aria-label="Filter transactions by date" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100">
                                <option>Last 30 days</option>
                                <option>This month</option>
                                <option>Last 3 months</option>
                                <option>This year</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px] text-left">
                            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                <tr>
                                    <th scope="col" className="px-5 py-3">Transaction</th>
                                    <th scope="col" className="px-5 py-3">Category</th>
                                    <th scope="col" className="px-5 py-3">Date</th>
                                    <th scope="col" className="px-5 py-3">Status</th>
                                    <th scope="col" className="px-5 py-3 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {transactions.map((transaction) => (
                                    <tr key={`${transaction.name}-${transaction.date}`} className="transition hover:bg-slate-50/70">
                                        <td className="whitespace-nowrap px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${transaction.color}`}>{transaction.initials}</span>
                                                <span className="font-medium text-slate-800">{transaction.name}</span>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">{transaction.category}</td>
                                        <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-500">{transaction.date}</td>
                                        <td className="whitespace-nowrap px-5 py-4">
                                            <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${transaction.status === "Pending" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>{transaction.status}</span>
                                        </td>
                                        <td className={`whitespace-nowrap px-5 py-4 text-right font-semibold ${transaction.income ? "text-emerald-600" : "text-slate-800"}`}>{transaction.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <footer className="flex flex-col items-center justify-between gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row">
                        <p className="text-sm text-slate-500">Showing <span className="font-medium text-slate-700">1–5</span> of <span className="font-medium text-slate-700">24</span> transactions</p>
                        <div className="flex items-center gap-2">
                            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50">Previous</button>
                            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50">Next</button>
                        </div>
                    </footer>
                </section>
            </div>
        </main>
    );
}