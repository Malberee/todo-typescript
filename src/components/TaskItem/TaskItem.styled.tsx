import styled from 'styled-components'

export const TaskItemWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #e9e9e9;
`

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
    background-color: #e03c30
  }
`

export const CompletedState = styled.div`
  display: flex;
  align-items: center;
`
