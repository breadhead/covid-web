import withEnchancers from '@app/features/common/formHOCs/withEnchancers';
import SimpleTextArea, { Props } from '@app/ui/TextArea';

export default withEnchancers<Props, any>()(SimpleTextArea);
