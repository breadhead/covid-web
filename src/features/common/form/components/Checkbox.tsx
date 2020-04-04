import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import Checkbox, { Props } from '@app/ui/Checkbox';

export default withEnchancers<Props, any>()(Checkbox);
