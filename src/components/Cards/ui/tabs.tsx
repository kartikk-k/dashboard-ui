import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface props {
    option1: string
    option2: string
    option3: string
    defaultOption?: string
    minWidth?: number
}

function Tabs({ option1, option2, option3, defaultOption, minWidth }: props) {

    const [activeTab, setActiveTab] = useState<string>(defaultOption || option1)

    return (
        <div style={{ minWidth: minWidth }} className='flex text-xs font-medium relative bg-gray-100 p-2 rounded-lg py-1'>
            <button onClick={() => setActiveTab(option1)} className={`z-10 w-full px-2 py-1 ${activeTab === option1 ? '' : ''}`}>{option1}</button>
            <button onClick={() => setActiveTab(option2)} className={`z-10 w-full px-2 py-1.5 rounded-lg ${activeTab === option2 ? '' : ''}`}>{option2}</button>
            <button onClick={() => setActiveTab(option3)} className={`z-10 w-full px-2 py-1 ${activeTab === option3 ? '' : ''}`}>{option3}</button>

            <div className='absolute items-center px-1 top-0 left-0 w-full h-full flex'>
                <motion.div
                    animate={{ x: activeTab === option1 ? 0 : activeTab === option3 ? '200%' : '100%' }}
                    className='w-1/3 bg-white border h-7 rounded-lg transform'
                />
            </div>
        </div>
    )
}

export default Tabs