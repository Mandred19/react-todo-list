import { muiList } from './muiList';
import { muiCheckbox } from './muiCheckbox';
import { muiInput } from './muiInput';
import { muiCard } from './muiCard';
import { muiForm } from './muiForm';
import { MuiPaper } from './muiPaper';

const muiStyles = {
  ...MuiPaper,

  ...muiList,
  ...muiCard,

  ...muiForm,

  ...muiCheckbox,
  ...muiInput,
};

export default muiStyles;
