import Image from 'next/image'
import { MainNav } from '../componants/ui/main-nav'
import { Clock } from './timezoneapi'
import { Button } from "../componants/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../componants/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900">
      <MainNav/>
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
            <CardDescription className='text-sm text-[#fafafa]'>I am Tom (jokerxtd) . 32 y/o Inspired Developer/Software Engineer , Verified Discord Bot Developer , and Web Developer</CardDescription>
          </CardContent>
        <CardFooter className='flex justify-center space-x-2 w-full text-[#fafafa]'>
          <Link
            href="https://jokerdev.xyz"
          >
          <Button className='border-slate-600' variant="outline">Portfolio</Button>
          </Link>
          <Button className='border-slate-600' variant="outline">Discord</Button>
          <Button className='border-slate-600' variant="outline">Store</Button>
          <Button className='border-slate-600' variant="outline">Github</Button>
          <Button className='border-slate-600' variant="outline">Youtube</Button>
        </CardFooter>
        <div className="flex text-sm flex-col items-center justify-center space-y-2 text-[#fafafa]">
          <p>
            <span className="font-bold">It is currently</span>
          </p>
          <Clock/>
        </div>
      </Card>
    </main>
  )
}