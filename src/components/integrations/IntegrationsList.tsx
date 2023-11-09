import React from 'react'
import Image from 'next/image'
import ToggleSwitch from '../Cards/ui/ToggleSwitch'
import { Setting2 } from 'iconsax-react'
import MSOfficeLogo from '@/components/assets/logos/msoffice.svg'
import ZoomLogo from '@/components/assets/logos/zoom.svg'
import SlackLogo from '@/components/assets/logos/slack.svg'
import GithubLogo from '@/components/assets/logos/github.svg'

function IntegrationsList() {
    return (
        <div className='text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

            {/* app 1 */}
            <div className='border rounded-xl flex flex-col justify-between p-2.5 space-y-2'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='p-1.5 border rounded-md w-8 h-8 flex items-center justify-center'>
                            <Image src={MSOfficeLogo} alt='MS Office' />
                        </div>
                        <ToggleSwitch isActive />
                    </div>

                    <div>
                        <h1 className='text-gray-800 font-medium'>Microsoft Office 365</h1>
                        <p className='text-xs text-gray-500'>Seamless document management</p>
                    </div>
                </div>

                <button className='flex text-xs group text-gray-500 font-medium rounded-lg w-full items-center justify-center gap-1 border px-2 py-1'>
                    <Setting2 size={16} className='group-hover:rotate-90 duration-300' />
                    <span>Manage</span>
                </button>
            </div>

            {/* app 2 */}
            <div className='border rounded-xl flex flex-col justify-between p-2.5 space-y-2'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='p-1.5 border rounded-md w-8 h-8 flex items-center justify-center'>
                            <Image src={ZoomLogo} alt='Zoom' />
                        </div>
                        <ToggleSwitch isActive={false} />
                    </div>

                    <div>
                        <h1 className='text-gray-800 font-medium'>Zoom</h1>
                        <p className='text-xs text-gray-500'>For conducting virtual meetings and interviews</p>
                    </div>
                </div>

                <button className='flex text-xs group text-gray-500 font-medium rounded-lg w-full items-center justify-center gap-1 border px-2 py-1'>
                    <Setting2 size={16} className='group-hover:rotate-90 duration-300' />
                    <span>Manage</span>
                </button>

            </div>

            {/* app 3 */}
            <div className='border rounded-xl flex flex-col justify-between p-2.5 space-y-2'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='p-1.5 border rounded-md w-8 h-8 flex items-center justify-center'>
                            <Image src={SlackLogo} alt='Slack' />
                        </div>
                        <ToggleSwitch isActive={false} />
                    </div>

                    <div>
                        <h1 className='text-gray-800 font-medium'>Slack</h1>
                        <p className='text-xs text-gray-500'>For team communication and real-time collaboration</p>
                    </div>
                </div>

                <button className='flex text-xs group text-gray-500 font-medium rounded-lg w-full items-center justify-center gap-1 border px-2 py-1'>
                    <Setting2 size={16} className='group-hover:rotate-90 duration-300' />
                    <span>Manage</span>
                </button>

            </div>

            {/* app 4 */}
            <div className='border rounded-xl flex flex-col justify-between p-2.5 space-y-2'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <div className='p-1.5 border rounded-md w-8 h-8 flex items-center justify-center'>
                            <Image src={GithubLogo} alt='Github' />
                        </div>
                        <ToggleSwitch isActive={false} />
                    </div>

                    <div>
                        <h1 className='text-gray-800 font-medium'>Github</h1>
                        <p className='text-xs text-gray-500'>For hosting and managing code</p>
                    </div>
                </div>

                <button className='flex text-xs group text-gray-500 font-medium rounded-lg w-full items-center justify-center gap-1 border px-2 py-1'>
                    <Setting2 size={15} className='group-hover:rotate-90 duration-300' />
                    <span>Manage</span>
                </button>

            </div>

        </div>
    )
}

export default IntegrationsList