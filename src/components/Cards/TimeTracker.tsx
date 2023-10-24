import Image from 'next/image'
import { ArrowDown2, Clock, More, Timer1 } from 'iconsax-react'
import Timer from '../Timer'
import AtlassianLogo from '../assets/logos/atlassian.svg'
import LoomLogo from '../assets/logos/loom.svg'
import SketchLogo from '../assets/logos/sketch.svg'
import MoreIcon from '../assets/icons/more.svg'

function TimeTracker() {
    return (
        <div className='border text-gray-500 w-full p-3 rounded-2xl'>
            {/* header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm gap-2'>
                    <Timer1 size={18} />
                    <p className='text-gray-800 font-medium'>Time Tracker</p>
                </div>
                <button className='border flex items-center gap-1 px-2 py-1 rounded-lg text-xs'>
                    <Clock size={14} />
                    History
                </button>
            </div>

            <hr className='bg-gray-400 my-4' />

            {/* content */}
            <div>
                {/* timer */}
                <div className='rounded-lg border overflow-hidden'>
                    {/* timer head */}
                    <div className='bg-gray-100 py-1 px-2 flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                            <Image src={AtlassianLogo} alt='company' height={18} width={18} />
                            <p className='text-sm'>App Design</p>
                        </div>
                        <ArrowDown2 size={16} />
                    </div>

                    <Timer />
                </div>

                {/* previous tasks */}
                <div className='pt-3 space-y-3'>
                    <p className='text-xs text-gray-400'>Previous Tasks</p>
                    {/* tasks */}
                    <div className='space-y-3'>
                        {/* loom */}
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <div className='rounded-full p-1.5 border border-gray-300 shrink-0'>
                                    <Image src={LoomLogo} alt='loom' height={24} width={24} />
                                </div>
                                <div className='font-medium'>
                                    <p className='text-sm text-gray-800'>Loom recording</p>
                                    <p className='text-xs text-gray-500'>03:45</p>
                                </div>
                            </div>
                            <button>
                                <Image src={MoreIcon} alt='options' height={20} width={20} />
                            </button>
                        </div>

                        {/* loom */}
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2'>
                                <div className='rounded-full p-1.5 border border-gray-300 shrink-0'>
                                    <Image src={SketchLogo} alt='loom' height={24} width={24} />
                                </div>
                                <div className='font-medium'>
                                    <p className='text-sm text-gray-800'>Wireframe website</p>
                                    <p className='text-xs text-gray-500'>02:45:40</p>
                                </div>
                            </div>
                            <button>
                                <Image src={MoreIcon} alt='options' height={20} width={20} />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default TimeTracker