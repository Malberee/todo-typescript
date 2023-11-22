import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PriorityLevel = 'low' | 'medium' | 'high'

export interface Task {
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
      return state.filter((task) => task.id !== action.payload)
    },
    toggleCompleted: (state, action: PayloadAction<number>) => {
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      )
    },
  },
})

export const { addTask, deleteTask, toggleCompleted } = todoSlice.actions
export default todoSlice.reducer
