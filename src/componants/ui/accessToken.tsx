import { useSession, signIn, signOut } from "next-auth/react"
import { cn } from "@/libs/libs"
import { options } from "../../app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"


export default function Component() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 text-slate-foreground">
            <h1>Component</h1>
        </div>
    )
}

