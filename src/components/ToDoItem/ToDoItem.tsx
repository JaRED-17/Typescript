import React from 'react'

interface Props {
    task: string,
    completed: boolean
}

const ToDoItem: React.FC<Props> = (props: Props) => {
    const { task, completed } = props

    return <div>{task}{completed}</div>
}

export default ToDoItem