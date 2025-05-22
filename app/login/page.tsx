import { AuthLayout } from "@/components/index";

import { TextLogin, FormLogin } from "@/components/index";

export default function Login(){
    return (
       <AuthLayout
            leftContent={<TextLogin />}
            rightContent={<FormLogin />}
        />
    );
}