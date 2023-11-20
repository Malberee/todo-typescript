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
import { PriorityLevelType } from '../App'

interface FormProps {
  addTask: (task: string, priority: PriorityLevelType) => void
}

const Form = ({ addTask }: FormProps) => {
  const [value, setValue] = useState('')
  const [priority, setPriority] = useState<PriorityLevelType>('low')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e)

    if (value.trim() === '') return
    addTask(value, priority)
  }

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.id as PriorityLevelType)
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
          />
          <PriorityLabel priority="low"/>
        </Label>
        <Label>
          <PriorityRadiobutton
            type="radio"
            name="priority"
            id="medium"
            onChange={handleChangePriority}
          />
          <PriorityLabel priority="medium"/>
        </Label>
        <Label>
          <PriorityRadiobutton
            type="radio"
            name="priority"
            id="high"
            onChange={handleChangePriority}
          />
          <PriorityLabel priority="high"/>
        </Label>
      </PrioritiesWrapper>
      <AddTaskBtn type="submit">Add task</AddTaskBtn>
    </FormWrapper>
  )
}

export default Form
