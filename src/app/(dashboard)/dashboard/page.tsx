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
export const dynamicParams = true
export const revalidate = "300"

export default function Login() {
    return (
        <main className="min-h-screen py-2 bg-slate-900 text-slate-foreground text-cyan-600 text-center justify-center">
            <h1>
                Dashboard
            </h1>
        </main>
    )
}