import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className='p-4'>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Home