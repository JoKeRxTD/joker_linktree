import Image from 'next/image'
import * as React from "react"
import { Clock } from './timezoneapi'
import { Input } from "../componants/ui/input"
import { Label } from "../componants/ui/label"
import { Button } from "../componants/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../componants/ui/card"
export const dynamicParams = true
export const revalidate = "300"

export default function Home() {
  const now = new Date()
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 text-slate-foreground">
        <Card className="w-[550px] h-[550px] flex flex-col items-center justify-center border-2 border-slate-600 bg-slate-900">
          <CardHeader className='flex flex-col items-center justify-center space-y-2'>
              <Image
                src="/joker_new.png"
                alt="JoKeR"
                width={200}
                height={200}
                className="rounded-full border-2 border-slate-600"
              />
          </CardHeader>
          <CardContent className='flex flex-col items-center text-center justify-center space-y-2 text-[#fafafa]'>
            <CardTitle className='font-bold text-2xl'>JoKeR</CardTitle>
            <CardDescription className='text-sm text-[#fafafa]'>I am Tom (jokerxtd) . 31 y/o Inspired Developer/Software Engineer , Verified Discord Bot Developer , and Web Developer</CardDescription>
          </CardContent>
        <CardFooter className='flex justify-center space-x-2 w-full text-[#fafafa]'>
          <Button className='border-slate-600' variant="outline">Portfolio</Button>
          <Button className='border-slate-600' variant="outline">Discord</Button>
          <Button className='border-slate-600' variant="outline">Store</Button>
          <Button className='border-slate-600' variant="outline">Github</Button>
          <Button className='border-slate-600' variant="outline">Youtube</Button>
        </CardFooter>
        <div className="flex text-sm flex-col items-center justify-center space-y-2 text-[#fafafa]">
          <p>
            <span className="font-bold">It's currently</span>
          </p>
          <Clock/>
        </div>
      </Card>
    </main>
  )
}