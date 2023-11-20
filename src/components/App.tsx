import { useState } from 'react'
import Form from './Form'
import TaskList from './TaskList'

import './App.scss'

export type PriorityLevel = 'low' | 'medium' | 'high'
export interface Task {
  id: number
  text: string
  completed: boolean
  priority: PriorityLevel
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (text: string, priority: PriorityLevel) => {
    const newTodo = { id: Date.now(), text, completed: false, priority }
    setTasks([...tasks, newTodo])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <>
      <Form addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      />
    </>
  )
}

export default App
