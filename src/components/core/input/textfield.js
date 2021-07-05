import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
    font: {
        textAlign: 'left',
        font: 'Bold 13px/26px PT Sans',
        letterSpacing: '0.46px',
        color: '#1E2022',
        textTransform: 'uppercase',
        opacity: '1',
    },
    textField: {
        minHeight: '100px',
        // width:'360px',
    },
    inputRoot: {
        height: 'auto',
        marginTop: '23px',
        '& > fieldset': {
            border: '0.75px solid #3F44511F',
            top: '-2px',
            bottom: '-2px',
            '& > legend': {
                display: 'none',
            },
        },
    },

    // input: {
    //   minHeight: '116px',
    //   maxWidth:'750px',
    // },
    input: {
        width: '100%',
        maxWidth: (props) => (props.mytype ? '750px' : '700px'),
        minHeight: (props) => (props.mytype ? '116px' : 'auto'),
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
                id={id}
                name={name}
                type={type}
                label={label}
                value={value}
                placeholder={placeholder}
                error={error}
                helperText={error && errorMessage}
                fullWidth
                variant="outlined"
                onChange={(event) => handleChange(event)}
                InputLabelProps={{
                    shrink: true,
                    classes: {
                        shrink: classes.font,
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
