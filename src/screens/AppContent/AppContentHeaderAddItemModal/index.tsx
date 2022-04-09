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
import { switchChangeEventType, switchChangeHandler } from '../../../utils/switchChangeHandler';
import { createTodoListItem } from '../../../store/actions/todoLIstActions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const AppContentHeaderAddItemModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const dispatch = useAppDispatch();
  const {isPending} = useAppSelector((state) => state.todoListSlice);

  const [itemTitle, setItemTitle] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');
  const [itemIsFavorite, setItemIsFavorite] = useState<boolean>(false);

  const submitHandler = async (): Promise<void> => {
    await dispatch(createTodoListItem({
      id: itemTitle,
      title: itemTitle,
      description: itemDescription,
      creationDate: new Date(),
      isFavorite: itemIsFavorite,
      isComplete: false,
    }));

    await resetForm();
  };

  const resetForm = (): void => {
    setItemTitle('');
    setItemIsFavorite(false);
  };

  return (
    <AppModal
      headerText={'Add new item'}
      footerSubmitButtonText={'Create'}
      footerCancelButtonText={'Cancel'}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      isPending={isPending}>
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

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="item-description-input">
            Description
          </InputLabel>

          <OutlinedInput
            id="item-description-input"
            type={'text'}
            multiline={true}
            maxRows={4}
            value={itemDescription}
            onChange={(e: inputChangeEventType) => inputChangeHandler(e, setItemDescription)}
            fullWidth
            label={'Description'}/>
        </FormControl>

        <Box>
          <FormControlLabel
            control={
              <Switch
                checked={itemIsFavorite}
                onChange={(e: switchChangeEventType) => switchChangeHandler(e, setItemIsFavorite)}/>
            }
            label="Set as favorite" />
        </Box>
      </>
    </AppModal>
  );
};

export default AppContentHeaderAddItemModal;
