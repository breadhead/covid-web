import withEnchancers from '@app/features/common/formHOCs/withEnchancers'

import SimpleInput, { Props } from '@app/ui/Input'

export default withEnchancers<Props, any>()(SimpleInput)

export { InputType } from '@app/ui/Input'
