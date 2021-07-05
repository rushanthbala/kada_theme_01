import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import DrawerRight from "./drower";

const useStyles = makeStyles((theme) => (
  console.log(theme),
  {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width:'100%',
  },
  menuButton: {
    alignSelf: "end",
  },
  title: {
    margin: "0 20px",
    textDecoration: "none",
    color: "white",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  textgroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
      width: '100%'
    },
    // [theme.breakpoints.down("md")]: {
    // },
  },
  drawer: {
    display: "none",
    [theme.breakpoints.down('md')]: {
       display: "block",
      padding:'14px'
    },
  },
  right: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: "80px",
    width: "100%",
    padding: "10px",
  },
  rootMain: {
    padding: "10px",
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const { AppbarDetails } = props;

  return (
    <div className={classes.rootMain}>
      <AppBar position="static">
        {/* <Toolbar className={classes.root}> */}
          <div className={classes.root}>
            <div className={classes.textgroup}>
              <Link href="/#" className={classes.tite}>
                {/* <div className={classes.logo}> */}
                <img
                  className={classes.logo}
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?size=338&ext=jpg"
                />
                {/* </div> */}
              </Link>
              <Typography variant="h6">
                <Link href="/#" className={classes.title}>
                  {AppbarDetails.home}
                </Link>
              </Typography>

              <Typography variant="h6">
                <Link href="/#" className={classes.title}>
                  {AppbarDetails.category}
                </Link>
              </Typography>
              <div className={classes.drawer}>
                <DrawerRight home={AppbarDetails.home} />
              </div>
            </div>
          </div>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}
