import Button, { Props } from '@app/ui/Button'
import withTooltip from '../../formHOCs/withTooltip'

export { ButtonSize, ButtonType, ButtonKind } from '@app/ui/Button'
export default withTooltip<Props>(Button)
