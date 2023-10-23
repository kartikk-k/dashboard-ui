import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Dashboard() {
    return (
        <div className='flex'>
            <Sidebar />

            <div className='w-full'>
                <Navbar />
            </div>
        </div>
    )
}

export default Dashboard