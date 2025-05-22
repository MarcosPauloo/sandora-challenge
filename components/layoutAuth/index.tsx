import React from "react";

import { TextLogin, FormLogin } from "@/components/index";

interface AuthLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export function AuthLayout({leftContent, rightContent}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-primary-foreground flex flex-col items-start justify-center px-[76px]">
        <div className="absolute top-6 left-[76px]">
          <img src="/images/logo.svg" alt="Logo da Empresa" className="h-[1.5rem] w-auto" />
        </div>
        {leftContent}
      </div>
      <div className="w-1/2 flex items-center justify-center p-8 bg-primary text-[20px]">
        <div className="flex justify-center items-start bg-primary-foreground w-[60%] rounded-2xl p-8">
          {rightContent}        
        </div>
      </div>
    </div>
  );
}
