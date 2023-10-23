"use client"

import React, { useEffect } from 'react'
import { Pause, Play } from 'iconsax-react'

function Timer() {

    const [time, setTime] = React.useState(0)
    const [isPaused, setIsPaused] = React.useState(true)
    const [displayTime, setDisplayTime] = React.useState('00:00:00')

    useEffect(() => {
        if (isPaused) return

        // update time in every 1 second in 00:00:00 format
        const timer = setInterval(() => {
            setTime((time) => time + 1)
        }, 1000)

        // clear interval
        return () => clearInterval(timer)

    }, [isPaused])

    useEffect(() => {
        convertTime()
    }, [time])

    const convertTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${parseInt(minutes) % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

        setDisplayTime(`${getHours} : ${getMinutes} : ${getSeconds}`)
    }

    return (
        <div className='flex flex-col items-center py-4 gap-2'>
            <p className='text-xs text-gray-500'>{time === 0 ? 'Awaiting' : 'In Progress'}</p>

            <p className='text-gray-800 text-2xl font-semibold'>
                {displayTime.split(':')[0]} :
                {displayTime.split(':')[1]} :
                <span className='text-gray-500'>
                    {displayTime.split(':')[2]}
                </span>
            </p>

            <button onClick={() => setIsPaused(!isPaused)} className='text-primary relative text-xs flex font-medium items-center gap-1'>

                <Play size={16} variant='Bold' className={`${isPaused ? 'scale-100' : 'scale-0'} duration-200`} />
                <Pause size={16} variant='Bold' className={`${isPaused ? 'scale-0' : 'scale-100'} absolute left-0 duration-200`} />

                <span>
                    {isPaused ? 'Start' : 'Pause'} Time Tracker
                </span>
            </button>
        </div>
    )
}

export default Timer