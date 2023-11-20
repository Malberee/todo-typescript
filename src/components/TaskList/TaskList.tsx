import { Task } from '../App'

import TaskItem from '../TaskItem'

import { TaskListWrapper } from './TaskList.styled'

interface TaskListProps {
  tasks: Task[]
  deleteTask: (id: number) => void
  toggleCompleted: (id: number) => void
}

const TaskList = ({ tasks, deleteTask, toggleCompleted }: TaskListProps) => {
  return (
    <TaskListWrapper>
      {tasks?.map((task: Task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted}  />
      ))}
    </TaskListWrapper>
  )
}

export default TaskList
