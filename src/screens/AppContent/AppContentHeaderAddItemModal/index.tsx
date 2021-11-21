import React, { FC, ReactElement } from 'react';
import { Backdrop, Box, Button, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IUseModalVisibility } from '../../../hooks/useModalVisibility';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const useStyles = makeStyles({
  modalWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    // boxShadow: 24,
  },
  modalHeader: {

  },
  modalContent: {

  },
  modalFooter: {

  },
});

const AppContentHeaderAddItemModal: FC<IUseModalVisibility> = ({modalVisibility, setModalVisibility}): ReactElement => {
  const classes = useStyles();

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
            <Typography variant={'h5'}>
              Add new item
            </Typography>

            <IconButton onClick={() => closeModalHandler()} title={'Close modal'} edge="end" aria-label="close modal">
              <CloseOutlinedIcon />
            </IconButton>
          </Stack>

          <Stack spacing={2} className={classes.modalContent}>
            Content
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
              variant={'contained'}
              title={'Save item'}
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
