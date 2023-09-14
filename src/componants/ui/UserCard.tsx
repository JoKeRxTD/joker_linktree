import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { BellIcon, EyeNoneIcon, PersonIcon, HomeIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { options } from "../../app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Image from "next/image"
import { redirect } from "next/dist/server/api-utils"
import { DiscordUser } from "../../libs/types"

export default async function UserCard() {
    const session = await getServerSession(options)
    if (!session) {
        return (
            <div className="flex items-center justify-center w-full h-full">
                <Link href="/api/auth/signin">
                    <div className="flex items-center text-cyan-700 justify-center w-8 h-8 cursor-pointer hover:text-cyan-300">
                        <PersonIcon />
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col items-center p-8 w-full h-full">
                
                <Image
                    src={session.user.image}
                    alt="JoKeR"
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-slate-600 mb-6"
                />
                <h1 className='text-2xl font-bold'>Dashboard</h1>
                <p className='text-sm text-center'>Welcome back {session.user.name}!</p>
                <p className='text-sm text-center'>You are logged in as {session.user.email}</p>
            </div>
        )
    }
}








