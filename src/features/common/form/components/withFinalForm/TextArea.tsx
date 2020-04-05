import withEnchancers from '@app/src/features/common/formHOCs/withEnchancers';
import SimpleTextArea, {Props} from '@app/src/ui/TextArea';

export default withEnchancers<Props, any>()(SimpleTextArea);
