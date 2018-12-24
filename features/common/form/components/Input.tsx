import withEnchancers from '@app/features/common/formHOCs/withEnchancers'

import SimpleInput, { Props } from '@app/ui/atoms/Input'

export default withEnchancers<Props, any>()(SimpleInput)
