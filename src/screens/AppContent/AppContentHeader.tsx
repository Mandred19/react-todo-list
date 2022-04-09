import React, { FC, ReactElement, useState } from 'react';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Theme,
} from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';
import AddNewItemModal from './AddNewItemModal';
import { inputChangeEventType, inputChangeHandler } from '../../utils/inputChangeHandler';
import useModalVisibility from '../../hooks/useModalVisibility';
import { useAppSelector } from '../../store/hooks';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  appContentHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const AppContentHeader: FC = (): ReactElement => {
  const classes = useStyles();
  const {todoList} = useAppSelector((state) => state.todoListSlice);
  const [searchValue, setSearchValue] = useState<string>('');
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  return (
    <>
      <Stack direction={'row'} spacing={2} className={classes.appContentHeader}>
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
          onClick={() => setModalVisibility(true)}
          variant={'outlined'}
          title={'Add new item'}
          color={'primary'}
          startIcon={<AddIcon />}>
          Add
        </Button>
      </Stack>

      <AddNewItemModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </>
  );
};

export default AppContentHeader;
