import { Input } from "@/components/ui/"

interface CustomInputProps {
    type: "password" | "email" | "text";
    placeholder: string;
}

export function CustomInput({type, placeholder}: CustomInputProps){
    return (
        <Input type={type} placeholder={placeholder}/>
    )
}