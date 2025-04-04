import {HeroUIProvider} from "@heroui/react";
import React, { ReactNode } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function Providers({
    children,
}: {
    children: ReactNode;
}) {
    return(
        <HeroUIProvider>
            <ToastContainer position="bottom-right" hideProgressBar />
            {children}</HeroUIProvider>
    )
}