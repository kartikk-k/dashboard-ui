"use client"

import { redirect } from 'next/navigation'


function Home() {
  redirect('app/dashboard')
}

export default Home