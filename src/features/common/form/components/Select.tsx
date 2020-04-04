import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleSelect, { Props } from '@app/ui/Select';

export default withEnchancers<Props, any>()(SimpleSelect);
// TODO: replace any with real props
