import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  FormHelper: {
    marginLeft: '0px',
  },
  shrink: {
    textAlign: 'left',
    transform: 'translate(0px, 0px) scale(1) !important',
    fontSize: '16px',
    color: '#1E2022',
    font: 'SemiBold 13px/26px Poppins',
    letterSpacing: ' 0.46px',
    textTransform: 'uppercase',
    opacity: '1',
    [theme.breakpoints.down('sm')]: {
      font: 'Bold 11px/26px Poppins',
    },
  },
  textField: {
    minHeight: '70px',
    width: '100%',
  },

  primary: {
    color: 'primary',
  },
  inputRoot: {
    // borderRadius: '240px',
    minHeight: '40px',
    [theme.breakpoints.up('sm')]: {
      marginTop: (props) => (props.Rus ? '-64px' : '0px'),
    },
    borderRadius: '16px',
    // padding: '0.2rem',
    opacity: 1,
    [theme.breakpoints.down('sm')]: {
      font: 'Regular 10px/26px Poppins',
    },
  },
});

const InputField = ({
  classes,
  id,
  name,
  label,
  placeholder,
  type,
  error,
  errorMessage,
  ...rest
}) => {
  const [value, setValue] = useState(rest.value);
  const handleChange = (event) => {
    const { getValue } = rest;
    if (getValue) {
      getValue(event.target.value);
    }
    setValue(event.target.value);
  };

  return (
    <div className={classes.textField}>
      <TextField
        size="small"
        className={classes.input}
        id={id}
        name={name}
        type={type}
        label={label}
        value={value}
        placeholder={placeholder}
        error={error}
        helperText={error && errorMessage}
        fullWidth
        // width='1000px'
        variant="outlined"
        onChange={(event) => handleChange(event)}
        FormHelperTextProps={{
          classes: {
            root: classes.FormHelper,
          },
        }}
        InputProps={{
          classes: {
            root: classes.inputRoot,
            input: classes.input,
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default withStyles(styles)(InputField);
