import React, { FC, ReactElement, useState } from 'react';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AppContentHeaderAddItemModal from './AppContentHeaderAddItemModal';
import { inputChangeEventType, inputChangeHandler } from '../../utils/inputChangeHandler';
import { useModalVisibility } from '../../hooks/useModalVisibility';
import { useAppSelector } from '../../store/hooks';

const AppContentHeader: FC = (): ReactElement => {
  const {todoList} = useAppSelector((state) => state.todoListSlice);
  const [searchValue, setSearchValue] = useState<string>('');
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  const openModalHandler = () => {
    setModalVisibility(true);
  };

  return (
    <>
      <Stack direction={'row'} spacing={2}>
        <FormControl variant="outlined" fullWidth disabled={!todoList.length}>
          <InputLabel htmlFor="search-input">
            Search
          </InputLabel>

          <OutlinedInput
            id="search-input"
            type={'text'}
            value={searchValue}
            onChange={(e: inputChangeEventType) => inputChangeHandler(e, setSearchValue)}
            fullWidth
            autoFocus
            startAdornment={<SearchOutlinedIcon />}
            endAdornment={
              searchValue && <InputAdornment position="end">
                <IconButton
                  aria-label="clear search text field"
                  onClick={() => setSearchValue('')}
                  edge="end">
                  {<ClearOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            }
            label={'Search'}/>
        </FormControl>

        <Button
          onClick={() => openModalHandler()}
          variant={'outlined'}
          title={'Add new item'}
          color={'primary'}
          startIcon={<AddOutlinedIcon />}>
          Add
        </Button>
      </Stack>

      <AppContentHeaderAddItemModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </>
  );
};

export default AppContentHeader;
