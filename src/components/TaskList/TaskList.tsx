import { useSelector } from 'react-redux'

import { Task } from '../../todoSlice'
import TaskItem from '../TaskItem'

import { RootState } from '../../store'

import { TaskListWrapper } from './TaskList.styled'

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.todos)

  return (
    <TaskListWrapper>
      {tasks?.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TaskListWrapper>
  )
}

export default TaskList
