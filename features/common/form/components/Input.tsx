import { compose } from 'recompose'

import withFinalForm from '@app/features/common/formHOCs/withFinalForm'
import withTooltip from '@app/features/common/formHOCs/withTooltip'

import SimpleInput, { Props } from '@app/ui/atoms/Input'

export default compose<Props, any>( // TODO: replace any with real props
  withFinalForm,
  withTooltip,
)(SimpleInput)
