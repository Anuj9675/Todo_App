import React from 'react'
import { BsSun } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'


const DarkMode = ({ displayMode, setDisplayMode }) => {
    return (
        <div className='flex items-center justify-center'>
            <button className='border-slate-100' onClick={() => setDisplayMode(displayMode === 'dark' ? 'light' : 'dark')}>
                {displayMode === 'light' ? (
                    <BsSun className='w-10 h-10 rounded-full p-2' />
                ) : (
                    <MdDarkMode className='text-white w-10 h-10 rounded-full p-2' />
                )}
            </button>
        </div>
    )
}

export default DarkMode