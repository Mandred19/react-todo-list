import React, { FC, ReactElement, useState } from 'react';
import {
  Backdrop,
  Box,
  Button,
  Fade, FormControl, FormControlLabel,
  IconButton,
  InputLabel,
  Modal,
  OutlinedInput,
  Stack, Switch, Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IUseModalVisibility } from '../../../hooks/useModalVisibility';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { inputChangeEventType, inputChangeHandler } from '../../../utils/inputChangeHandler';

const useStyles = makeStyles((theme: Theme) => ({
  modalWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 360,
    backgroundColor: '#fff',
  },
  modalHeader: {
    padding: theme.spacing(2),
  },
  modalContent: {
    padding: theme.spacing(2),
  },
  modalFooter: {
    padding: theme.spacing(2),
  },
}));

const AppContentHeaderAddItemModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const classes = useStyles();
  const [itemTitle, setItemTitle] = useState<string>('');

  const closeModalHandler = () => {
    setModalVisibility(false);
  };

  return (
    <Modal
      open={modalVisibility}
      onClose={() => closeModalHandler()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={modalVisibility}>
        <Box className={classes.modalWrapper}>
          <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'space-between'} className={classes.modalHeader}>
            <Typography variant={'h6'}>
              Add new item
            </Typography>

            <IconButton onClick={() => closeModalHandler()} title={'Close modal'} edge="end" aria-label="close modal">
              <CloseOutlinedIcon />
            </IconButton>
          </Stack>

          <Stack spacing={2} className={classes.modalContent}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="item-title-input">
                Title
              </InputLabel>

              <OutlinedInput
                id="item-title-input"
                type={'text'}
                value={itemTitle}
                onChange={(e: inputChangeEventType) => inputChangeHandler(e, setItemTitle)}
                fullWidth
                autoFocus
                label={'Title'}/>
            </FormControl>

            <Box>
              <FormControlLabel control={<Switch />} label="Set as favorite" />
            </Box>
          </Stack>

          <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'end'} className={classes.modalFooter}>
            <Button
              onClick={() => closeModalHandler()}
              variant={'text'}
              title={'Cancel'}
              color={'secondary'}>
              Cancel
            </Button>

            <Button
              onClick={() => closeModalHandler()}
              variant={'outlined'}
              title={'Save'}
              color={'primary'}>
              Save
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppContentHeaderAddItemModal;
