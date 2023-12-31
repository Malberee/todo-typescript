import styled, { css } from 'styled-components'

export const TaskItemWrapper = styled.li`
  padding: 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #e9e9e9;
`

interface TaskTextProps {
  completed: 'true' | 'false'
}

export const TaskText = styled.p<TaskTextProps>(({ completed }) => {
  return css`
    text-decoration: ${completed == 'true' ? 'line-through' : 'none'};
  `
})

export const DeleteBtn = styled.button`
  height: 40px;
  padding: 5px;
  border-radius: 5px;

  border-color: transparent;
  color: #ffffff;
  background-color: #ff4d40;

  cursor: pointer;

  transition: background-color 100ms linear;

  &:hover {
    background-color: #e03c30;
  }
`

export const CompletedState = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
`
