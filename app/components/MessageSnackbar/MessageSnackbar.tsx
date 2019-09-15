import React from 'react';
import {
  Snackbar, SnackbarContent, Icon, IconButton,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Close as CloseIcon } from '@material-ui/icons';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  message: string;
}

const useStyles = makeStyles({
  success: {
    backgroundColor: green[600],
  },
});

export const MessageSnackbar = ({ isOpen, handleClose, message }: Props) => {
  const classes = useStyles({});
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classes.success}
        message={(
          <span>
            <Icon />
            {message}
          </span>
        )}
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default MessageSnackbar;
