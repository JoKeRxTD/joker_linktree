import Link from "next/link"
import React from "react"
import { redirect } from "next/navigation"
import { cn } from "@/libs/libs"
import { Button } from "./button"
import { BellIcon, EyeNoneIcon, PersonIcon, HomeIcon } from "@radix-ui/react-icons"

export async function MainNav() {
    return (
        <nav className="flex items-center justify-between w-full h-16 px-4 bg-slate-900 text-slate-foreground">
            <div className="flex items-center w-full h-full">
                <div className="flex items-center w-full h-full">
                    
                    <Link href="/">
                        <div className="flex items-center h-full cursor-pointer hover:text-slate-300">
                            <HomeIcon />
                        </div>
                    </Link>
                    <Link href="/api/auth/signin">
                        <div className="flex items-center h-full cursor-pointer hover:text-slate-300">
                            <PersonIcon />
                        </div>
                    </Link>
                    <Link href="/api/auth/signin">
                        <div className="flex items-center h-full cursor-pointer hover:text-slate-300">
                            <BellIcon />
                        </div>
                    </Link>
                    <Link href="/api/auth/signin">
                        <div className="flex items-center h-full cursor-pointer hover:text-slate-300">
                            <EyeNoneIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default MainNav