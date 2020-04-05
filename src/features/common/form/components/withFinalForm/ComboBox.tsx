import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleCombobox, { Props } from '@app/src/ui/Combobox';

export default withEnchancers<Props, any>()(SimpleCombobox);
