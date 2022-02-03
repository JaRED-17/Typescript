import React from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import List from '@mui/material/List'

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
        <List sx={{ width: '100%', maxWidth: 360, bgColor: '#f5f5f5' }}>
            {ToDo.map(item => <ToDoItem key={item.id} {...item} />)}
        </List>
    )
}

export default ToDoList