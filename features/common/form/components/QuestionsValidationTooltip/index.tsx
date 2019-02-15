import ValidationTooltip from '../ValidationTooltip'
import { validateCb } from './validateCb'

interface Props {
  name: string
}

const QuestionsValidationTooltip = ({ name }: Props) => (
  <ValidationTooltip
    name={name}
    validateOnBlur={false}
    validateCb={validateCb}
  />
)

export default QuestionsValidationTooltip
