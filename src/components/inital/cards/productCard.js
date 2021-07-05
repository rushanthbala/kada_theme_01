import React from "react";
import "./productCard.css";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./productCard.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "30px",
  },
});
const App = (props) => {
  const classes = useStyles();
  const { p_name, p_category, p_description, p_orinal_price, p_offer_price,p_image } = props.productDetail;
  console.log(props);
  return (
    <div className="root">
      <div className="wsk-cp-product">
        <div className="wsk-cp-img">
          <img
            src={p_image} 
            // src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
            alt="Product"
            className="img-responsive"
          />
        </div>
        <div className="wsk-cp-text">
          <div className="category">
            <span>{p_name}</span>
          </div>
          <div className="title-product">
            <h3>{p_category}</h3>
          </div>
          <div className="description-prod">
            <p>
             {p_description}
            </p>
          </div>
          <div className="card-footer">
            <div className="wcf-left">
            <span className="price"><strike>{p_orinal_price}</strike> </span> <span className="price"><b>{p_offer_price}</b> </span>
            </div>
            <div className="wcf-right">
              <Link href="#" className="buy-bt">
               <span>Buy</span>  <img className='what-app-image' src="data:image/jpeg;base64,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" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
