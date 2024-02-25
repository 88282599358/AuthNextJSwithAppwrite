"use client"
import useAuth from "@/context/useAuth"
import { useRouter } from "next/navigation"

import React from 'react'

const ProtectedLayout = ({children,}: {children:React.ReactNode}) => {
    const router = useRouter();
    const { authStatus } = useAuth();

    // it will render on every page, so we just check that where is should render
    // so here if user is login them the render children
    if (!authStatus) {
        router.replace("/login");
        return <></>;
    }
    return children
}

export default ProtectedLayout