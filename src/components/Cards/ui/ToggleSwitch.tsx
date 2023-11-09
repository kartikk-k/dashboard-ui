import React from 'react'
import { motion } from 'framer-motion'


function ToggleSwitch({ isActive }: { isActive: boolean }) {

    const [active, setActive] = React.useState(isActive)
    return (
        <button onClick={() => setActive(!active)} className={`${active ? 'justify-end bg-primary' : 'justify-start bg-gray-300'} duration-200 w-8 h-5 border flex items-center px-1 rounded-full`}>
            <motion.span
                layout
                transition={{ duration: 0.2 }}
                className={`inline-block w-3 h-3 rounded-full bg-white`}
            />
        </button>
    )
}

export default ToggleSwitch