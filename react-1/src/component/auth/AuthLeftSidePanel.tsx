import logo from "../../assets/image/logo1.png";
import { Heading1, SubHeading } from "../typography/Heading";
import type { ISidePanel } from "../../page/layout/AuthLayout.panel";

export const AuthLeftSidepanel = ({title, children}: Readonly<ISidePanel>) => {
    return (<>
        <div className="w-1/2 bg-green-700 flex flex-col p-8">
            <div className="text-white text-2xl gap-4 flex ">
                <img src={logo} alt="Logo" className="h-14 w-14 rounded-full bg-white" />
                {/* <p>Expense Tracker</p> */}
                <Heading1 pageTitle={title} className="mt-2" />
            </div>
            <SubHeading className="mt-24 text-amber-50  items-center ">
                {children}
            </SubHeading>
        </div>
    </>
    )
}