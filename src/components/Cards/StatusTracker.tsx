import Image from 'next/image'
import { Clock, MinusCirlce, Monitor } from 'iconsax-react'
import Avatar1 from '../assets/avatars/avatar1.png'
import Avatar2 from '../assets/avatars/avatar2.png'
import Avatar3 from '../assets/avatars/avatar3.png'

function StatusTracker() {
    return (
        <div className='border text-gray-500 w-full p-3 rounded-2xl'>
            {/* header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm gap-2'>
                    <Monitor size={18} />
                    <p className='text-gray-800 font-medium'>Status Tracker</p>
                </div>
                <button className='border px-2 py-1 rounded-lg text-xs'>
                    See all
                </button>
            </div>

            <hr className='bg-gray-400 my-4' />

            {/* content */}
            <div className='space-y-3'>
                {/* absent */}
                <div className='space-y-3'>
                    <p className='text-xs text-gray-400'>Absent</p>
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <Image src={Avatar1} alt='loom' height={36} width={36} className='rounded-full' />
                                <div className='font-medium'>
                                    <p className='text-sm text-gray-800'>Emma Watson</p>
                                    <p className='text-xs text-gray-500'>UI Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex text-xxs font-medium items-center gap-1'>
                            <MinusCirlce size={14} variant='Bold' />
                            <span>Absent</span>
                        </div>
                    </div>
                </div>

                <hr className='bg-gray-400' />

                {/* away */}
                <div className='space-y-3'>
                    <p className='text-xs text-gray-400'>Away</p>

                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <Image src={Avatar2} alt='loom' height={36} width={36} className='rounded-full' />
                                <div className='font-medium'>
                                    <p className='text-sm text-gray-800'>Walter White</p>
                                    <p className='text-xs text-gray-500'>Backend Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex text-xxs font-medium items-center gap-1 pr-1.5 bg-orange-100 px-1 py-0.5 rounded-full text-orange-400'>
                            <Clock size={14} variant='Bold' />
                            <span>25m</span>
                        </div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <Image src={Avatar3} alt='loom' height={36} width={36} className='rounded-full' />
                                <div className='font-medium'>
                                    <p className='text-sm text-gray-800'>Dwayne Johnson</p>
                                    <p className='text-xs text-gray-500'>DevOps Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex text-xxs font-medium items-center gap-1 pr-1.5 bg-orange-100 px-1 py-0.5 rounded-full text-orange-400'>
                            <Clock size={14} variant='Bold' />
                            <span>12m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusTracker