import React, { FC, ReactElement, useState } from 'react';
import {
  Box,
  FormControl, FormControlLabel,
  InputLabel,
  OutlinedInput,
  Switch,
} from '@mui/material';
import { inputChangeEventType, inputChangeHandler } from '../../../utils/inputChangeHandler';
import AppModal from '../../../components/AppModal';
import { IUseModalVisibility } from '../../../hooks/useModalVisibility';

const AppContentHeaderAddItemModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const [itemTitle, setItemTitle] = useState<string>('');

  return (
    <AppModal
      headerText={'Add new item'}
      footerSubmitButtonText={'Save'}
      footerCancelButtonText={'Cancel'}
      visibilityHandlers={{modalVisibility, setModalVisibility}}>
      <>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="item-title-input">
            Title
          </InputLabel>

          <OutlinedInput
            id="item-title-input"
            type={'text'}
            value={itemTitle}
            onChange={(e: inputChangeEventType) => inputChangeHandler(e, setItemTitle)}
            fullWidth
            autoFocus
            label={'Title'}/>
        </FormControl>

        <Box>
          <FormControlLabel control={<Switch />} label="Set as favorite" />
        </Box>
      </>
    </AppModal>
  );
};

export default AppContentHeaderAddItemModal;
