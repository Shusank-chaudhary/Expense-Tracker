import { useOutletContext } from "react-router";
import { LoginForm } from "../../component/auth/LoginForm";
import { type IAuthLayoutOutlet } from "../layout/AuthLayout.panel";
import { useEffect } from "react";

export default function LoginPage() {
    const outletContext = useOutletContext<IAuthLayoutOutlet>();

    useEffect(() => {
        outletContext.setSidePanel({
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
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
        <h1 className="text-black text-3xl ml-25 font-bold">Sign In</h1>
        <span className="ml-25 text-black text-sm mt-4">Welcome back! Let's see where you left off.</span>
        <LoginForm />

    </>
    )
}