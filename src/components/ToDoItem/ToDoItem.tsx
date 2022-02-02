import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

interface Props {
    task: string,
    completed: boolean
}

const ToDoItem: React.FC<Props> = (props: Props) => {
    const { task, completed } = props

    return (
        <div>
            {task}
            <FormControlLabel
                value="start"
                control={<Checkbox checked={completed} />}
                label="Completed"
                labelPlacement="start"
            />
        </div>
    )
}

export default ToDoItem