import withEnchancers from '@app/features/common/formHOCs/withEnchancers';
import SimpleSelect, { Props } from '@app/ui/Select';

export default withEnchancers<Props, any>()(SimpleSelect);
// TODO: replace any with real props
