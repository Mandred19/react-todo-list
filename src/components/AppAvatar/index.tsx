import React, { FC, ReactElement } from 'react';
import { Avatar } from '@mui/material';
import { AvatarProps } from '@mui/material/Avatar/Avatar';
import { UserEntity } from '../../store/types/user.types';

const AppAvatar: FC<Props> = (props: Props): ReactElement => {
  const {user} = props;

  const stringToColor = (string: string): string => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const avatarDatas = (userName: string) => {
    /* If userName is empty string, firstWord = '-' */
    const firstWord = `${userName.split(' ')[0] || '-'}`;
    const secondWord = `${userName.split(' ')[1] || ''}`;

    return {
      sx: {
        bgcolor: stringToColor(userName),
      },
      children: `${firstWord[0]}${secondWord ? secondWord[0] : ''}`,
    };
  };

  return (
    <Avatar {...avatarDatas(user.name)} {...props}/>
  );
};

export default AppAvatar;

interface Props extends AvatarProps {
  user: UserEntity;
}
