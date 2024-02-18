import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CheckCircleOutline as CheckCircleOutlineIcon, Close as CloseIcon } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

function Success({ open, message, onClose }) {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <SnackbarContent
        className={classes.success}
        message={
          <span className={classes.message}>
            <CheckCircleOutlineIcon className={classes.icon} />
            {message}
          </span>
        }
        action={
          <IconButton size="small" color="inherit" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </Snackbar>
  );
}

export default Success;
