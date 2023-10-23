import StatusTracker from '@/components/Cards/StatusTracker'
import TimeTracker from '@/components/Cards/TimeTracker'
import TraningAnalysis from '@/components/Cards/TraningAnalysis'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Dashboard() {
    return (
        <div className='flex'>
            <Sidebar />

            <div className='w-full'>
                <Navbar />

                <div className='p-4 md:p-6 space-y-4 md:space-y-0 sm:columns-2 md:columns-3'>
                    <div className='break-inside-avoid-column'>
                        <TraningAnalysis />
                    </div>

                    <div className='break-inside-avoid-column'>
                        <TimeTracker />
                    </div>

                    <div className='break-inside-avoid-column'>
                        <StatusTracker />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard