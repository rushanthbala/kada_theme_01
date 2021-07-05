import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicLayout from "../components/layout/publicLayout/publiclayout";
import Headers from "../components/layout/header/header";
import Product from "../components/layout/productCard/productCard";

function App() {
  const AppbarDetails = {
    home: "home",
    category: "category",
  };
  const social = {
    fb: "fb",
    ig: "i",
    tw: "twiter",
    ln: "linkin",
  };
  const businessDetail = {
    phoneNo: "0771234567",
    address: "0771234567",
    whatAppNo: "0771234567",
  };
  const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];
  const productDetail = [
    {
    p_product_id: '1234567890',
    kada_id:'0000001',
    p_name : 'saree',
    p_category : 'women collection' ,
    p_description : 'The saree , is a garment traditionally worn in Sri Lanka' ,
    p_orinal_price : '2500' ,
    p_offer_price: '2000',
    p_image:"https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
    },
    {
    p_product_id: '1234567890',
    kada_id:'0000001',
    p_name : 'saree',
    p_category : 'women collection' ,
    p_description : 'The saree , is a garment traditionally worn in Sri Lanka' ,
    p_orinal_price : '2500' ,
    p_offer_price: '2000',
    p_image:"https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
    },
    {
      p_product_id: '1234567890',
      kada_id:'0000001',
      p_name : 'saree',
      p_category : 'women collection' ,
      p_description : 'The saree , is a garment traditionally worn in Sri Lanka' ,
      p_orinal_price : '2500' ,
      p_offer_price: '2000',
      p_image:"https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
      },
      {
      p_product_id: '1234567890',
      kada_id:'0000001',
      p_name : 'saree',
      p_category : 'women collection' ,
      p_description : 'The saree , is a garment traditionally worn in Sri Lanka' ,
      p_orinal_price : '2500' ,
      p_offer_price: '2000',
      p_image:"https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
    },
      
    {
      p_product_id: '1234567890',
      kada_id:'0000001',
      p_name : 'saree',
      p_category : 'women collection' ,
      p_description : 'The saree , is a garment traditionally worn in Sri Lanka' ,
      p_orinal_price : '2500' ,
      p_offer_price: '2000',
      p_image:"https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
      },
  ];
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <PublicLayout
              AppbarDetails={AppbarDetails}
              social={social}
              businessDetail={businessDetail}
            >
              <Headers content={content} />
              <Product productDetail={productDetail} /> 
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
