import { HomeNavbar } from "@/components/ui/home-navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export function HomeLayout({ children }: PropsWithChildren) {
    return (
        <SidebarProvider>
            <div className="w-full">
                <HomeNavbar />
                <div className="min-h-screen pt-[4rem]">
                    <HomeSidebar />
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}