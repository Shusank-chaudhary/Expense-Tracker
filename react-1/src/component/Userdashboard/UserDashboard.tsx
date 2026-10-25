const transactions = [
    { name: "Whole Foods Market", category: "Groceries", date: "Today, 10:42 AM", amount: "-$84.26", icon: "🛒", color: "bg-emerald-100 text-emerald-700" },
    { name: "Monthly rent", category: "Housing", date: "Yesterday", amount: "-$1,450.00", icon: "🏠", color: "bg-violet-100 text-violet-700" },
    { name: "Spotify Premium", category: "Subscriptions", date: "Jun 12, 2025", amount: "-$10.99", icon: "♫", color: "bg-rose-100 text-rose-700" },
    { name: "Salary · Acme Inc.", category: "Income", date: "Jun 10, 2025", amount: "+$3,850.00", icon: "↗", color: "bg-sky-100 text-sky-700" },
];

const spending = [
    { category: "Housing", amount: "$1,450", width: "w-[72%]", color: "bg-violet-500" },
    { category: "Food & dining", amount: "$620", width: "w-[48%]", color: "bg-emerald-500" },
    { category: "Transportation", amount: "$340", width: "w-[31%]", color: "bg-amber-500" },
    { category: "Shopping", amount: "$215", width: "w-[20%]", color: "bg-sky-500" },
];

export default function UserDashboard() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto flex min-h-screen max-w-7xl">
                <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white px-6 py-8 md:block">
                    <a href="#dashboard" className="flex items-center gap-3 text-xl font-bold tracking-tight">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-lg text-white">$</span>
                        Pennywise
                    </a>
                    <p className="mb-3 mt-10 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Workspace</p>
                    <nav className="space-y-1" aria-label="Main navigation">
                        <a href="#dashboard" className="flex items-center gap-3 rounded-xl bg-indigo-50 px-3 py-2.5 text-sm font-semibold text-indigo-700"><span>▦</span> Overview</a>
                        <a href="#transactions" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"><span>⇄</span> Transactions</a>
                        <a href="#budgets" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"><span>◷</span> Budgets</a>
                        <a href="#reports" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900"><span>▤</span> Reports</a>
                    </nav>
                    <div className="mt-10 rounded-2xl bg-indigo-600 p-5 text-white">
                        <p className="text-sm font-semibold">Your money, in focus</p>
                        <p className="mt-2 text-xs leading-5 text-indigo-100">Small steps today add up to big goals tomorrow.</p>
                        <a href="#budgets" className="mt-4 inline-block text-xs font-semibold underline underline-offset-4">Explore your budget</a>
                    </div>
                    <div className="mt-auto flex items-center gap-3 pt-10">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-100 font-semibold text-amber-800">JD</div>
                        <div><p className="text-sm font-semibold">Jordan Davis</p><p className="text-xs text-slate-500">Personal account</p></div>
                    </div>
                </aside>

                <main id="dashboard" className="min-w-0 flex-1 px-5 py-7 sm:px-8 lg:px-10">
                    <header className="mb-8 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-sm text-slate-500">Monday, June 16, 2025</p>
                            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">Good morning, Jordan <span aria-hidden="true">👋</span></h1>
                        </div>
                        <button type="button" aria-label="Notifications" className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-lg text-slate-600 shadow-sm hover:bg-slate-50">
                            ♧<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
                        </button>
                    </header>

                    <section aria-label="Financial summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <article className="rounded-2xl bg-indigo-600 p-5 text-white shadow-sm sm:col-span-2">
                            <div className="flex items-start justify-between">
                                <div><p className="text-sm font-medium text-indigo-100">Total balance</p><p className="mt-3 text-3xl font-bold tracking-tight">$12,480.50</p></div>
                                <span className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold">All accounts</span>
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-sm"><span className="rounded-full bg-emerald-400/20 px-2 py-1 text-xs font-semibold text-emerald-100">↑ 8.2%</span><span className="text-indigo-100">compared to last month</span></div>
                        </article>
                        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500">Income this month</p><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-lg text-emerald-600">↙</span></div>
                            <p className="mt-4 text-2xl font-bold">$5,240.00</p><p className="mt-2 text-xs text-slate-500">Across 3 deposits</p>
                        </article>
                        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500">Spent this month</p><span className="grid h-9 w-9 place-items-center rounded-xl bg-rose-50 text-lg text-rose-600">↗</span></div>
                            <p className="mt-4 text-2xl font-bold">$2,625.25</p><p className="mt-2 text-xs text-slate-500">42% of your monthly budget</p>
                        </article>
                    </section>

                    <section className="mt-6 grid gap-6 lg:grid-cols-5">
                        <article id="budgets" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2">
                            <div className="flex items-center justify-between"><div><h2 className="font-bold">Spending by category</h2><p className="mt-1 text-sm text-slate-500">Your top expenses this month</p></div><button type="button" className="rounded-lg px-2 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-50">This month⌄</button></div>
                            <div className="mt-6 space-y-5">
                                {spending.map((item) => (
                                    <div key={item.category}>
                                        <div className="mb-2 flex justify-between text-sm"><span className="font-medium text-slate-700">{item.category}</span><span className="font-semibold">{item.amount}</span></div>
                                        <div className="h-2 rounded-full bg-slate-100"><div className={`h-2 rounded-full ${item.width} ${item.color}`} /></div>
                                    </div>
                                ))}
                            </div>
                            <a href="#reports" className="mt-6 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700">View spending report <span className="ml-1">→</span></a>
                        </article>

                        <article id="transactions" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:col-span-3">
                            <div className="flex items-center justify-between"><div><h2 className="font-bold">Recent transactions</h2><p className="mt-1 text-sm text-slate-500">Your latest account activity</p></div><a href="#transactions" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">See all</a></div>
                            <div className="mt-4 divide-y divide-slate-100">
                                {transactions.map((transaction) => (
                                    <div key={transaction.name} className="flex items-center gap-3 py-4">
                                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg font-semibold ${transaction.color}`}>{transaction.icon}</span>
                                        <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{transaction.name}</p><p className="mt-1 text-xs text-slate-500">{transaction.category} · {transaction.date}</p></div>
                                        <p className={`shrink-0 text-sm font-bold ${transaction.amount.startsWith("+") ? "text-emerald-600" : "text-slate-800"}`}>{transaction.amount}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </section>
                    <footer className="mt-8 text-center text-xs text-slate-400">Your finances at a glance · Pennywise</footer>
                </main>
            </div>
        </div>
    );
}