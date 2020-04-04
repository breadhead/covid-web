import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleRadioGroup, { Props } from '@app/ui/RadioGroup';

export default withEnchancers<Props, any>()(SimpleRadioGroup);
