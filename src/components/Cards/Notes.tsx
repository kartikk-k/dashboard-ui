import { Add, Calendar2, NoteText, TickCircle } from 'iconsax-react'

function Notes() {
    return (
        <div className='border text-gray-500 w-full  p-3 rounded-2xl'>
            {/* header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm gap-2'>
                    <NoteText size={18} />
                    <p className='text-gray-800 font-medium'>Notes</p>
                </div>
                <button className='border flex items-center gap-1 px-2 py-1 rounded-lg text-xs'>
                    <Add size={14} />
                    Add new
                </button>
            </div>

            <hr className='bg-gray-400 my-4' />

            {/* content */}
            <div className='space-y-3'>
                {/* note 1 */}
                <div className='flex items-start gap-3 w-full'>
                    <button className='w-4 shrink-0 mt-1 h-4 border-2 border-gray-300 rounded-full' />
                    <div className='w-full space-y-1'>
                        <p className='text-sm text-gray-800 font-medium'>Landing page</p>
                        <p className='text-xs'>Search for inspiration to create landing page for AI startup.</p>
                        <div className='flex justify-between items-end'>
                            <div className='space-x-2 font-medium'>
                                <button className='text-xxs px-2 py-0.5 rounded-full bg-red-100 text-red-500'>Today</button>
                                <button className='text-xxs px-2 py-0.5 rounded-full bg-orange-100 text-orange-500'>To-do</button>
                            </div>
                            <p className='flex items-center gap-1 text-xxs'>
                                <Calendar2 size={12} />
                                26 Oct
                            </p>
                        </div>
                    </div>
                </div>

                <hr className='bg-gray-400' />

                {/* note 2 */}
                <div className='flex items-start gap-3 w-full opacity-70'>
                    {/* <button className='w-4 shrink-0 mt-1 h-4 border-2 border-gray-300 rounded-full' /> */}
                    <TickCircle size={22} variant='Bold' className='text-green-500' />
                    <div className='w-full space-y-1'>
                        <p className='text-sm text-gray-800 font-medium'>Meeting with CTO</p>
                        <p className='text-xs'>Discuss about application architecture and approach.</p>
                        <div className='flex justify-between items-end'>
                            <div className='space-x-2 font-medium'>
                                <button className='text-xxs px-2 py-0.5 rounded-full bg-red-100 text-red-500'>Today</button>
                                <button className='text-xxs px-2 py-0.5 rounded-full bg-orange-100 text-orange-500'>Meeting</button>
                            </div>
                            <p className='flex items-center gap-1 text-xxs'>
                                <Calendar2 size={12} />
                                26 Oct
                            </p>
                        </div>
                    </div>
                </div>

                <hr className='bg-gray-400' />

                {/* note 3 */}
                <div className='flex items-start gap-3 w-full opacity-70'>
                    {/* <button className='w-4 shrink-0 mt-1 h-4 border-2 border-gray-300 rounded-full' /> */}
                    <TickCircle size={22} variant='Bold' className='text-green-500' />
                    <div className='w-full space-y-1'>
                        <p className='text-sm text-gray-800 font-medium'>Team meeting</p>
                        <p className='text-xs'>Discuss about client requirements and deadline.</p>
                        <div className='flex justify-between items-end'>
                            <div className='space-x-2 font-medium'>
                                <button className='text-xxs px-2 py-0.5 rounded-full bg-violet-100 text-violet-500'>Team</button>
                                <button className='text-xxs px-2 py-0.5 rounded-full bg-orange-100 text-orange-500'>Meeting</button>
                            </div>
                            <p className='flex items-center gap-1 text-xxs'>
                                <Calendar2 size={12} />
                                25 Oct
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes