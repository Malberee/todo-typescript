import { Task } from '../App'

import PriorityLabel from '../PriorityLabel'

import {
  TaskItemWrapper,
  DeleteBtn,
  CompletedState,
  TaskText,
} from './TaskItem.styled'

interface TaskItemProps {
  task: Task
  deleteTask: (id: number) => void
  toggleCompleted: (id: number) => void
}

const TaskItem = ({ task, deleteTask, toggleCompleted }: TaskItemProps) => {
  return (
    <TaskItemWrapper>
      <CompletedState>
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)}
          />
        </label>
        <PriorityLabel priority={task.priority} />
      </CompletedState>
      <TaskText completed={task.completed}>{task.text}</TaskText>
      <DeleteBtn type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </DeleteBtn>
    </TaskItemWrapper>
  )
}

export default TaskItem
