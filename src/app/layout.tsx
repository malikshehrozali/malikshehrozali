import type { Metadata } from "next";

import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
    title: "Malik Shehroz Ali",
    description: "Malik Shehroz Ali, Full Stack Developer | AI Engineer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`font-[times-new-roman]`}>
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}
