import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ToDo from '../../types/interfaces'

const ToDoItem: React.FC<ToDo> = (props: ToDo) => {
    const { id, task, completed } = props
    const [checked, setChecked] = React.useState(completed)

    const handleToggle = (value: boolean) => () => {
        setChecked(!value)
    }

    return (
        <ListItem
            key={id}
            secondaryAction={
                <Checkbox onChange={handleToggle(checked)} checked={checked} />
            }
        >
            <ListItemText primary={task} />
        </ListItem>
    )
}

export default ToDoItem
