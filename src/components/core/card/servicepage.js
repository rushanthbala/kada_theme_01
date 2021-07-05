import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
// import Test2 from '../../assets/images/PoliceOfficer.svg';
import GroupIcon from '@material-ui/icons/Group';
import Images from '../../../../assets/images/PoliceOfficer.svg';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Buttons from '../Buttons/button';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
  },
  media: {
    borderRadius: '8px ​8px 0px 0px',
    width: '100%',
    // height: 0,
    // paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
  content: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    width: '100%',
    height: '40px',
    background: '#FF6801',
    borderRadius: ' 18px',
    color: '#FFFFFF',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: '8px',
    margin: '2px',
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      color: 'black',
      // background:'tr'
    },
  },
  buttonDisplay: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  contentMain: {
    padding: '10px',
  },
}));

const SearviceListCard = (props) => {
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <CardMedia />
      <img className={classes.media} src={Images} title="Paella dish" />
      {/* <img
        className={classes.image}
        src={Images}
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      <div className={classes.contentMain}>
        <CardContent className={classes.content}>
          <Typography
            variant="body1"
            color="textSecondary"
            component="h5"
            //   className={classes.typography}
          >
            <b>SECURE MONITORING SERVICES</b>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h6"
            //   className={classes.typography}
          >
            Security guarding service is the core service line of G4S.
          </Typography>
        </CardContent>
        {/* <div className={classes.buttonDisplay}>
         
          <Button className={classes.typography}>Reserve Now</Button>
        </div> */}
        <Grid item xs={12} spacing={1}>
          <Grid item xs={12} sm={6} md={12} ls={6}>
            <Link href="/service">
              <Button className={classes.typography}>See More</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={12} ls={6}>
            <Button className={classes.typography}>Reserve Now</Button>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default SearviceListCard;
