import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
// import Logo from '../../../../assect/imge/png';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& > :nth-child(n+1)": {
      textDecoration: "none",
      color: "#FFFFFF",
      margin: "15px",
    },
  },
  Content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    "& > :nth-child(n+1)": {
      textDecoration: "none",
      textTransform: "none",
      margin: "18px 30px",
      fontSize: "18px",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
      margin: "18px",
    },
  },
  imagediv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: "300px",
    "& > :nth-child(n+1)": {
      margin: "18px",
      color: "#FFFFFF",
    },
  },
  title: {
    fontSize: "28px",
  },
  text: {
    fontSize: "16px",
    color: "#FFFFFF",
    textAlign: "center",
    "& > :nth-child(n+1)": {
      textDecoration: "none",
      color: "#FFFFFF",
    },
  },
  Social: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& > :nth-child(n+1)": {
      textDecoration: "none",
      color: "#FFFFFF",
      margin: "15px",
      flexDirection: "column",
    },
  },
  rootMain: {
    backgroundColor: theme.palette.primary.main,
    // position: "relative",
    // bottom: "0px",
    // width: "100%",
    // clear: "both",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { fb, ln, ig, tw } = props.social;
  const { phoneNo = "dd", whatAppNo, address } = props.businessDetail;
  console.log(props.businessDetail);
  return (
    <div className={classes.rootMain}>
      <div className={classes.root}>
        <div className={classes.imagediv}>
          <Typography variant="p">
            The perfect size to grill up a couple of burgers for everyone in the
            family
          </Typography>
        </div>
        <div className={classes.Content}>
          <div className={classes.link}>
            <Typography className={classes.title}> Pages</Typography>
            <Link className={classes.text} href="/">
              Home
            </Link>
            <Link className={classes.text} href="/">
              product
            </Link>
            <Link className={classes.text} href="/">
              upcoming update
            </Link>
          </div>

          <div className={classes.link}>
            <Typography className={classes.title}> Contact </Typography>
            <Link className={classes.text} href="/">
              {phoneNo}
            </Link>
            <Link className={classes.text} href="/">
              {whatAppNo}(What App)
            </Link>
            <Link className={classes.text} href="/">
              {address}
            </Link>
          </div>
        </div>
        <div className={classes.Social}>
          <div className={classes.Content}>
            <Link to={fb}>
              <FacebookIcon />
            </Link>
            <Link to={ln}>
              <LinkedInIcon />
            </Link>
            <Link to={ig}>
              <InstagramIcon />
            </Link>
            <Link to={tw}>
              <TwitterIcon />
            </Link>
          </div>
          {/* <Typography className={classes.text}>
            Developed by <a href="https://lizris.com/"> Kada </a>{" "}
          </Typography> */}
        </div>
      </div>
      <Typography className={classes.text}>
        Copyright © 2021 Security Haus. All rights reserved{" "}
      </Typography>
    </div>
  );
}
