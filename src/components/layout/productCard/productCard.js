import React from "react";
import ProductCard from "../../inital/cards/productCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => (
  {
    root: {
      display: "flex",
      maxWidth: '1300px',
      margin: '0 auto',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '80px',
      "& > :nth-child(n+1)": {
        margin: "12px",
        [theme.breakpoints.down('md')]: {
          margin: '20px'
        },
      },
    },
  }
));
const App = (props) => {
  const classes = useStyles();
  console.log(props.productDetail.length);
  return (
    <div className={classes.root}>
      {props.productDetail &&
        props.productDetail.slice(0,props.productDetail.length).map((item, i) => (
          <ProductCard key={i} productDetail={item} />
        ))
      }
      {/* {props.productDetail &&
        props.productDetail.slice(4,props.productDetail.length).map((item, i) => (
          <ProductCard key={i} productDetail={item} />
        ))
      } */}
      {/* <ProductCard  productDetail={props.productDetail}/> */}
    </div>
  );
};

export default App;
