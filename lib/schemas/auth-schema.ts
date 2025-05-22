import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email({ message: "E-mail inválido" }),
    password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
})

export const registerSchema = z.object({
    name: z.string().min(1,{ message: "Nome é obrigatório"}),
    company: z.string().min(1,{ message: "Nome da empresa é obrigatório"}),
    email: z.string().email({ message: "E-mail inválido" }),
    password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z.string(),
}).refine((data)=>data.password === data.confirmPassword,{
    path: ["confirmPassword"],
    message: "As senhas não conferem",
})

export type LoginFormSchema = z.infer<typeof loginSchema>
export type RegisterFormSchema = z.infer<typeof registerSchema>