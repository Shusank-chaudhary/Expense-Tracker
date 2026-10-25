import { Outlet } from "react-router"
import { AuthLeftSidepanel } from "../../component/auth/AuthLeftSidePanel"
import { useState } from "react"
import { type ISidePanel } from "./AuthLayout.panel"

export default function AuthLayout() {
    const [sidePanel, setSidePanel] = useState<ISidePanel>({
        title: "Expense Tracker",
        children:(<>
            <h1>Welcome Back!</h1>
            <p className="text-5xl font-bold mt-8">Pick up where you left your money.</p>
            <p className="text-md mt-5">Every account, budget, and goal — exactly where you saved it. Phone, web, in sync.</p>
            <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Free during beta — no card required</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Statement import — CSV, PDF, Excel</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Phone & web, in sync</span>
                </li>
            </ul>
            <p className="text-xs mt-6">Built for Nepal · Free during beta · रू same as previous register page</p>
        </>)
    })
    return (<>
        <section className="h-screen w-full flex">
            <AuthLeftSidepanel title={sidePanel.title} children={sidePanel.children} />
 
            <div className="w-1/2 bg-amber-50 p-10  flex flex-col">
                <Outlet context ={{
                    sidePanel,
                    setSidePanel
                }} />
            </div>
        </section>
    </>
    )
}