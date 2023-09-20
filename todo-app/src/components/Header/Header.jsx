import React from 'react'
import { BsSun } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';


const Header = ({ displayMode, setDisplayMode }) => {
  return (
    <div className='w-full py-2 px-5 flex items-center justify-between '>
      <h1 className='font-bold text-5xl dark:text-slate-50 transition-all duration-300'>Todo List</h1>
      <button className='outline-none' onClick={() => setDisplayMode(displayMode === 'dark' ? 'light' : 'dark')}>
        {displayMode === 'light' || displayMode === null ? <BsSun className='w-10 h-10 p-2' />
          :
          <MdDarkMode className='w-10 h-10 p-2 text-slate-500' />}

      </button>
    </div>
  )
}

export default Header