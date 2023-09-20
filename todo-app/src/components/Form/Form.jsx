import React from 'react'


const Form = ({ addTodoHandler, newTodo, setNewTodo }) => {


  return (
    <div className='w-full py-5 px-5 rounded-md '>
      <div className='w-full flex items-center justify-center gap-4 '>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type='text' className='border-2 rounded-md py-3 px-3 outline-none 
          w-5/6 dark:bg-zinc-700 dark:border-none dark:text-white dark:placeholder:text-gray-400' placeholder='What do you have planned ?' />
        <button onClick={addTodoHandler} className='font-bold bg-blue-500 text-white py-3 text-center rounded-md w-2/6 md:2/6'>ADD</button>
      </div>
    </div>
  )
}

export default Form