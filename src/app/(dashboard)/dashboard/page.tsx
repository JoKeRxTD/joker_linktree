import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { Input } from "../../../componants/ui/input"
import { MainNav } from '../../../componants/ui/main-nav'
import { Label } from "../../../componants/ui/label"
import { Button } from "../../../componants/ui/button"
import Loading from "../../../componants/ui/loading"
import UserCard  from "../../../componants/ui/UserCard"
import { redirect } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import { cn } from "@/libs/libs"
import LoginBtn from "../../../componants/ui/login-btn"

export default async function Dashboard() {
    const session = await getServerSession(options)
    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        }
    }
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 ">
            <MainNav/>
            <div className='w-[550px] h-[550px] flex flex-col items-center border-2 border-slate-600 bg-slate-900 rounded-md text-cyan-600'>
                <UserCard/>
                {/* logout button */}
                <LoginBtn/>
                
            </div>
        </main>
    )
}










