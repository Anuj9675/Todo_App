import React from 'react'
import Todo from '../Todo/Todo';

const TodoList = ({ todos, deleteTodoHandler, checkTodoHandler }) => {

    return (
        <div className='w-full h-auto py-6 px-5 bg-white mt-5 flex flex-col rounded-md items-center 
        gap-4 border-2 dark:border-none dark:bg-[#1e1e20] transition-all duration-300'>
            {todos.length === 0 ? <h1 className='text-sm text-slate-400'>No Todos...</h1> : todos.map((todo) => <Todo
                key={todo.id}
                name={todo.name}
                status={todo.status}
                id={todo.id}
                deleteTodo={deleteTodoHandler}
                checkTodo={checkTodoHandler}
            />)}

        </div>
    )
}

export default TodoList