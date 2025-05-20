import { Button, Input } from "@/components/ui/";
import { InputComponent } from "@/components/index";

export function FormLogin(){
    return (
        <div className="flex justify-center items-start bg-primary-foreground w-[60%] rounded-2xl p-8">
            <form className="space-y-4 w-full">
                <h1 className="text-[30px] font-semibold text-foreground">Login</h1> 
                <InputComponent type="email" placeholder="Insira seu email de cadastro" label="Email"/>
                <InputComponent type="password" placeholder="Insira sua senha" label="Senha"/>
                <Button type="submit" className="w-full">
                    Entrar
                </Button>
            </form>
        </div>
    )
}