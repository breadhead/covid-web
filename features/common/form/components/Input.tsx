import { compose } from 'recompose'

import withFinalForm from '../HOCs/withFinalForm'
import withTooltip from '../HOCs/withTooltip'

import SimpleInput from '@app/ui/atoms/Input'

export default compose(
  withFinalForm,
  withTooltip,
)(SimpleInput)
