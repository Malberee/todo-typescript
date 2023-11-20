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
