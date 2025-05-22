import React from "react";

import { TextLogin, FormLogin } from "@/components/index";

interface AuthLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export function AuthLayout({leftContent, rightContent}: AuthLayoutProps) {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Lado esquerdo */}
      <section className="w-full lg:w-1/2 bg-primary-foreground flex flex-col justify-center items-start px-8 md:px-16 py-10 relative">
        <div className="absolute top-8 left-8 md:top-6 md:left-16">
          <img src="/images/logo.svg" alt="Logo da Empresa" className="h-6 md:h-8 w-auto" />
        </div>
        <div className="mt-16">{leftContent}</div>
      </section>

      {/* Lado direito */}
      <section className="w-full lg:w-1/2 flex items-start lg:items-center justify-center px-8 py-16 lg:py-0 lg:px-8 bg-primary text-base flex-1">
        <div className="w-full max-w-md bg-primary-foreground rounded-2xl p-6 sm:p-8">
          {rightContent}
        </div>
      </section>
    </main>
  );
}
