import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Alert from '../Alert/alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) =>
  createStyles({
    snackbar: {
      position: 'relative',
      top: '0px',
    },
  })
);

export default function CustomSnackbar(props) {
  const { Severity, Message, handleClose, open } = props;
  const classes = useStyles(props);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        className={classes.snackbar}
      >
        <Alert onClose={handleClose} severity={Severity}>
          {Message}
        </Alert>
      </Snackbar>
    </>
  );
}
