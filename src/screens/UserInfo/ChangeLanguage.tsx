import React, { FC, ReactElement, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AppLang } from '../../store/types/user.types';
import { changeUserInfo } from '../../store/actions/user.action';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const ChangeLanguage: FC = (): ReactElement => {
  const { t, i18n } = useTranslation(['userInfo']);
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.userSlice);

  const {id, appLang} = user;

  const [language, setLanguage] = useState<AppLang>(appLang || AppLang.EN_US);

  const handleChangeLanguage = async (newLang: AppLang): Promise<void> => {
    await dispatch(changeUserInfo({
      id,
      appLang: newLang,
    }));

    await i18n.changeLanguage(newLang);

    setLanguage(newLang);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="change-lang">
          {t('Language', { ns: 'userInfo' })}
        </InputLabel>

        <Select
        labelId="change-lang"
        id="change-lang"
        value={language}
        label={t('Language', { ns: 'userInfo' })}
        onChange={(event) => handleChangeLanguage(event.target.value as AppLang)}>
          <MenuItem value={AppLang.EN_US}>English</MenuItem>
          <MenuItem value={AppLang.RU_RU}>Русский</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ChangeLanguage;