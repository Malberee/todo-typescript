import { Task } from '../../todoSlice'
import { useDispatch } from 'react-redux'

import PriorityLabel from '../PriorityLabel'

import { deleteTask, toggleCompleted } from '../../todoSlice'

import {
  TaskItemWrapper,
  DeleteBtn,
  CompletedState,
  TaskText,
  Label,
} from './TaskItem.styled'

interface TaskItemProps {
  task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
  const dispatch = useDispatch()
  return (
    <TaskItemWrapper>
      <CompletedState>
        <Label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleCompleted(task.id))}
          />
        </Label>
        <PriorityLabel priority={task.priority} />
      </CompletedState>
      <TaskText completed={`${task.completed}`}>{task.text}</TaskText>
      <DeleteBtn type="button" onClick={() => dispatch(deleteTask(task.id))}>
        Delete
      </DeleteBtn>
    </TaskItemWrapper>
  )
}

export default TaskItem
