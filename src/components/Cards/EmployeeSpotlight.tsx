import { useState } from 'react'
import Image from 'next/image'
import { Edit2, Heart, MagicStar, Send2 } from 'iconsax-react'
import { motion } from 'framer-motion'
import Avatar2 from '../assets/avatars/avatar2.png'
import Avatar3 from '../assets/avatars/avatar3.png'

function EmployeeSpotlight() {

    const [activeTab, setActiveTab] = useState('comments')
    const [comment1Liked, setComment1Liked] = useState(true)
    const [comment2Liked, setComment2Liked] = useState(false)

    return (
        <div className='border text-gray-500 w-full p-3 rounded-2xl space-y-4'>
            {/* header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm gap-2'>
                    <MagicStar size={18} />
                    <p className='text-gray-800 font-medium'>Employee Spotlight</p>
                </div>
                <button className='border flex items-center gap-1 px-2 py-1 rounded-lg text-xs'>
                    <Send2 size={14} />
                    share
                </button>
            </div>

            {/* <hr className='bg-gray-400 my-4' /> */}

            {/* tabs */}
            <div className='flex text-xs font-medium relative bg-gray-100 p-2 rounded-lg py-1'>
                <button onClick={() => setActiveTab('overview')} className={`z-10 w-full px-2 py-1 ${activeTab === 'overview' ? '' : ''}`}>Overview</button>
                <button onClick={() => setActiveTab('comments')} className={`z-10 w-full px-2 py-1.5 rounded-lg ${activeTab === 'comments' ? '' : ''}`}>Comments</button>
                <button onClick={() => setActiveTab('rewards')} className={`z-10 w-full px-2 py-1 ${activeTab === 'rewards' ? '' : ''}`}>Rewards</button>

                <div className='absolute items-center px-1 top-0 left-0 w-full h-full flex'>
                    <motion.div
                        animate={{ x: activeTab === 'overview' ? 0 : activeTab === 'rewards' ? '200%' : '100%' }}
                        className='w-1/3 bg-white border h-7 rounded-lg transform'
                    />
                </div>
            </div>

            {/* content */}
            <div className='space-y-3'>
                {/* comment 1 */}
                <div
                    onDoubleClick={() => setComment1Liked(!comment1Liked)}
                    className='flex items-center justify-between w-full select-none cursor-pointer'
                >
                    <div className='flex items-center gap-2'>
                        <Image src={Avatar2} alt='loom' height={36} width={36} className='rounded-full' />
                        <div className='font-medium'>
                            <p className='text-xxs text-gray-500'>Dwayne Johnson</p>
                            <p className='text-sm text-gray-700 font-medium'>Looks insane!🔥</p>
                        </div>
                    </div>
                    <button onClick={() => setComment1Liked(!comment1Liked)} className={`${comment1Liked ? 'text-red-500' : 'text-gray-400'} duration-200 active:scale-50`}>
                        <Heart size={20} variant={comment1Liked ? 'Bold' : 'Linear'} />
                    </button>
                </div>

                <hr className='bg-gray-400' />

                {/* comment 2 */}
                <div
                    onDoubleClick={() => setComment2Liked(!comment2Liked)}
                    className='flex items-center justify-between w-full select-none cursor-pointer'
                >
                    <div className='flex items-center gap-2'>
                        <Image src={Avatar3} alt='loom' height={36} width={36} className='rounded-full' />
                        <div className='font-medium'>
                            <p className='text-xxs text-gray-500'>Steve Smith</p>
                            <p className='text-sm text-gray-700 font-medium'>Update is live now!🎉</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setComment2Liked(!comment2Liked)} className={`${comment2Liked ? 'text-red-500' : 'text-gray-400'} duration-200 active:scale-50`}>
                        <Heart size={20} variant={comment2Liked ? 'Bold' : 'Linear'} />
                    </button>
                </div>

                {/* comment button */}
                <button className='border flex items-center justify-center w-full gap-2 p-2 text-gray-600 font-medium rounded-lg text-xs'>
                    <Edit2 size={14} />
                    Comment
                </button>
            </div>
        </div>
    )
}

export default EmployeeSpotlight