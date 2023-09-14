import { options } from "../../app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import Link from "next/link"
import Image from "next/image"
import { Input } from "../ui/input"
import { MainNav } from '../ui/main-nav'
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import Loading from "../ui/loading"
import { BellIcon, EyeNoneIcon, PersonIcon, HomeIcon } from "@radix-ui/react-icons"
import { redirect } from "next/dist/server/api-utils"

export default async function LoginBtn() {
    const session = await getServerSession(options)
    if (!session) {
        // redirect to home page
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
            <div className="flex items-center justify-center w-full h-full">
                <Link href="/api/auth/signout">
                    <div className="flex items-center text-cyan-700 justify-center w-8 h-8 cursor-pointer hover:text-cyan-300">
                        <EyeNoneIcon />
                    </div>
                </Link>
            </div>
        )
    }
}