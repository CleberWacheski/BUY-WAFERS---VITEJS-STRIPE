import { ButtonHTMLAttributes } from 'react'

interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    tailwindClass: string;
    children: string | number | JSX.Element;
}


export const CircleButton = ({ tailwindClass, children, ...rest }: CircleButtonProps) => {
    return (
        <button
            className={`${tailwindClass} rounded-full p-2  w-10 h-10 flex transition-all items-center justify-center`}
            {...rest}
        >
            {children}
        </button>
    )
}
