import { FC } from "react"
import Image from 'next/image'
import { Input } from "../../../componants/ui/input"
import { Label } from "../../../componants/ui/label"
import { Button } from "../../../componants/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../componants/ui/card"
import { MainNav } from '../../../componants/ui/main-nav'
import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "../../../componants/ui/UserCard"
import { redirect } from "next/navigation"

export default async function Login() {
    const session = await getServerSession(options)
    return (
        <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 text-slate-foreground">
            <MainNav/>
            <div className='w-[550px] h-[550px] flex flex-col items-center justify-center border-2 border-slate-600 bg-slate-900 rounded-md text-cyan-600'>
                <Image
                    src="/joker_new.png"
                    alt="JoKeR"
                    width={100}
                    height={100}
                    className="rounded-full border-2 border-slate-600 mb-6"
                />
                <h1 className='text-2xl font-bold'>Login</h1>
                <p className='text-sm'>Login to your account</p>

                <div className='flex flex-col items-center justify-center space-y-2'>
                    <Label className='text-sm'>Email</Label>
                    <Input className='w-[300px]' type='email' placeholder='Email' />

                    <Label className='text-sm'>Password</Label>
                    <Input className='w-[300px]' type='password' placeholder='Password' />

                    <Button className='border-slate-600' variant="outline">Login</Button>

                    <p className='text-sm'>Don't have an account?<a href='/auth/register' className='hover:text-cyan-300'> Register</a></p>

                    <p className='text-sm'>Lost Access?<a href='/auth/forgot'className='hover:text-cyan-300'> Contact</a></p>

                </div>
            </div>
        </main>
    )
}