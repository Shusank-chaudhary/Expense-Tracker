interface OutLinedButtonProps {
    btn: "button" | "submit" | "reset";
    txt: string;
    className?: string;
}

export const OutLinedButton = ({btn, txt, className='' }:Readonly<OutLinedButtonProps>) => {
    return (<>
        <button
            type={btn}
            className={`bg-green-700 text-white p-2 w-3/4 rounded-lg mt-4 cursor-pointer transition hover-scale:98 ${className}`}
        >
            {txt}
        </button>
    </>
    )
}