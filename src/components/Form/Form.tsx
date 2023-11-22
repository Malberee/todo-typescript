import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { PriorityLevel } from '../../todoSlice'
import PriorityLabel from '../PriorityLabel'
import { addTask } from '../../todoSlice'
import {
  FormWrapper,
  Input,
  PrioritiesWrapper,
  Label,
  PriorityRadiobutton,
  AddTaskBtn,
} from './Form.styled'

const Form = () => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState<PriorityLevel>('low')
  const dispatch = useDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (text.trim() === '') return
    dispatch(addTask({ text, priority }))
    setText('')
    setPriority('low')
  }

  const handleChangePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.id as PriorityLevel)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type="text" value={text} onChange={handleInput} />
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
