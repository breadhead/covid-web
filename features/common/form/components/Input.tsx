import { compose } from 'recompose'

import withFinalForm from '../HOCs/withFinalForm'
import withTooltip from '../HOCs/withTooltip'

import SimpleInput, { Props } from '@app/ui/atoms/Input'

export default compose<Props, any>( // TODO: replace any with real props
  withFinalForm,
  withTooltip,
)(SimpleInput)
