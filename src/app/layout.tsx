import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JoKeR LinkTree',
  description: 'JoKeR LinkTree Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 text-slate-foreground">
            {children}
          </div>
      </body>
    </html>
  )
}
