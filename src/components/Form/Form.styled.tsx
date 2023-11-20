import styled from 'styled-components'

export const FormWrapper = styled.form`
  width: 400px;
  margin-bottom: 15px;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;

  border: 1px solid #dddddd;

  &:focus {
    outline: transparent;
    border-color: #4099ff;
  }
`

export const PrioritiesWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Priority = styled.li``

export const Label = styled.label`
  display: flex;
  gap: 3px;
  align-items: center;
`

export const PriorityRadiobutton = styled.input``

export const AddTaskBtn = styled.button`
  width: 100%;
  padding: 5px;
  border-radius: 5px;

  border-color: transparent;
  color: #ffffff;
  background-color: #4099ff;

  cursor: pointer;

  transition: background-color 100ms linear;

  &:hover {
    background-color: #2581eb;
  }
`
