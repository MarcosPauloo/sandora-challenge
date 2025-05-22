'use client'
import { AuthLayout } from "@/components/index";

import { TextLogin, FormLogin } from "@/components/index";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // redireciona para a rota /login
  }, [router]);

  return null;
}