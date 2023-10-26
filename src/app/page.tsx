"use client"

import CourseProgress from '@/components/Cards/CourseProgress'
import CurrentProject from '@/components/Cards/CurrentProject'
import EmployeeSpotlight from '@/components/Cards/EmployeeSpotlight'
import Notes from '@/components/Cards/Notes'
import StatusTracker from '@/components/Cards/StatusTracker'
import TimeTracker from '@/components/Cards/TimeTracker'
import TraningAnalysis from '@/components/Cards/TraningAnalysis'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'


function Home() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSidebarChange = (value: boolean) => {
    setIsSidebarOpen(value)
  }

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className={`${isSidebarOpen ? 'overflow-hidden' : ''} h-screen`}
    >

      {/* backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsSidebarOpen(false)}
            className='bg-black/60 absolute top-0 left-0 md:hidden w-full h-screen z-20'
          />
        )}
      </AnimatePresence>

      {/* mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.25 }}
            className='absolute md:hidden z-30 top-0 left-0'
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      <div className='flex'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className='w-full max-w-[1440px] mx-auto'>
          <Navbar isOpen={isSidebarOpen} sidebarChange={handleSidebarChange} />

          <div className='p-4 md:p-6 space-y-4 columns-1 sm:columns-2 lg:columns-3'>
            <div className='break-inside-avoid-column space-y-4'>
              <TraningAnalysis />
            </div>

            <div className='break-inside-avoid-column space-y-4'>
              <CourseProgress />
            </div>

            <div className='break-inside-avoid-column space-y-4'>
              <EmployeeSpotlight />
            </div>

            <div className='break-inside-avoid-column space-y-4'>
              <TimeTracker />
            </div>

            <div className='break-inside-avoid-column space-y-4'>
              <Notes />
            </div>

            <div className='break-inside-avoid-column space-y-4'>
              <StatusTracker />
            </div>

            <div className='break-inside-avoid-column space-y-4'>
              <CurrentProject />
            </div>
          </div>

        </div>
      </div>

    </motion.div>
  )
}

export default Home