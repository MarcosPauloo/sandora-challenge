'use client'
import { useState } from "react"

import { Input } from "@/components/ui/"
import { RiEyeOffLine, RiEyeLine } from "react-icons/ri";

interface InputComponentProps {
    type: "password" | "email" | "text";
    placeholder: string;
    
}

export function InputComponent({type,placeholder, ...props}: InputComponentProps) {
    const [showPassword, setShowPassword] = useState(true);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? type : "text" ;

    return (
        <div className="relative w-full">
            <Input type={inputType} placeholder={placeholder} className={`${isPassword ? 'pr-10' : 'pl-3'}`} {...props}/>
        
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                >
                    {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
            )}
        </div>
    )
}

{/* <div className="flex flex-col gap-1">
            <label className="text-[14px] font-medium text-foreground">{label}</label>
            <div className="relative w-full">
                <Input type={inputType} placeholder={placeholder} className={`${isPassword ? 'pr-10' : 'pl-3'}`}/>
            
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                    >
                        {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                    </button>
                )}
            </div>
                
        </div> */}