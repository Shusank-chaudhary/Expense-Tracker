import { NavLink } from "react-router"

export interface IDashboardIcon{
leftIcon:React.ReactNode,
label:string,
rightIcon:React.ReactNode,
to:string,
className?:string

}

export const DashboardIcon = ({leftIcon,className,label,rightIcon, to}:Readonly<IDashboardIcon>) => {
    return(<>
      <NavLink to={to} 
      className={`block px-4 py-2 rounded bg-green-800 hover:bg-green-600 flex items-center gap-3 ${className}`}> 
      <div className="size-4">{leftIcon}</div>
      <p>{label}</p>
      <div>{rightIcon}</div>
      </NavLink>
    </>
    )
}