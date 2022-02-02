import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'

interface ToDoInterface {
    id: number,
    task: string,
    completed: boolean
}

const ToDoList: React.FC = () => {
    const ToDo: Array<ToDoInterface> = [
        {id: 0, task: "ToDo1", completed: false},
        {id: 1, task: "ToDo2", completed: false},
        {id: 2, task: "ToDo3", completed: false},
    ]

    return (
        <div className='ToDoList'>
            {ToDo.map(item => <ToDoItem key={item.id} task={item.task} completed={item.completed} />)}
        </div>
    )
}

export default ToDoList