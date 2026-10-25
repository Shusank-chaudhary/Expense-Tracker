export default function ErrorPage() {
    return (<>
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-3xl font-semibold text-slate-300 mb-2">Page Not Found</p>
                <p className="text-lg text-slate-400 mb-8">Sorry, the page you're looking for doesn't exist.</p>
                <a href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition">
                    Go Home
                </a>
            </div>
        </div>
    </>
    )
}