import Button, { Props } from '@app/ui/atoms/Button'
import withTooltip from '../../formHOCs/withTooltip'

export { ButtonSize, ButtonType } from '@app/ui/atoms/Button'
export default withTooltip<Props>(Button)
