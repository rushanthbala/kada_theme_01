import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        alignItems: 'center',
        border:` 4px solid ${theme.palette.primary.main}`,
        borderRadius:'10px',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
        },
        width: 900,
    },
    main:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#FEB38B',
        minHeight:'10em',
        marginBottom:'32px',
        padding: '12px',
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,

    },
    iconButton: {
        padding: 10,

    },
    SearchButton:{
        backgroundColor:`${theme.palette.primary.main}` ,
        height:'50px',
        width:'5%',
        // border:'4px solid #FF6801',
        borderRadius:'0px',
        borderLeft: '4px solid #FF6801',

    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function DynmamicInput() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Paper component="form" className={classes.root}>

                <InputBase
                    className={classes.input}
                    placeholder="Search Security Here"
                    inputProps={{ 'aria-label': 'Search Security Here' }}
                />
                <IconButton type="submit" className={classes.SearchButton} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
        </div>

    );
}
