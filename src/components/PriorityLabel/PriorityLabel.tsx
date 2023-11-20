import { PriorityLabelWrapper } from './PriorityLabel.styled'

import { PriorityLevel } from '../App'

interface PriorityLabelProps {
  priority: PriorityLevel
}

const PriorityLabel = ({ priority }: PriorityLabelProps) => {
  return (
    <PriorityLabelWrapper priority={priority}>{priority}</PriorityLabelWrapper>
  )
}

export default PriorityLabel
