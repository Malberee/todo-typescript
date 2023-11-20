import { useState } from 'react'
import { FormWrapper, Input, AddTaskBtn } from './Form.styled'

type FormProps = {
  addTask: (task: string) => void
}

const Form = ({ addTask }: FormProps) => {
  const [value, setValue] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTask(value)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={handleInput} />
      <AddTaskBtn type="submit">Add task</AddTaskBtn>
    </FormWrapper>
  )
}

export default Form
