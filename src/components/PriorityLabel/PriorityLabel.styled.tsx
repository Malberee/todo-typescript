import styled, {css} from 'styled-components';
import { PriorityLevelType } from '../App'

interface PriorityLevelProps {
  priority: PriorityLevelType
}

export const PriorityLabelWrapper = styled.span<PriorityLevelProps>(({ priority }) => {
  let color = '#4099ff'

  if (priority === 'medium') color = '#ffb340'
  if (priority === 'high') color = '#ff4d40'

  return css`
    padding: 3px;
    border-radius: 3px;
    background-color: ${color};
    color: #ffffff;
  `
})
