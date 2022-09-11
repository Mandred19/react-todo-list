import React, { FC, ReactElement } from 'react';
import { Button, Container, Stack, Theme, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles((theme: Theme) => ({
  appNavigationButtons: {
    padding: theme.spacing(2),
  },
}));

const AppBreadcrumbs  : FC = (): ReactElement => {
  const classes = useStyles();
  const { t } = useTranslation(['common']);
  const navigation = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container maxWidth={'xl'} className={classes.appNavigationButtons}>
      <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'flex-start'}>
        {
          pathname !== '/list' &&
          <Tooltip title={t('Click to go back')}>
            <Button
              onClick={() => navigation(-1)}
              variant={'outlined'}
              color={'inherit'}
              startIcon={<ArrowBackIcon />}
              aria-label={t('Click to go back')}>
              {t('Back')}
            </Button>
          </Tooltip>
        }

        {/*{
          pathname === '/list' &&
          <Tooltip title={'Click to go forward'}>
            <Button
              onClick={() => navigation(1)}
              variant={'outlined'}
              color={'inherit'}
              startIcon={<ArrowForwardIcon />}
              aria-label={'Click to go forward'}>
              Forward
            </Button>
          </Tooltip>
        }*/}
      </Stack>
    </Container>
  );
};

export default AppBreadcrumbs;