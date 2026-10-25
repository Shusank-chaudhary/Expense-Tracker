import type { ReactNode } from "react";

export interface IHeadingProps {
    pageTitle: string;
    className?: string;
}

export interface ISubHeadingProps {
    children: ReactNode;
    className?: string;
}

export  const Heading1 = ({pageTitle, className}:Readonly<IHeadingProps>) => {
    return (<>
        <h1 className={` text-2xl ${className || ''}`}>
            {pageTitle}
        </h1>
    </>
    )
}

export const SubHeading = ({children, className=''}:Readonly<ISubHeadingProps>) => {
    return (<>
       <div className={` ${className}`}>
            {children}
        </div>
    </>
    )
}