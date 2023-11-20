import { Task } from '../App'

import { TaskItemWrapper, DeleteBtn, CompletedState } from './TaskItem.styled'

interface TaskItemProps {
  task: Task
  deleteTask: (id: number) => void
  toggleCompleted: (id: number) => void
}

const TaskItem = ({ task, deleteTask, toggleCompleted }: TaskItemProps) => {
  return (
    <TaskItemWrapper>
      <p>{task.text}</p>
      <CompletedState>
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)}
          />
          {task.completed ? 'Completed' : 'Not completed'}
        </label>
      </CompletedState>
      <DeleteBtn type="button" onClick={() => deleteTask(task.id)}>
        Delete
      </DeleteBtn>
    </TaskItemWrapper>
  )
}

export default TaskItem
