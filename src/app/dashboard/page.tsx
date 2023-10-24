"use client"

import CourseProgress from '@/components/Cards/CourseProgress'
import EmployeeSpotlight from '@/components/Cards/EmployeeSpotlight'
import StatusTracker from '@/components/Cards/StatusTracker'
import TimeTracker from '@/components/Cards/TimeTracker'
import TraningAnalysis from '@/components/Cards/TraningAnalysis'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { motion } from 'framer-motion'

function Dashboard() {
    return (
        <motion.div
            className='flex'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >

            <Sidebar />

            <div className='w-full max-w-[1440px] mx-auto'>
                <Navbar />

                <div className='p-4 md:p-6 space-y-4 md:space-y-0 sm:columns-2 lg:columns-3'>
                    <div className='break-inside-avoid-column space-y-4'>
                        <TraningAnalysis />

                        <CourseProgress />

                        <EmployeeSpotlight />
                    </div>

                    <div className='break-inside-avoid-column'>
                        <TimeTracker />
                    </div>

                    <div className='break-inside-avoid-column'>
                        <StatusTracker />
                    </div>

                    <div className='break-inside-avoid-column'>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Dashboard