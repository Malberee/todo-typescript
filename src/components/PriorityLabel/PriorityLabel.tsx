import { PriorityLabelWrapper } from './PriorityLabel.styled'

import { PriorityLevelType } from '../App'

interface PriorityLabelProps {
  priority: PriorityLevelType
}

const PriorityLabel = ({ priority }: PriorityLabelProps) => {
  return (
    <PriorityLabelWrapper priority={priority}>{priority}</PriorityLabelWrapper>
  )
}

export default PriorityLabel
