import { PriorityLabelWrapper } from './PriorityLabel.styled'

import { PriorityLevel } from '../../todoSlice'

interface PriorityLabelProps {
  priority: PriorityLevel
}

const PriorityLabel = ({ priority }: PriorityLabelProps) => {
  return (
    <PriorityLabelWrapper priority={priority}>{priority}</PriorityLabelWrapper>
  )
}

export default PriorityLabel
