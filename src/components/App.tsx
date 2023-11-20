import { useState } from 'react'
import Form from './Form'
import TaskList from './TaskList'

import './App.scss'

export interface Task {
  id: number
  text: string
  completed: boolean
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTodo])
  }

  return (
    <>
      <Form addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
