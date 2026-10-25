export default function UserReport() {
    const spending = [
        { month: "Jan", amount: 62 },
        { month: "Feb", amount: 78 },
        { month: "Mar", amount: 54 },
        { month: "Apr", amount: 88 },
        { month: "May", amount: 70 },
        { month: "Jun", amount: 96 },
        { month: "Jul", amount: 67 },
    ];

    const categories = [
        { name: "Housing", detail: "Rent & utilities", amount: "$1,240.00", percent: 42, color: "bg-indigo-500" },
        { name: "Food & dining", detail: "Groceries & restaurants", amount: "$680.50", percent: 28, color: "bg-emerald-500" },
        { name: "Transportation", detail: "Fuel & transit", amount: "$325.00", percent: 17, color: "bg-amber-400" },
        { name: "Other", detail: "Shopping & more", amount: "$195.25", percent: 13, color: "bg-rose-400" },
    ];

    const transactions = [
        { name: "Whole Foods Market", category: "Groceries", date: "Today, 10:42 AM", amount: "-$84.32", icon: "W", color: "bg-emerald-100 text-emerald-700" },
        { name: "City Power & Light", category: "Utilities", date: "Yesterday", amount: "-$126.80", icon: "⚡", color: "bg-amber-100 text-amber-700" },
        { name: "Monthly paycheck", category: "Income", date: "Jun 28, 2025", amount: "+$3,850.00", icon: "$", color: "bg-indigo-100 text-indigo-700" },
    ];

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-7xl space-y-8">
                <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Your finances</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Reports</h1>
                        <p className="mt-2 text-slate-500">A clear picture of where your money goes.</p>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold shadow-sm transition hover:border-indigo-200 hover:text-indigo-700">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /></svg>
                        Last 7 months
                        <span aria-hidden="true">⌄</span>
                    </button>
                </header>

                <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Financial summary">
                    <article className="rounded-2xl bg-indigo-600 p-5 text-white shadow-lg shadow-indigo-200/60">
                        <div className="flex items-center justify-between text-indigo-100"><span className="text-sm font-medium">Total balance</span><span className="rounded-lg bg-white/15 p-2">◈</span></div>
                        <p className="mt-5 text-3xl font-bold">$8,420.50</p>
                        <p className="mt-2 text-sm text-indigo-100">Across all accounts</p>
                    </article>
                    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between text-slate-500"><span className="text-sm font-medium">Income this month</span><span className="rounded-lg bg-emerald-50 p-2 text-emerald-600">↗</span></div>
                        <p className="mt-5 text-3xl font-bold">$4,850.00</p>
                        <p className="mt-2 text-sm font-medium text-emerald-600">↑ 8.2% <span className="font-normal text-slate-400">vs last month</span></p>
                    </article>
                    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between text-slate-500"><span className="text-sm font-medium">Expenses this month</span><span className="rounded-lg bg-rose-50 p-2 text-rose-500">↘</span></div>
                        <p className="mt-5 text-3xl font-bold">$2,440.75</p>
                        <p className="mt-2 text-sm font-medium text-emerald-600">↓ 3.1% <span className="font-normal text-slate-400">vs last month</span></p>
                    </article>
                    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between text-slate-500"><span className="text-sm font-medium">Savings rate</span><span className="rounded-lg bg-violet-50 p-2 text-violet-600">✳</span></div>
                        <p className="mt-5 text-3xl font-bold">49.7%</p>
                        <p className="mt-2 text-sm text-slate-400">Great work—keep it up!</p>
                    </article>
                </section>

                <section className="grid gap-6 xl:grid-cols-3">
                    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div><h2 className="text-lg font-bold">Spending overview</h2><p className="mt-1 text-sm text-slate-500">Your monthly expenses over time</p></div>
                            <div className="flex items-center gap-2 text-sm text-slate-500"><span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />Expenses</div>
                        </div>
                        <div className="mt-8 flex h-56 items-end justify-between gap-3 border-b border-slate-100 px-1 sm:gap-6">
                            {spending.map((item) => (
                                <div key={item.month} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                                    <div className="group relative flex w-full items-end justify-center" style={{ height: `${item.amount}%` }}>
                                        <div className={`w-full max-w-12 rounded-t-lg transition-colors ${item.month === "Jun" ? "bg-indigo-600" : "bg-indigo-100 group-hover:bg-indigo-300"}`} style={{ height: "100%" }} title={`${item.month}: ${item.amount}%`} />
                                    </div>
                                    <span className="pb-3 text-xs font-medium text-slate-400">{item.month}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 flex items-center justify-between text-sm"><span className="text-slate-500">Average monthly spending</span><span className="font-semibold">$2,186.40</span></div>
                    </article>

                    <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div><h2 className="text-lg font-bold">Spending by category</h2><p className="mt-1 text-sm text-slate-500">This month</p></div>
                        <div className="mt-6 space-y-5">
                            {categories.map((category) => (
                                <div key={category.name}>
                                    <div className="mb-2 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-2.5"><span className={`h-2.5 w-2.5 rounded-full ${category.color}`} /><div><p className="text-sm font-semibold">{category.name}</p><p className="text-xs text-slate-400">{category.detail}</p></div></div>
                                        <span className="whitespace-nowrap text-sm font-semibold">{category.amount}</span>
                                    </div>
                                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${category.color}`} style={{ width: `${category.percent}%` }} /></div>
                                </div>
                            ))}
                        </div>
                        <button className="mt-6 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">View all categories</button>
                    </article>
                </section>

                <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div><h2 className="text-lg font-bold">Recent activity</h2><p className="mt-1 text-sm text-slate-500">Your latest transactions</p></div>
                        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">See all transactions →</button>
                    </div>
                    <div className="mt-5 divide-y divide-slate-100">
                        {transactions.map((transaction) => (
                            <div key={transaction.name} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                                <div className="flex min-w-0 items-center gap-3"><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${transaction.color}`}>{transaction.icon}</span><div className="min-w-0"><p className="truncate text-sm font-semibold">{transaction.name}</p><p className="mt-0.5 text-xs text-slate-400">{transaction.category} · {transaction.date}</p></div></div>
                                <span className={`whitespace-nowrap text-sm font-bold ${transaction.amount.startsWith("+") ? "text-emerald-600" : "text-slate-800"}`}>{transaction.amount}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}