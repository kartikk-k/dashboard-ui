import Image from 'next/image'
import { ArrowRight2, Calendar, Document, Element3, Folder2, Headphone, Profile2User, Setting2, Setting4, Star, Timer1, Triangle } from 'iconsax-react'
import ProfileImage from '../components/assets/profile.png'

function Sidebar() {

    return (
        <div className='w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden'>
            <div className='w-full h-full bg-white border-r'>
                {/* logo */}
                <div className='p-4 md:p-6 flex cursor-pointer group items-center gap-2'>
                    <div className='h-10 outline outline-violet-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-violet-500 to-violet-400 text-white'>
                        <Triangle size={24} className='relative group-hover:scale-75 duration-200' />
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-gray-800'>Githr</h1>
                        <p className='text-xs text-gray-500 font-medium'>HR Management</p>
                    </div>
                </div>

                {/* section divider */}
                <hr className='bg-gray-400 mx-2' />

                {/* other section */}
                <div className='flex flex-col h-full justify-between'>
                    {/* top */}
                    <div className='pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs'>
                        <button className='flex hover:px-8 duration-200 text-primary rounded-md w-full py-2 px-6 items-center gap-2'>
                            <Element3 variant='Outline' size={16} />
                            Dashboard
                        </button>

                        <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                            <Calendar size={16} />
                            Calendar
                        </button>

                        <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                            <Timer1 size={16} />
                            Time Off
                        </button>

                        <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                            <Folder2 size={16} />
                            Projects
                        </button>

                        <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                            <Profile2User size={16} />
                            Teams
                        </button>

                        <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                            <Setting4 size={16} />
                            Integrations
                        </button>

                        <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                            <Star size={16} />
                            Benefits
                        </button>

                        <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                            <Document size={16} />
                            Documents
                        </button>
                    </div>

                    <div>
                        <div className='text-gray-500 text-xs font-medium md:px-2'>
                            <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                                <Setting2 size={16} />
                                Settings
                            </button>

                            <button className='flex hover:px-8 duration-200 px-6 py-2 items-center gap-2'>
                                <Headphone size={16} />
                                Support
                            </button>
                        </div>

                        <hr className='bg-gray-400 mx-2 my-4' />

                        {/* bottom */}
                        <div className='flex pb-28 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={ProfileImage}
                                    alt='User'
                                    width={36}
                                    height={36}
                                    className='rounded-full'
                                />
                                <div className=''>
                                    <p className='text-sm font-semibold text-gray-800'>Steve Jobs</p>
                                    <p className='text-xs font-medium text-gray-500'>steve@apple.com</p>
                                </div>
                            </div>

                            <button className='text-gray-500'>
                                <ArrowRight2 size={16} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Sidebar