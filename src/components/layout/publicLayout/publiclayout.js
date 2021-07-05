import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonAppBar from "./appbar/appbar";
import Footer from "./footer/footer";

const useStyles = makeStyles({
  container: {},
  // children: {
  //   padding: "0 !important",
  //   justifyContent: "center",
  //   flexDirection: "column",
  //   // margin: "0 auto",
  //   // maxWidth: "1200px",
  // },
});

function Publiclayout(props, social, businessDetail) {
  const classes = useStyles();
  const { AppbarDetails } = props;

  console.log(props.businessDetail);

  return (
    <div>
      <ButtonAppBar AppbarDetails={AppbarDetails} />
      {/* <Container className={classes.container}> */}
      <div item xs={12} sm={9} className={classes.children}>
        {props.children}
      </div>
      {/* </Container> */}
      <Footer social={props.social} businessDetail={props.businessDetail} />
    </div>
  );
}

export default Publiclayout;
