import { muiList } from './muiList';
import { muiCheckbox } from './muiCheckbox';
import { muiInput } from './muiInput';
import { muiCard } from './muiCard';
import { muiForm } from './muiForm';
import { MuiPaper } from './muiPaper';
import { muiAvatar } from './muiAvatar';

const muiStyles = {
  ...muiAvatar,

  ...MuiPaper,

  ...muiList,
  ...muiCard,

  ...muiForm,

  ...muiCheckbox,
  ...muiInput,
};

export default muiStyles;
