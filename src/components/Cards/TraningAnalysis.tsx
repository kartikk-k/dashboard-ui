import React from 'react'
import { Diagram } from 'iconsax-react'
import Avatar1 from '../assets/avatars/avatar1.png'
import Avatar2 from '../assets/avatars/avatar2.png'
import Avatar3 from '../assets/avatars/avatar3.png'
import Image from 'next/image'

function TraningAnalysis() {
    return (
        <div className='border text-gray-500 w-full sm:w-80 p-3 rounded-2xl'>
            {/* header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm gap-2'>
                    <Diagram size={18} />
                    <p className='text-gray-800 font-medium'>Training Analysis</p>
                </div>
                <button className='border px-2 py-1 rounded-lg text-xs'>
                    Details
                </button>
            </div>

            <hr className='bg-gray-400 my-4' />

            {/* content */}
            <div className='flex justify-between'>
                <div className='space-y-4'>
                    <div>
                        <p className='text-sm text-gray-800 font-medium'>12 courses</p>
                        <p className='text-xs'>Completed in this quarter</p>
                    </div>
                    {/* attendes */}
                    <div className='flex items-center gap-1'>
                        <div className='flex gap-[-4px]'>
                            <Image src={Avatar1} alt='user1' height={20} width={20} className='outline outline-white rounded-full' />
                            <Image src={Avatar2} alt='user2' height={20} width={20} className='outline outline-white rounded-full' />
                            <Image src={Avatar3} alt='user3' height={20} width={20} className='outline outline-white rounded-full' />
                        </div>
                        <p className='text-xs'>26 Attended</p>
                    </div>
                </div>

                {/* graph */}
                <div className='flex gap-1.5 items-end'>
                    <div className='w-3 h-14 rounded-sm duration-200 bg-violet-300' />
                    <div className='w-3 h-16 rounded-sm duration-200 bg-violet-500' />
                    <div className='w-3 h-12 rounded-sm duration-200 bg-violet-300' />
                    <div className='w-3 h-16 rounded-sm duration-200 bg-violet-500' />
                    <div className='w-3 h-14 rounded-sm duration-200 bg-violet-300' />
                    <div className='w-3 h-20 rounded-sm duration-200 bg-violet-500' />
                    <div className='w-3 h-12 rounded-sm duration-200 bg-violet-300' />
                </div>
            </div>
        </div>
    )
}

export default TraningAnalysis