export default function UserCategories() {
    const categories = [
        { name: "Food & Dining", icon: "🍽️", color: "bg-orange-100 text-orange-600", spent: "$420.50", budget: "$600.00", progress: 70 },
        { name: "Transportation", icon: "🚗", color: "bg-blue-100 text-blue-600", spent: "$185.00", budget: "$300.00", progress: 62 },
        { name: "Shopping", icon: "🛍️", color: "bg-purple-100 text-purple-600", spent: "$312.75", budget: "$400.00", progress: 78 },
        { name: "Entertainment", icon: "🎬", color: "bg-pink-100 text-pink-600", spent: "$96.00", budget: "$200.00", progress: 48 },
        { name: "Bills & Utilities", icon: "💡", color: "bg-amber-100 text-amber-600", spent: "$540.00", budget: "$700.00", progress: 77 },
        { name: "Health", icon: "💊", color: "bg-emerald-100 text-emerald-600", spent: "$75.00", budget: "$250.00", progress: 30 },
    ];

    return (
        <main className="min-h-screen bg-slate-50 p-5 sm:p-8">
            <div className="mx-auto max-w-6xl">
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="mb-1 text-sm font-medium text-indigo-600">YOUR FINANCES</p>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Categories</h1>
                        <p className="mt-2 text-slate-500">Organize your spending and keep your budget on track.</p>
                    </div>
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="text-lg leading-none">+</span> Add category
                    </button>
                </header>

                <section className="mb-7 grid gap-4 sm:grid-cols-3" aria-label="Category summary">
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Total categories</p>
                        <p className="mt-2 text-2xl font-bold text-slate-900">12</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Spent this month</p>
                        <p className="mt-2 text-2xl font-bold text-slate-900">$1,629.25</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-sm text-slate-500">Monthly budget</p>
                        <p className="mt-2 text-2xl font-bold text-slate-900">$2,450.00</p>
                    </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">Your categories</h2>
                            <p className="mt-1 text-sm text-slate-500">Monthly spending by category</p>
                        </div>
                        <label className="relative block w-full sm:w-64">
                            <span className="sr-only">Search categories</span>
                            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">⌕</span>
                            <input type="search" placeholder="Search categories..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100" />
                        </label>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {categories.map((category) => (
                            <article key={category.name} className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:shadow-sm">
                                <div className="mb-5 flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${category.color}`} aria-hidden="true">{category.icon}</span>
                                        <div>
                                            <h3 className="font-semibold text-slate-800">{category.name}</h3>
                                            <p className="mt-0.5 text-xs text-slate-500">Monthly budget</p>
                                        </div>
                                    </div>
                                    <button type="button" aria-label={`More options for ${category.name}`} className="rounded-lg px-2 py-1 text-lg leading-none text-slate-400 hover:bg-slate-100 hover:text-slate-700">···</button>
                                </div>
                                <div className="mb-2 flex items-baseline justify-between">
                                    <p className="text-lg font-bold text-slate-900">{category.spent}</p>
                                    <p className="text-sm text-slate-500">of {category.budget}</p>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-label={`${category.name} budget used`} aria-valuenow={category.progress} aria-valuemin={0} aria-valuemax={100}>
                                    <div className="h-full rounded-full bg-indigo-500" style={{ width: `${category.progress}%` }} />
                                </div>
                                <p className="mt-2 text-right text-xs font-medium text-slate-500">{category.progress}% used</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}