import React from 'react'

const Button = ({variant = 'primary', children} : {variant?: 'primary' | 'secondary', children: React.ReactNode}) => {
    const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200"
  
    const variantClasses = {
        primary: "bg-[#F86C23] text-white hover:bg-primary-hover",
        secondary: "bg-secondary text-white hover:bg-secondary-hover"
    }

    return (
        <button className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </button>
    )
}

export default Button
