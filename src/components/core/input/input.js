import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    border: '4px solid #FF6801',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    width: 900,
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEB38B',
    minHeight: '15em',
    marginBottom: '32px',
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  SearchButton: {
    backgroundColor: `${theme.palette.primary.secondary}`,
    height: '50px',
    width: '15%',
    color: '#FFFFFF',
    // border:'4px solid #FF6801',
    borderRadius: '0px 4px',
    borderLeft: ` 4px solid ${theme.palette.primary.main}`,
    margin: '-1px',
    '& :hover': {
      color: 'black',
    },
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Security Here"
          inputProps={{ 'aria-label': 'Search Security Here' }}
        />
        <Link href="servicelist">
          <Button
            // type="submit"
            className={classes.SearchButton}
            aria-label="search"
          >
            Search
          </Button>
        </Link>
      </Paper>
    </div>
  );
}
