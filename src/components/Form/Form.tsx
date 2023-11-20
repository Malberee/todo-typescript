import { useState } from 'react'

import PriorityLabel from '../PriorityLabel'
import {
  FormWrapper,
  Input,
  PrioritiesWrapper,
  Label,
  PriorityRadiobutton,
  AddTaskBtn,
} from './Form.styled'
import { PriorityLevel } from '../App'

interface FormProps {
  addTask: (task: string, priority: PriorityLevel) => void
}

const Form = ({ addTask }: FormProps) => {
  const [value, setValue] = useState('')
  const [priority, setPriority] = useState<PriorityLevel>('low')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (value.trim() === '') return
    addTask(value, priority)
    setValue('')
    setPriority('low')
  }

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.id as PriorityLevel)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={handleInput} />
      <PrioritiesWrapper>
        <Label>
          <PriorityRadiobutton
            type="radio"
            name="priority"
            id="low"
            onChange={handleChangePriority}
            checked={priority === 'low'}
          />
          <PriorityLabel priority="low" />
        </Label>
        <Label>
          <PriorityRadiobutton
            type="radio"
            name="priority"
            id="medium"
            onChange={handleChangePriority}
            checked={priority === 'medium'}
          />
          <PriorityLabel priority="medium" />
        </Label>
        <Label>
          <PriorityRadiobutton
            type="radio"
            name="priority"
            id="high"
            onChange={handleChangePriority}
            checked={priority === 'high'}
          />
          <PriorityLabel priority="high" />
        </Label>
      </PrioritiesWrapper>
      <AddTaskBtn type="submit">Add task</AddTaskBtn>
    </FormWrapper>
  )
}

export default Form
