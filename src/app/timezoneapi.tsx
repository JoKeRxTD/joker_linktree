'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Time = dynamic(() => import('./timezone'), { ssr: false })

const Clock = () => {
    const [time, setTime] = useState(new Date())
    
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])
    
    return <Time time={time} amPm />
}

export { Clock }

