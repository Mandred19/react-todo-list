import React, { FC, ReactElement } from 'react';
import { Button, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ChangeLanguage: FC = (): ReactElement => {
  const { t, i18n } = useTranslation(['userInfo']);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = async (lang: string): Promise<void> => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Tooltip title={t('Change language', { ns: 'userInfo' })}>
        <Button
          onClick={handleClick}
          variant={'outlined'}
          color={'inherit'}
          aria-label={t('Change language', { ns: 'userInfo' })}>
          {t('Change language', { ns: 'userInfo' })}
        </Button>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
        <MenuItem onClick={() => handleChangeLanguage('en')}>
          <ListItemIcon>
            EN
          </ListItemIcon>
          English
        </MenuItem>

        <MenuItem onClick={() => handleChangeLanguage('ru')}>
          <ListItemIcon>
            RU
          </ListItemIcon>
          Русский
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ChangeLanguage;