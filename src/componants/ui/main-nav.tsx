import { options } from "../../app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Link from "next/link"
import React from "react"
import { redirect } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import { cn } from "@/libs/libs"
import { Button } from "./button"
import { BellIcon, EyeNoneIcon, PersonIcon, HomeIcon } from "@radix-ui/react-icons"

export async function MainNav() {
    const session  = await getServerSession(options)
    return (
        <nav className="flex items-center justify-between w-full h-16 px-4 bg-slate-900 text-slate-foreground">
            <div className="flex items-center w-full h-full">
                <div className="flex items-center w-full h-full">
                    
                    <div className="flex items-center  w-full h-full">
                        <Link href="/">
                        <div className="flex items-center text-cyan-700 justify-center w-8 h-8 cursor-pointer hover:text-cyan-300">
                                <HomeIcon />
                            </div>
                        </Link>
                        {session ? (
                            <Link href="/dashboard">
                                <div className="flex items-center text-cyan-700 justify-center w-8 h-8 cursor-pointer hover:text-cyan-300">
                                    <PersonIcon />
                                </div>
                            </Link>
                        ) : (
                            <Link href="/api/auth/signin">
                                <div className="flex items-center text-cyan-700 justify-center w-8 h-8 cursor-pointer hover:text-cyan-300">
                                    <PersonIcon />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MainNav