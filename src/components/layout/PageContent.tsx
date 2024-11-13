import React from 'react'

function PageContent({ children }: { children: React.ReactNode }) {
    return (
        <main className='p-4 w-full md:p-6 space-y-4 h-[calc(99vh-var(--h-nav))] overflow-y-auto'>
            {children}
        </main>
    )
}

export default PageContent
