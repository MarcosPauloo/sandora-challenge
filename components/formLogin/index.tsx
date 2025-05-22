'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Form } from "@/components/ui/";
import { FormFieldCustom } from "@/components/index";

import { LoginFormSchema, loginSchema } from "@/lib/schemas/auth-schema";

export function FormLogin(){
    const form = useForm<LoginFormSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: LoginFormSchema) {
       alert('email:' + data.email + ' senha:' + data.password);
        // Aqui pode ser feito a chamada para a API de login
        // e redirecionar o usuário após o login bem-sucedido.
    }

    return (
        <Form {...form}>
            <form className="space-y-4 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <h1 className="text-[30px] font-semibold text-foreground">Login</h1> 
                <FormFieldCustom name="email" control={form.control} label="Email" placeholder="Insira seu email de cadastro" type="email"/>
                <FormFieldCustom name="password" control={form.control} label="Senha" placeholder="Insira sua senha" type="password"/>

                <p
                    className="text-[12px] font-semibold underline text-input hover:text-primary/80 cursor-pointer text-left"
                    onClick={() => {console.log("Esqueci minha senha")}}
                >
                    Esqueci minha senha
                </p>
                <Button type="submit" className="w-full text-[18px] font-semibold p-6">
                    FAZER LOGIN
                </Button>
                <Link href={"/register"}>
                    <p
                        className="text-[12px] font-semibold underline text-input hover:text-primary/80 cursor-pointer text-center"
                        onClick={() => {console.log("Esqueci minha senha")}}
                        >
                        Não possui conta? Cadastre-se
                    </p>    
                </Link>
            </form>
        </Form>
        
        
    )
}
