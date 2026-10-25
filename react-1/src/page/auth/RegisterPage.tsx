import { RegisterForm } from "../../component/auth/RegisterForm";
import type { IAuthLayoutOutlet } from "../layout/AuthLayout.panel";
import { useOutletContext } from "react-router";
import { useEffect } from "react";

export default function LandingPage() {
   const outletContext = useOutletContext<IAuthLayoutOutlet>();

   useEffect(() => {
      outletContext.setSidePanel({
         title: "Expense Tracker",
         children: (<>
            <h1>Create An Account</h1>
            <h1 className="font-bold text-5xl mt-8">Take charge of your रुपैयाँ.</h1>
            <p className="text-md mt-5">Five-minute setup. Drop in last month's bank statement and you'll know exactly where every rupee went.</p>
            <p className="text-md mt-4">Take control of your finances effortlessly.</p>
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
         </>)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (<>
      <h1 className="text-black text-3xl ml-25 font-bold">Create Account</h1>
      <RegisterForm />
   </>
   )
}