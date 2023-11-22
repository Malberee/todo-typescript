import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PriorityLevel = 'low' | 'medium' | 'high'

interface Task {
  id: number
  text: string
  completed: boolean
  priority: PriorityLevel
}

const initialState: Task[] = []

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (
      state,
      action: PayloadAction<Pick<Task, 'text' | 'priority'>>
    ) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        priority: action.payload.priority,
      })
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.filter((task) => task.id !== action.payload)
    }
  },
})

export const { addTask, deleteTask } = todoSlice.actions
export default todoSlice.reducer
