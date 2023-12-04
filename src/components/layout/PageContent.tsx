import React from 'react'

function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <main className='p-4 w-full md:p-6 space-y-4'>
            {children}
        </main>
    )
}

export default PageContent