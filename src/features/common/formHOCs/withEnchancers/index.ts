import {compose} from 'recompose';

import withFinalForm from '@app/src/features/common/formHOCs/withFinalForm';
import withTooltip from '@app/src/features/common/formHOCs/withTooltip';

export default <Before, After>() =>
  compose<Before, After>(withFinalForm, withTooltip);
