import { type ReactNode } from "react";
import { useController } from "react-hook-form";

export interface IFormInputProps {
    type: string;
    name: string;
    handler: any;
    errMsg?: string;
}

export interface IFormLabelProps {
    htmlFor: string;
    children: ReactNode;
    errMsg?: string;
}

export const FormInput = ({ type, name, handler,errMsg }: Readonly<IFormInputProps>) => {
    const inputClassName = "border border-gray-300 p-2 w-3/4 rounded-lg";

    const {field} = useController({
        name: name,
        control: handler,
    })
    return (<>
        <input
            {...field}
            type={type}
            id={name}
            className={inputClassName}
        />
        <span className="text-red-500 text-sm">{errMsg}</span>
    </>
    )
}

export const FormLabel = ({htmlFor, children, errMsg }: Readonly<IFormLabelProps>) => {
    const labelClassName = "text-black";
    return (<>
        <label htmlFor={htmlFor} className={labelClassName}>
            {children}
        </label>
        <span className="text-red-500 text-sm">{errMsg}</span>
    </>
    )
}