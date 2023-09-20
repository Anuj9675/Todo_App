import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';


const Todo = ({ id, name, status, checkTodo, deleteTodo }) => {
    return (
        <div className='w-full flex items-center justify-between border shadow rounded-md
        py-3 px-4 bg-white dark:bg-zinc-900 dark:border-slate-700 transition-all duration-300'>
            <div className={`${status ? 'line-through opacity-60' : ''}`}>
                <h2 className='text-lg dark:text-slate-200'>{name}</h2>
            </div>
            <div className='flex items-center gap-3'>
                <button onClick={() => checkTodo(id)}>
                    <AiFillCheckCircle className='w-6 h-6 text-green-600' />
                </button>
                <button onClick={() => deleteTodo(id)}>
                    <AiFillDelete className='w-6 h-6 text-red-600' />
                </button>
            </div>
        </div>
    )
}

export default Todo