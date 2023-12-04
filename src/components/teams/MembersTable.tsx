import { Table, TableBody, TableHeader, TableItem, TableRow } from '../ui/Table'
import { ArrowSwapVertical, Slash, TickCircle } from 'iconsax-react'
import Image from 'next/image'
import LoomLogo from '@/components/assets/logos/loom.svg'
import SlackLogo from '@/components/assets/logos/slack.svg'
import SketchLogo from '@/components/assets/logos/sketch.svg'
import AtlassianLogo from '@/components/assets/logos/atlassian.svg'
import PDFIcon from '@/components/assets/icons/pdfIcon.svg'
import Avatar2 from '@/components/assets/avatars/avatar2.png'
import Avatar5 from '@/components/assets/avatars/avatar5.png'
import Avatar8 from '@/components/assets/avatars/avatar8.png'
import Avatar9 from '@/components/assets/avatars/avatar9.png'
import MoreIcon from '@/components/assets/icons/more.svg'

function MembersTable() {
    return (
        <div className='w-full overflow-x-auto'>
            <Table>
                {/* table header */}
                <TableHeader>
                    <TableItem>
                        Member name
                        <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Title
                        <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Project
                        <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem>
                        Member Document
                        <ArrowSwapVertical size={12} />
                    </TableItem>
                    <TableItem className='w-[180px]'>
                        Status
                        <ArrowSwapVertical size={12} />
                    </TableItem>
                </TableHeader>

                {/* table rows */}
                <TableBody>
                    <TableRow>

                        <TableItem>
                            <Image src={Avatar2} alt='James Brown' className='w-8 rounded-full' />
                            <div>
                                <p className='text-gray-800 font-medium'>James Brown</p>
                                <p className='text-xs'>james@example.com</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div>
                                <p className='text-gray-800 font-medium'>Marketing manager</p>
                                <p className='text-xs'>Since Aug, 2020</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div className='rounded-full p-1.5 border border-gray-300 shrink-0'>
                                <Image src={LoomLogo} alt='loom' height={24} width={24} />
                            </div>
                            <div>
                                <p className='text-gray-800 font-medium'>Loom</p>
                                <p className='text-xs'>Data analysis</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <Image src={PDFIcon} alt='pdf' height={32} />
                            <div>
                                <p className='text-gray-800 font-medium'>brown-james.pdf</p>
                                <p className='text-xs'>2.3 MB</p>
                            </div>
                        </TableItem>

                        <TableItem className='justify-between w-[180px]'>
                            <div className='flex items-center gap-1 border rounded-full p-1'>
                                <TickCircle size={16} variant='Bold' className='text-emerald-500' />
                                <p className='text-xs'>Active</p>
                            </div>
                            <button className='hover:bg-gray-200 rounded-md'>
                                <Image src={MoreIcon} alt='options' height={18} />
                            </button>
                        </TableItem>

                    </TableRow>

                    <TableRow>

                        <TableItem>
                            <Image src={Avatar8} alt='James Brown' className='w-8 rounded-full' />
                            <div>
                                <p className='text-gray-800 font-medium'>Sophia Williams</p>
                                <p className='text-xs'>sophia@example.com</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div>
                                <p className='text-gray-800 font-medium'>HR Assistant</p>
                                <p className='text-xs'>Since Oct, 2023</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div className='rounded-full p-1.5 border border-gray-300 shrink-0'>
                                <Image src={SlackLogo} alt='slack' height={24} width={24} />
                            </div>
                            <div>
                                <p className='text-gray-800 font-medium'>Slack</p>
                                <p className='text-xs'>Team management</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <Image src={PDFIcon} alt='pdf' height={32} />
                            <div>
                                <p className='text-gray-800 font-medium'>sophia-williams.pdf</p>
                                <p className='text-xs'>1.2 MB</p>
                            </div>
                        </TableItem>

                        <TableItem className='justify-between w-[180px]'>
                            <div className='flex items-center gap-1 border rounded-full p-1'>
                                <Slash size={16} variant='Bold' className='text-gray-400' />
                                <p className='text-xs'>Absent</p>
                            </div>
                            <button className='hover:bg-gray-200 rounded-md'>
                                <Image src={MoreIcon} alt='options' height={18} />
                            </button>
                        </TableItem>

                    </TableRow>


                    <TableRow>

                        <TableItem>
                            <Image src={Avatar5} alt='James Brown' className='w-8 rounded-full' />
                            <div>
                                <p className='text-gray-800 font-medium'>Arthur Taylor</p>
                                <p className='text-xs'>arthur@example.com</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div>
                                <p className='text-gray-800 font-medium'>Entrepreneur / CEO</p>
                                <p className='text-xs'>Since Dec, 2018</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div className='rounded-full p-1.5 border border-gray-300 shrink-0'>
                                <Image src={SketchLogo} alt='slack' height={24} width={24} />
                            </div>
                            <div>
                                <p className='text-gray-800 font-medium'>Sketch</p>
                                <p className='text-xs'>Vision & Goal setting</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <Image src={PDFIcon} alt='pdf' height={32} />
                            <div>
                                <p className='text-gray-800 font-medium'>arthur-taylor.pdf</p>
                                <p className='text-xs'>2.8 MB</p>
                            </div>
                        </TableItem>

                        <TableItem className='justify-between w-[180px]'>
                            <div className='flex items-center gap-1 border rounded-full p-1'>
                                <TickCircle size={16} variant='Bold' className='text-emerald-500' />
                                <p className='text-xs'>Active</p>
                            </div>
                            <button className='hover:bg-gray-200 rounded-md'>
                                <Image src={MoreIcon} alt='options' height={18} />
                            </button>
                        </TableItem>

                    </TableRow>

                    <TableRow>

                        <TableItem>
                            <Image src={Avatar9} alt='James Brown' className='w-8 rounded-full' />
                            <div>
                                <p className='text-gray-800 font-medium'>Emma Wright</p>
                                <p className='text-xs'>emma@example.com</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div>
                                <p className='text-gray-800 font-medium'>Frontend developer</p>
                                <p className='text-xs'>Since Jan, 2023</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <div className='rounded-full p-1.5 border border-gray-300 shrink-0'>
                                <Image src={AtlassianLogo} alt='slack' height={24} width={24} />
                            </div>
                            <div>
                                <p className='text-gray-800 font-medium'>Atlassian</p>
                                <p className='text-xs'>Update UX</p>
                            </div>
                        </TableItem>

                        <TableItem>
                            <Image src={PDFIcon} alt='pdf' height={32} />
                            <div>
                                <p className='text-gray-800 font-medium'>emma-wright.pdf</p>
                                <p className='text-xs'>2.6 MB</p>
                            </div>
                        </TableItem>

                        <TableItem className='justify-between w-[180px]'>
                            <div className='flex items-center gap-1 border rounded-full p-1'>
                                <TickCircle size={16} variant='Bold' className='text-emerald-500' />
                                <p className='text-xs'>Active</p>
                            </div>
                            <button className='hover:bg-gray-200 rounded-md'>
                                <Image src={MoreIcon} alt='options' height={18} />
                            </button>
                        </TableItem>

                    </TableRow>

                </TableBody>

            </Table>


        </div>
    )
}

export default MembersTable