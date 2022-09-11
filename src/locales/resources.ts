import { Resource } from 'i18next';

import commonEN from './EN/common.json';
import commonRU from './RU/common.json';

import listEN from './EN/list.json';
import listRU from './RU/list.json';

import listItemEN from './EN/listItem.json';
import listItemRU from './RU/listItem.json';

import userInfoEN from './EN/userInfo.json';
import userInfoRU from './RU/userInfo.json';

import authorizationEN from './EN/authorization.json';
import authorizationRU from './RU/authorization.json';

export const resources: Resource = {
  en: {
    common: commonEN,
    list: listEN,
    listItem: listItemEN,
    userInfo: userInfoEN,
    authorization: authorizationEN,
  },
  ru: {
    common: commonRU,
    list: listRU,
    listItem: listItemRU,
    userInfo: userInfoRU,
    authorization: authorizationRU,
  },
};
