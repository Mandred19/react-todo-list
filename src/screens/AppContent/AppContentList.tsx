import React, { FC, ReactElement, useState } from 'react';
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText, Stack, Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { betweenChildrenMixin } from '../../theme/styleMixins';

const useStyles = makeStyles({
  listItemButtons: {
    ...betweenChildrenMixin({
      marginRight: 16,
    }),
  },
});

const AppContentList: FC = (): ReactElement => {
  const classes = useStyles();
  const [checked, setChecked] = useState([0]);

  const checkBoxHandler = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const iconButtonHandler = (value: string) => {
    switch (value) {
      case 'setCompleted': break;
      case 'setFavorite': break;
      case 'deleteItem': break;
      default: break;
    }
  };

  return (
    <>
      <List sx={{ width: '100%', minWidth: 360 }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <Box className={classes.listItemButtons}>
                  <IconButton onClick={() => iconButtonHandler('setCompleted')} title={'Set as done'} edge="end" aria-label="done">
                    <CheckOutlinedIcon />
                  </IconButton>

                  <IconButton onClick={() => iconButtonHandler('setFavorite')} title={'Set as favorite'} edge="end" aria-label="favorite">
                    <StarBorderOutlinedIcon />
                  </IconButton>

                  <IconButton onClick={() => iconButtonHandler('deleteItem')} title={'Delete this item'} edge="end" aria-label="delete">
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              }
              disablePadding>

              <ListItemButton role={undefined} onClick={checkBoxHandler(value)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }} />
                </ListItemIcon>

                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/*<Stack alignItems={'center'} justifyContent={'center'}>*/}
      {/*  <Typography variant={'body1'}>*/}
      {/*    This list is empty*/}
      {/*  </Typography>*/}
      {/*</Stack>*/}
    </>
  );
};

export default AppContentList;
