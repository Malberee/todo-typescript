import React from 'react'

import { Task } from '../App'

import TaskItem from '../TaskItem'

import { TaskListWrapper } from './TaskList.styled'

interface TaskListProps {
  tasks: Task[]
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <TaskListWrapper>
      {tasks?.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListWrapper>
  )
}

export default TaskList
