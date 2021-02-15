import React from 'react';
import "./Home.css";
import Product from  "./Product";

function Home() {
    return (
        <div className="home">
          <img 
          className="home__image" 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
          alt=""/> 

<div className="home__row">
<Product 
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
 price={15.89}
 rating={4}
 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
  
 /> 
 <Product 
          id="4903850"
          title="All-new Echo Dot (4th Gen) - Charcoal - bundle with Sengled Bluetooth bulb"
 price={29.89}
 rating={4}
 image="https://m.media-amazon.com/images/I/61G-0k098UL._AC_UY218_.jpg"
 
 /> 
</div>

<div className="home__row">
<Product 
          id="23445930"
          title="Portable Blender, Smoothie Blenders, Personal Size Blender USB Rechargeable Smoothies and Shakes Juicer Cup, 4000mAh Battery Strong Power Pink"
 price={30.89}
 rating={4}
 image="https://m.media-amazon.com/images/I/61RrV1YwYxL._AC_UY218_.jpg"
 
 /> 
 <Product 
          id="3253435435"
          title=" New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
 price={578.99}
 rating={4}
 image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
 
 /> 
 <Product 
          id="49538094"
          title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
 price={489.89}
 rating={4}
 image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UY218_.jpg"
 
 /> 
 </div>
 <div className="home__row">
 <Product 
          id="12321891"
          title="Samsung 32in Full HD Curved Screen LED TFT LCD Monitor Glossy White MagicBright FreeSync Technology Eco Saving Plus Eye Saver DisplayPort HDMI (LC32F397FWNXZA)"
 price={229.99}
 rating={4}
 image="https://m.media-amazon.com/images/I/81sWu6u-CEL._AC_UY218_.jpg"
 
 /> 
 </div>
</div>
         
        
    ); 
}

export default Home;
