import { Button, Input, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/";
import { Control } from "react-hook-form";
import { InputComponent } from "@/components/index";

interface InputComponentProps {
    type: "password" | "email" | "text";
    placeholder: string;
    label: string;
    name: string;
    control: Control<any>;
}

export function FormFieldCustom({type, placeholder, control, label, name}: InputComponentProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                <FormLabel className="text-[14px] font-medium text-foreground">{label}</FormLabel>
                <FormControl>
                    <InputComponent type={type} placeholder={placeholder} {...field} nameField={label}/>
                </FormControl>
                <FormMessage className="text-[12px] font-medium text-red-400"/>
                </FormItem>
            )}
        />
    )
}   