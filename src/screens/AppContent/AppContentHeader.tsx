import React, { FC, ReactElement, useState, Suspense } from 'react';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Theme, Tooltip,
} from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddIcon from '@mui/icons-material/Add';
import AddNewItemModal from './AddNewItemModal';
import { inputChangeEventType, inputChangeHandler } from '../../utils/inputChangeHandler';
import useModalVisibility from '../../hooks/useModalVisibility';
import { useAppSelector } from '../../store/hooks';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  appContentHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const AppContentHeader: FC = (): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation(['common', 'list']);
  const { todoList } = useAppSelector((state) => state.todoListSlice);
  const [searchValue, setSearchValue] = useState<string>('');
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  return (
    <>
      <Stack direction={'row'} spacing={2} className={classes.appContentHeader}>
        <FormControl variant="outlined" fullWidth disabled={!todoList.length}>
          <InputLabel htmlFor="search-input">
            {t('common_search_label_input')}
          </InputLabel>

          <OutlinedInput
          id="search-input"
          type={'text'}
          value={searchValue}
          onChange={(e: inputChangeEventType) => inputChangeHandler(e, setSearchValue)}
          fullWidth
          autoFocus
          startAdornment={<SearchOutlinedIcon style={{marginRight: 8}}/>}
          endAdornment={
            searchValue && <InputAdornment position="end">
              <Tooltip title={t('common_search_clear_button_title')}>
                <span>
                  <IconButton
                  aria-label={t('common_search_clear_button_title')}
                  onClick={() => setSearchValue('')}>
                    {<ClearOutlinedIcon />}
                  </IconButton>
                </span>
              </Tooltip>
            </InputAdornment>
          }
          label={t('common_search_label_input')}/>
        </FormControl>

        <Tooltip title={t('list_add_button_title', { ns: 'list' })}>
          <span>
            <Button
            onClick={() => setModalVisibility(true)}
            variant={'outlined'}
            color={'primary'}
            startIcon={<AddIcon />}
            style={{height: '100%'}}
            aria-label={t('list_add_button_title', { ns: 'list' })}>
            {t('list_add_button', { ns: 'list' })}
            </Button>
          </span>
        </Tooltip>
      </Stack>

      <AddNewItemModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
    </>
  );
};

export default AppContentHeader;
