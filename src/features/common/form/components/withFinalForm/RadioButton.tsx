import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleRadioButton, {Props} from '@app/src/ui/RadioButton';

export default withEnchancers<Props, any>()(SimpleRadioButton);
