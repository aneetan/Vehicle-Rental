import React from 'react'

const Button = ({variant = 'primary', children} : {variant?: 'primary' | 'secondary', children: React.ReactNode}) => {
    const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200"
  
    const variantClasses = {
        primary: "bg-[#F86C23] text-white hover:bg-[#E55C1A] px-6 py-3 rounded-lg font-semibold hover:bg-[#f86e23e2] transition",
        secondary: "bg-transparent border-2 border-[#f86c23] text-[#f86c23] px-6 py-3 rounded-lg font-semibold hover:bg-white transition"
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </button>
    )
}

export default Button
