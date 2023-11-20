import React from 'react'

import { Task } from '../App'

import { TaskItemWrapper } from './TaskItem.styled'

type TaskItemProps = {
  task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <TaskItemWrapper>
          <p>{task.text}</p>
          <p>{task.completed ? 'Completed' : 'Not completed'}</p>
    </TaskItemWrapper>
  )
}

export default TaskItem
