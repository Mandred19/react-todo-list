import React, { FC, ReactElement } from 'react';
import {Button, Stack, Theme, Tooltip} from '@mui/material';
import { makeStyles } from '@mui/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useModalVisibility from '../../../hooks/useModalVisibility';
import DeleteAllItemsConfirmationModal from './DeleteAllItemsConfirmationModal';
import { betweenChildrenMixin } from '../../../styles/mixins';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({
  appContentFooter: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    ...betweenChildrenMixin({
      marginRight: theme.spacing(2),
    }),
  },
}));

const AppContentFooter: FC = (): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation(['list']);
  const {modalVisibility, setModalVisibility} = useModalVisibility();

  return (
    <>
      <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'flex-end'} className={classes.appContentFooter}>
        <Tooltip title={t('list_clear_list_button', { ns: 'list' })}>
        <span>
          <Button
            onClick={() => setModalVisibility(true)}
            variant={'outlined'}
            color={'error'}
            startIcon={<DeleteForeverIcon />}
            aria-label={t('list_clear_list_button', { ns: 'list' })}>
            {t('list_clear_list_button', { ns: 'list' })}
          </Button>
        </span>
        </Tooltip>
      </Stack>

      <DeleteAllItemsConfirmationModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} />
    </>
  );
};

export default AppContentFooter;
