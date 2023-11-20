import styled, { css } from 'styled-components'
import { PriorityLevel } from '../App'

interface PriorityLevelProps {
  priority: PriorityLevel
}

export const PriorityLabelWrapper = styled.span<PriorityLevelProps>(
  ({ priority }) => {
    let color = '#4099ff'

    if (priority === 'medium') color = '#ffb340'
    if (priority === 'high') color = '#ff4d40'

    return css`
      padding: 3px;
      border-radius: 3px;
      background-color: ${color};
      color: #ffffff;
      text-transform: capitalize;
    `
  }
)
