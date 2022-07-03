import { muiList } from './muiList';
import { muiCheckbox } from './muiCheckbox';
import { muiInput } from './muiInput';
import { muiCard } from './muiCard';
import { muiForm } from './muiForm';

const muiStyles = {
  ...muiList,
  ...muiCard,

  ...muiForm,

  ...muiCheckbox,
  ...muiInput,
};

export default muiStyles;
