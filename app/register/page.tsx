
import { AuthLayout } from "@/components/index";

import { TextRegister, FormRegister } from "@/components/index";

export default function Register() {
  return (
    <AuthLayout
      leftContent={<TextRegister />}
      rightContent={<FormRegister />}
    />
  );
}