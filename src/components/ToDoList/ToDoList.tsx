import React from 'react'
import List from '@mui/material/List'
import ToDoItem from '../ToDoItem/ToDoItem'
import ToDo from '../../types/interfaces'

const ToDoList: React.FC = () => {
    const ToDoItems: Array<ToDo> = [
        { id: 0, task: 'ToDo1', completed: false },
        { id: 1, task: 'ToDo2', completed: false },
        { id: 2, task: 'ToDo3', completed: false },
    ]

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#f5f5f5' }}>
            {ToDoItems.map(item => (
                <ToDoItem
                    key={item.id}
                    id={item.id}
                    task={item.task}
                    completed={item.completed}
                />
            ))}
        </List>
    )
}

export default ToDoList
