import React, { FC, ReactElement, useState } from 'react';
import {
  Box, Checkbox,
  FormControl, FormControlLabel,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { inputChangeEventType, inputChangeHandler } from '../../../utils/inputChangeHandler';
import AppModal from '../../../components/AppModal';
import { IUseModalVisibility } from '../../../hooks/useModalVisibility';
import { switchChangeEventType, switchChangeHandler } from '../../../utils/switchChangeHandler';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { createTodoListItem } from '../../../store/actions/todoList.action';
import { useTranslation } from 'react-i18next';

const AddNewItemModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const { t } = useTranslation(['common', 'listItem']);
  const dispatch = useAppDispatch();
  const { isFetching: isPending } = useAppSelector((state) => state.todoListSlice);

  const [itemTitle, setItemTitle] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');
  const [itemIsFavorite, setItemIsFavorite] = useState<boolean>(false);

  const submitHandler = async (): Promise<void> => {
    await dispatch(createTodoListItem({
      title: itemTitle,
      description: itemDescription,
      isFavorite: itemIsFavorite,
    }));

    await resetForm();
  };

  const resetForm = (): void => {
    setItemTitle('');
    setItemDescription('');
    setItemIsFavorite(false);
  };

  return (
    <AppModal
      headerText={t('add_new_task_modal_title', { ns: 'listItem' })}
      footerSubmitButtonText={t('common_create_text')}
      footerCancelButtonText={t('common_cancel_text')}
      visibilityHandlers={{modalVisibility, setModalVisibility}}
      submitHandler={submitHandler}
      submitButtonType={'primary'}
      isPending={isPending}>
      <>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="item-title-input">
            {t('list_item_title_input_label', { ns: 'listItem' })}
          </InputLabel>

          <OutlinedInput
            id="item-title-input"
            type={'text'}
            value={itemTitle}
            onChange={(e: inputChangeEventType) => inputChangeHandler(e, setItemTitle)}
            fullWidth
            autoFocus
            label={t('list_item_title_input_label', { ns: 'listItem' })}/>
        </FormControl>

        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="item-description-input">
            {t('list_item_desc_input_label', { ns: 'listItem' })}
          </InputLabel>

          <OutlinedInput
            id="item-description-input"
            type={'text'}
            multiline={true}
            minRows={3}
            maxRows={6}
            value={itemDescription}
            onChange={(e: inputChangeEventType) => inputChangeHandler(e, setItemDescription)}
            fullWidth
            label={t('list_item_desc_input_label', { ns: 'listItem' })}/>
        </FormControl>

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e: switchChangeEventType) => switchChangeHandler(e, setItemIsFavorite)}
                checked={itemIsFavorite}
                title={t('list_item_favorite_button_title', { ns: 'listItem' })} />
            }
            label={t('list_item_favorite_button_title', { ns: 'listItem' })} />
        </Box>
      </>
    </AppModal>
  );
};

export default AddNewItemModal;
