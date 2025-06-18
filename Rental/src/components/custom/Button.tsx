import React from 'react'

export enum ButtonType{
    primary = "primary",
    secondary = "secondary"
}

interface ButtonProps{
    variant : ButtonType,
    children : React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string
}

const Button:React.FC<ButtonProps> = ({variant, children, onClick, className=''}) => {
    const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200"
  
    const variantClasses = {
        [ButtonType.primary]: "bg-[#F86C23] text-white hover:bg-[#E55C1A] px-6 py-3 rounded-lg font-semibold hover:bg-[#f86e23e2] transition",
        [ButtonType.secondary]: "bg-transparent border-2 border-[#f86c23] text-[#f86c23] px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </button>
    )
}

export default Button
