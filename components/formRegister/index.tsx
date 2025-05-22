'use client'

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Form } from "@/components/ui/";
import { InputComponent, FormFieldCustom } from "@/components/index";

import { RegisterFormSchema, registerSchema } from "@/lib/schemas/auth-schema";
export function FormRegister(){

     const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            company: "",
            email: "",
            name: "",
            password: "",
        },
    })

    function onSubmit(data: RegisterFormSchema) {
        alert('email:' + data.email + ' senha:' + data.password);
        // Aqui pode ser feito a chamada para a API de login
        // e redirecionar o usuário após o login bem-sucedido.
    }

    return (
        <Form {...form}>
            <form className="space-y-4 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <h1 className="text-[30px] font-semibold text-foreground">Cadastro</h1> 
                <FormFieldCustom name="name" control={form.control} label="Nome completo" placeholder="Como você será identificada na plataforma." type="text"/>
                <FormFieldCustom name="company" control={form.control} label="Empresa" placeholder="Insira o nome da empresa." type="text"/>
                <FormFieldCustom name="email" control={form.control} label="Email" placeholder="Será usado para login e comunicações." type="email"/>
                <FormFieldCustom name="password" control={form.control} label="Senha" placeholder="(mín. 6 caracteres)" type="password"/>
                <FormFieldCustom name="confirmPassword" control={form.control} label="Confirmar Senha" placeholder="(mín. 6 caracteres)" type="password"/>

                {/* <InputComponent type="text" placeholder="Como você será identificada na plataforma." label="Nome completo"/>
                <InputComponent type="text" placeholder="Insira o nome da empresa." label="Empresa"/>
                <InputComponent type="email" placeholder="Será usado para login e comunicações." label="Email"/>
                <InputComponent type="password" placeholder="(mín. 6 caracteres)" label="Senha"/>
                <InputComponent type="password" placeholder="(mín. 6 caracteres)" label="Confirmar Senha"/> */}
                <p
                    className="text-[12px] font-semibold text-input text-left"
                    onClick={() => {console.log("Esqueci minha senha")}}
                >
                    Ao criar sua conta, você concorda com nossos <span className="text-primary underline hover:text-primary/80 cursor-pointer">Termos de Uso</span> e <span className="text-primary underline">Política de Privacidade.</span>
                </p>
                <Button type="submit" className="w-full text-[18px] font-semibold p-6">
                    CRIAR CONTA
                </Button>
                <Link href={"/login"}>
                    <p
                        className="text-[12px] font-semibold underline text-input hover:text-primary/80 cursor-pointer text-center"
                        onClick={() => {console.log("Esqueci minha senha")}}
                        >
                        Já tem uma conta? Entrar
                    </p>
                </Link>
            </form>
        </Form>
    )
}
/* 
<form className="space-y-4 w-full">
            <h1 className="text-[30px] font-semibold text-foreground">Cadastro</h1> 
            <InputComponent type="text" placeholder="Como você será identificada na plataforma." label="Nome completo"/>
            <InputComponent type="text" placeholder="Insira o nome da empresa." label="Empresa"/>
            <InputComponent type="email" placeholder="Será usado para login e comunicações." label="Email"/>
            <InputComponent type="password" placeholder="(mín. 6 caracteres)" label="Senha"/>
            <InputComponent type="password" placeholder="(mín. 6 caracteres)" label="Confirmar Senha"/>
            <p
                className="text-[12px] font-semibold text-input text-left"
                onClick={() => {console.log("Esqueci minha senha")}}
            >
                Ao criar sua conta, você concorda com nossos <span className="text-primary underline hover:text-primary/80 cursor-pointer">Termos de Uso</span> e <span className="text-primary underline">Política de Privacidade.</span>
            </p>
            <Button type="submit" className="w-full text-[18px] font-semibold p-6">
                CRIAR CONTA
            </Button>
            <Link href={"/login"}>
                <p
                    className="text-[12px] font-semibold underline text-input hover:text-primary/80 cursor-pointer text-center"
                    onClick={() => {console.log("Esqueci minha senha")}}
                    >
                    Já tem uma conta? Entrar
                </p>
            </Link>
        </form> */