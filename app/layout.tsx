import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/header/Header";
import React from "react";
import ReduxProvider from "@/store/ReduxProvider";
import { Login } from "@/components/auth/Login";
import { Register } from "@/components/auth/Register";
import { ApolloWrapper } from "@/api/ApolloWrapper";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-body`}>
        <ApolloWrapper>
          <ReduxProvider>
            <Header />
            {children}
            <Footer />
            <Register />
            <Login />
          </ReduxProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
