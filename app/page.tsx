
import { AuthLayout } from "@/components/index";

import { TextLogin, FormLogin } from "@/components/index";

export default function Home() {
  return (
    <AuthLayout
      leftContent={<TextLogin />}
      rightContent={<FormLogin />}
    />
  );
}