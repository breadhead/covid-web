import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleRadioGroup, { Props } from '@app/src/ui/RadioGroup';

export default withEnchancers<Props, any>()(SimpleRadioGroup);
