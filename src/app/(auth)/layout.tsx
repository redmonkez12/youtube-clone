import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex items-center justify-center">{children}</div>
    );
}