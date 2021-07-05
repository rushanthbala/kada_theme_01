import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  button: {
    width: '5rem',
    height: '4rem',
    background: '#FF6801',
    borderRadius: ' 18px',
    color: '#FFFFFF',
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      color: 'black',
      // background:'tr'
    },
  },
}));

export default function Buttons(props) {
  const classes = useStyles();
  const { text } = props;
  return (
    <Button size="medium" className={classes.button} {...props}>
      {text}
    </Button>
  );
}
